"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LightSpotify = void 0;
const token_1 = __importDefault(require("./config/token"));
class LightSpotify {
    constructor(ID, SECRET, REDIRECT_UI) {
        this.getToken = token_1.default;
        this.accessToken = {
            token: "",
            arrived: false,
        };
        this.getToken(ID, SECRET, REDIRECT_UI)
            .then((res) => res.json())
            .then((data) => {
            const TokenState = {
                token: data.access_token,
                arrived: true,
            };
            const ObjAssign = Object.assign(this.accessToken, TokenState);
            console.log(ObjAssign);
        })
            .catch((err) => console.log(err));
    }
}
exports.LightSpotify = LightSpotify;
