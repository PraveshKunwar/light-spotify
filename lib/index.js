"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LightSpotify = void 0;
const albums_1 = require("./albums");
const artists_1 = require("./artists");
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
        this.getAlbumTracks = albums_1.getAlbumTracks;
        this.getMultipleArtists = artists_1.getMultipleArtists;
        this.getArtist = artists_1.getArtist;
        this.getArtistTopTracks = artists_1.getArtistTopTracks;
        this.getArtistRelatedArtists = artists_1.getArtistRelatedArtists;
        this.getArtistAlbums = artists_1.getArtistAlbums;
    }
    /**
     * @returns The access token. (MUST BE SET BEFOREHAND USING setAccessToken SETTER.)
     */
    get accessToken() {
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
