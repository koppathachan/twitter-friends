import { App } from "./App";
import { FriendController } from "./api/FriendController";

let twitterbackend = new App();

twitterbackend.register("GET", "/friends/mutual", FriendController.getMutualFriendIds)
twitterbackend.register("GET", "/friends/show", FriendController.getFriends)

twitterbackend.start();