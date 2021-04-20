# What is light-spotify?

light-spotify is a Spotify wrapper to make it easy to work with Spotify's API.

# Installation

For npm:
`npm i light-spotify`

For yarn:
`yarn add light-spotify`

## Usage

Its important to make sure that you have a valid access token to make requests. To make an access token, you can use the simple code below.

```js
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
  })
  .then(res => res.json())
  .then(data => {
console.log(data)
/*{
  access_token: 'GENERATED ACCESS TOKEN',
  token_type: 'Bearer',
  expires_in: 3600
}*/.
})
```

Then, create a new instance of the package.

```js
import { LightSpotify } from 'light-spotify';
const SpotifyAPI = new LightSpotify();

//set access token here.
SpotifyAPI.setAccessToken = 'ACCESS_TOKEN';

//if you ever need to get the access token.
console.log(Spotify.getAccessToken); //returns the token.
```

## Requests

Making requests with light-spotify is easy. Want to get multiple albums? Easy.

```js
const { LightSpotify } = require("light-spotify");
const spotify = new LightSpotify();
const albumIds = ['ID1', 'ID2', 'ID3']; // max 20 ids;
//set the access token first.
spotify.setAccessToken = 'asd'; // get the auth token;
//param 1: token || param 2: the album id or album ids || param 3: the market (valid ISO 3161 code).
spotify
	.getMultipleAlbums(LightSpotify.getAccessToken, albumIds, 'US') // returns Promise of AxiosResponse
	//Handle the resolved promise.
	.then((i) => {
		console.log(i.data);
	})
	//handle errors
	.catch(console.error);
```

Oh yeah. And we also have full Typescript support. :)

Check out /docs/TOC.md for all data requests that you can make.

## Contributions

Any contributions are welcome. Check out CONTRIBUTING.md for more info.
