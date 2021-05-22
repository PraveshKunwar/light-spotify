import { getAlbum, getMultipleAlbums, getAlbumTracks } from './albums';
import {
	getArtist,
	getArtistAlbums,
	getArtistRelatedArtists,
	getArtistTopTracks,
	getMultipleArtists,
} from './artists';
import { browseNewReleases, browseFeaturedPlaylists } from './browse';
/**
 * @returns Creates a new instance of Light Spotify.
 * @description Initiate a new instance of Light Spotify, with access to the public methods.
 */
class LightSpotify {
	private access_token: string;
	public getAlbum = getAlbum;
	public getMultipleAlbums = getMultipleAlbums;
	public getAlbumTracks = getAlbumTracks;
	public getMultipleArtists = getMultipleArtists;
	public getArtist = getArtist;
	public getArtistTopTracks = getArtistTopTracks;
	public getArtistRelatedArtists = getArtistRelatedArtists;
	public getArtistAlbums = getArtistAlbums;
	public browseNewReleases = browseNewReleases;
	public browseFeaturedPlaylists = browseFeaturedPlaylists;
	/**

	 * @returns A new instance of LightSpotify.
	 */
	public constructor() {}
	/**
	 * @returns The access token. (MUST BE SET BEFOREHAND USING setAccessToken SETTER.)
	 */
	public get accessToken(): string {
		return this.access_token;
	}
	/**
	 * @returns Sets the access token (check out Spotify's Guide)
	 * @link https://developer.spotify.com/documentation/general/guides/authorization-guide/
	 */
	public set setAccessToken(token: string) {
		this.access_token = token;
	}
}

export { LightSpotify };
