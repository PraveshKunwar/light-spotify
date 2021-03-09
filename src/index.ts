import getToken from "./config/token";
import { Data } from "./@types/Data";

class LightSpotify {
  public getToken = getToken;
  public access_token: string;
  /**
   *
   * @param ID The CLIENT_ID of the Spotify App.
   * @param SECRET The Client_SECRET of the Spotify App.
   * @param REDIRECT_UI The redirect URI of the Spotify App.
   * @returns The access_token of the Spotify Client, to make requests to various Spotify Endpoints.
   */
  public constructor() {
    //
  }
  /**
   * @returns Returns the access token;
   */
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
