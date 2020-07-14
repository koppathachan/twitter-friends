import * as request from 'request';
import * as util from 'util';
import { Conf } from './Config';
import { Observable } from 'rxjs';

const get = util.promisify(request.get);
const DELAY = 300
export class TwitterApi {

    async mutualFriendIds(user1: string, user2: string) {
        const delay = t => new Promise(resolve => setTimeout(resolve, t))
        console.log("Getting mutual ids")
        try {
            await delay(DELAY);
            let first = await this.friendsIds(user1);
            console.log("user1 ids")
            await delay(DELAY);
            let second = await this.friendsIds(user2);
            console.log("user2 ids")
            let set = new Set(first);
            let intersection = new Set()
            second.forEach(it => set.has(it) && intersection.add(it));
            return intersection;
        } catch (ex) {
            throw ex
        }
    }

    async friendsIds(username: string): Promise<string[]> {
        console.log(`Getting ids for ${username}`)
        const delay = t => new Promise(resolve => setTimeout(resolve, t))

        let cursor = "-1";
        let ids = [];
        try {
            while (cursor != "0") {
                let response = await get({
                    uri: `https://api.twitter.com/1.1/friends/ids.json?screen_name=${username}&cursor=${cursor}&stringify_ids=true`,
                    auth: {
                        bearer: Conf.Token
                    }
                });
                let body = JSON.parse(response.body);
                cursor = body.next_cursor_str;
                ids.push(...(body.ids));
                await delay(DELAY)
            }
            return ids;

        } catch (ex) {
            throw ex
        }
    }

    show(ids: string) {
        const count = Math.ceil(ids.split(",").length / 100)
        return new Observable(subs => {
            let resultcounter = count
            for (let i = 0; i < count; i++) {
                setTimeout(
                    () => get({
                        //Only 100 users per request.
                        uri: `https://api.twitter.com/1.1/users/lookup.json?user_id=${ids.split(",").slice(i, i + 100).join()}`,
                        auth: {
                            bearer: Conf.Token
                        }
                    })
                        .then(res => {
                            resultcounter--;
                            subs.next(JSON.parse(res.body));

                        })
                        .catch(err => subs.error(err))
                        .finally(() => !resultcounter && subs.complete())
                    , DELAY)
            }
        });
    }
}