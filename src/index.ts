import getToken from "./config/token";
import { Data } from "./@types/Data";

class LightSpotify {
  public getToken = getToken;
  public access_token: string;
  public constructor(ID: string, SECRET: string, REDIRECT_UI: string) {
    this.getToken(ID, SECRET, REDIRECT_UI)
      .then((res: Response) => res.json())
      .then((data: Data) => {
        console.log(data.access_token);
      })
      .catch((err) => console.log(err));
  }
}
