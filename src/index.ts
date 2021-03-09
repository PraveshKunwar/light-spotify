import { AxiosResponse } from 'axios';
import { stringify } from 'querystring';
import { getAlbum, getMultipleAlbums, getAlbumTracks } from './albums';

class LightSpotify {
	/**
	 * @returns Promise<AxiosResponse>
	 */
	public getAlbum = getAlbum;
	/**
	 * @returns Promise<AxiosResponse>
	 */
	public getMultipleAlbums = getMultipleAlbums;
	/**
	 * @returns Promise<AxiosResponse>
	 */
	public getAlbumTracks = getAlbumTracks;
	public access_token: string;
	/**

	 * @returns A new instance of LightSpotify.
	 */
	public constructor() {}
	get getAccessToken() {
		return this.access_token;
	}
	/**
	 * @returns Sets the access token (check out Spotify's Guide)
	 * @link https://developer.spotify.com/documentation/general/guides/authorization-guide/
	 */
	set setAccessToken(token: string) {
		this.access_token = token;
	}
}

export { LightSpotify };
