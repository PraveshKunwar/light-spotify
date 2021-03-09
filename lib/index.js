"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LightSpotify = void 0;
const token_1 = __importDefault(require("./config/token"));
class LightSpotify {
    constructor() {
        this.getToken = token_1.default;
    }
    get getAccessToken() {
        return this.access_token;
    }
    set setAccessToken(token) {
        this.access_token = token;
    }
}
exports.LightSpotify = LightSpotify;
const ads = new LightSpotify();
