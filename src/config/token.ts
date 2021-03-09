/**
 *
 * @param CLIENT_ID The CLIENT_ID of the Spotify App.
 * @param CLIENT_SECRET The Client_SECRET of the Spotify App.
 * @param REDIRECT_URI The redirect URI of the Spotify App.
 * @returns The access_token of the Spotify Client, to make requests to various Spotify Endpoints.
 */

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
      Authorization: "Basic " + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`),
    },
    body: "grant_type=client_credentials",
  });
  return getData;
};

export default getToken;
