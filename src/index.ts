import { AxiosResponse } from 'axios';
import { stringify } from 'querystring';
import { getAlbum, getMultipleAlbums, getAlbumTracks } from './albums';
import { getMultipleArtists } from './artists';
/**
 * @class Creates a new instance of Light Spotify.
 */
class LightSpotify {
	private access_token: string;
	public getAlbum = getAlbum;
	public getMultipleAlbums = getMultipleAlbums;
	public getAlbumTracks = getAlbumTracks;
	public getMultipleArtists = getMultipleArtists;
	/**

	 * @returns A new instance of LightSpotify.
	 */
	public constructor() {}
	/**
	 * @returns The access token. (MUST BE SET BEFOREHAND USING setAccessToken SETTER.)
	 */
	public get getAccessToken(): string {
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
