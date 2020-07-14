require('dotenv').config()

export class Config {
    get Token(): string {
        return process.env.BEARER_TOKEN
    }
}

export const Conf = new Config()