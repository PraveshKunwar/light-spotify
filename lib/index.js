"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LightSpotify = void 0;
const albums_1 = require("./albums");
/**
 * @class Creates a new instance of Light Spotify.
 */
class LightSpotify {
    /**

     * @returns A new instance of LightSpotify.
     */
    constructor() {
        this.getAlbum = albums_1.getAlbum;
        this.getMultipleAlbums = albums_1.getMultipleAlbums;
    }
    get getAccessToken() {
        return this.access_token;
    }
    /**
     * @returns Sets the access token (check out Spotify's Guide)
     * @link https://developer.spotify.com/documentation/general/guides/authorization-guide/
     */
    set setAccessToken(token) {
        this.access_token = token;
    }
}
exports.LightSpotify = LightSpotify;
const t = new LightSpotify();
t.setAccessToken = 'asd';
