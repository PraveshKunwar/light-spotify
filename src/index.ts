import { stringify } from 'querystring';

class LightSpotify {
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

const ads = new LightSpotify();
