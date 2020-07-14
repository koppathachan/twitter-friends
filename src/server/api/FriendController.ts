import { RequestHandler, Request, Response } from "express";
import { FriendService } from "../FriendService";

export class FriendController {
    static getMutualFriendIds: RequestHandler = async (req: Request, res: Response) => {
        try {
            const user1 = <string>(req.query).user1 || "akhilsomething";
            const user2 = <string>(req.query).user2 || "MuttalKadavul";
            let ids = await new FriendService().getMutualFriendIds(user1, user2)
            res.status(200).json(ids)
        } catch (ex) {
            //TODO: error handling
            res.status(500).send(ex)
        }
    };

    static getFriends: RequestHandler = async (req: Request, res: Response) => {
        try {
            const ids: any = req.query.ids
            let friends = await new FriendService().getFriends(ids)
            res.status(200).json(friends)
        } catch (ex) {
            //TODO: error handling
            res.status(500).send(ex)
        }
    };
}