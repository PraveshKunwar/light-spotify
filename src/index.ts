import { AxiosResponse } from 'axios';
import { stringify } from 'querystring';
import { getAlbum, getMultipleAlbums } from './albums';
/**
 * @class Creates a new instance of Light Spotify.
 */
class LightSpotify {
	private access_token: string;
	public getAlbum = getAlbum;
	public getMultipleAlbums = getMultipleAlbums;
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
