import getToken from "./config/token";
import { Data } from "./@types/Data";

class LightSpotify {
  public getToken = getToken;
  public accessToken: object = {
    token: "",
    arrived: false,
  };
  /**
   *
   * @param ID The CLIENT_ID of the Spotify App.
   * @param SECRET The Client_SECRET of the Spotify App.
   * @param REDIRECT_UI The redirect URI of the Spotify App.
   * @returns The access_token of the Spotify Client, to make requests to various Spotify Endpoints.
   */
  public constructor(ID: string, SECRET: string, REDIRECT_UI: string) {
    this.getToken(ID, SECRET, REDIRECT_UI)
      .then((res: Response) => res.json())
      .then((data: Data) => {
        const TokenState = {
          token: data.access_token,
          arrived: true,
        };
        const ObjAssign = Object.assign(this.accessToken, TokenState);
        console.log(ObjAssign);
      })
      .catch((err) => console.log(err));
  }
}

export { LightSpotify };
