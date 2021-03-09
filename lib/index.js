"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const token_1 = __importDefault(require("./config/token"));
class LightSpotify {
    constructor(ID, SECRET, REDIRECT_UI) {
        this.getToken = token_1.default;
        this.getToken(ID, SECRET, REDIRECT_UI)
            .then((res) => res.json())
            .then((data) => {
            console.log(data.access_token);
        })
            .catch((err) => console.log(err));
    }
}
