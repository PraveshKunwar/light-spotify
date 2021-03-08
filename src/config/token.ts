/**
 *
 * @param CLIENT_ID The CLIENT_ID of the Spotify App.
 * @param CLIENT_SECRET The Client_SECRET of the Spotify App.
 * @param REDIRECT_URI The redirect URI of the Spotify App.
 * @returns The access_token of the Spotify Client, to make requests to various Spotify Endpoints.
 */

const setToken = async (
  CLIENT_ID: string,
  CLIENT_SECRET: string,
  REDIRECT_URI: string
): Promise<void> => {
  const baseUrl = "https://accounts.spotify.com/api/token";
  const getData = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`),
    },
    body: "grant_type=authorization_code",
  }).then(async (res: Response) => {
    const data: Promise<any> = await res.json();
    console.log(data);
  });
  return getData;
};

export default setToken;
