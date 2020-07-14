import { TwitterApi } from './TwitterApi';

export class FriendService {
    constructor() { }
    async getMutualFriendIds(user1: string, user2: string) {
        try {
            let mutuals = await new TwitterApi().mutualFriendIds(user1, user2)
            return Array.from(mutuals)
        } catch (ex) {
            throw ex
        }
    }

    async getFriends(ids: string) {
        return new Promise((resolve, reject) => {
            let res = []
            new TwitterApi().show(ids).subscribe(obs => res.push(obs), err => reject(err), () => resolve(res))
        })
    }
}
