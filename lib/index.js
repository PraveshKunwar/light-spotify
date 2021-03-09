"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LightSpotify = void 0;
const token_1 = __importDefault(require("./config/token"));
class LightSpotify {
    constructor() {
        this.createToken = token_1.default;
    }
    get getAccessToken() {
        return this.access_token;
    }
    set setAccessToken(token) {
        this.access_token = token;
    }
    set createAccessToken(details) {
        this.createToken(details.ID, details.SECRET, details.REDIRECT_URI)
            .then((res) => res.json())
            .then((data) => {
            globalThis.access_token = data.access_token;
        })
            .catch((err) => console.log(err));
    }
}
exports.LightSpotify = LightSpotify;
const ads = new LightSpotify();
ads.createAccessToken = {
    ID: '6280c79b51d7459bb30ab2ed01e97494',
    SECRET: '8e5f4ed1caf04f51af6b78cba17b461f',
    REDIRECT_URI: 'http://localhost:5000/callback',
};
console.log(ads.getAccessToken);
