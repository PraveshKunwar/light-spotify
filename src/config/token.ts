import fetch from "node-fetch";

/**
 *
 * @param CLIENT_ID The CLIENT_ID of the Spotify App.
 * @param CLIENT_SECRET The Client_SECRET of the Spotify App.
 * @param REDIRECT_URI The redirect URI of the Spotify App.
 * @returns The access_token of the Spotify Client, to make requests to various Spotify Endpoints.
 */

const Buffer = require("buffer").Buffer;
const getToken = async (
  CLIENT_ID: string,
  CLIENT_SECRET: string,
  REDIRECT_URI: string
): Promise<Response> => {
  const baseUrl = "https://accounts.spotify.com/api/token";
  const getData = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        new Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64"),
    },
    body: "grant_type=client_credentials",
  });
  return getData;
};

export default getToken;
