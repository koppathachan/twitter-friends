import * as express from 'express';
import * as cors from 'cors';

export class App {
    readonly app: express.Application = express();

    register(type: string, route: string,
        controller: express.RequestHandler) {
        switch (type) {
            case "GET":
                return this.app.get(route, controller);
            default:
                throw new Error("Method not found.");
        }
    }
    constructor() {
        this.app.set("port", process.env.PORT || 3000)
        this.app.use(cors({
            //TODO
            // origin: "http://localhost:4200"
        }))
        this.app.use(
            express.static("dist/twitter-friends")
        );
    }
    start() {
        this.app.listen(3000, () => {
            //TODO: version apis
            console.log(`App runnning at http://localhost:${this.app.get("port")}`)
        })
    }
}