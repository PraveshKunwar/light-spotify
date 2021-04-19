"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LightSpotify = void 0;
const albums_1 = require("./albums");
class LightSpotify {
    constructor() {
        this.getAlbum = albums_1.getAlbum;
        this.getMultipleAlbums = albums_1.getMultipleAlbums;
    }
    get getAccessToken() {
        return this.access_token;
    }
    set setAccessToken(token) {
        this.access_token = token;
    }
}
exports.LightSpotify = LightSpotify;
const t = new LightSpotify();
