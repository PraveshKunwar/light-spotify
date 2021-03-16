import axios, { AxiosResponse } from 'axios';
const _base = 'https://api.spotify.com/v1';

/**
 *
 * @param token The valid access token.
 * @param ids The id or ids of the artists.  NOTE: MULTIPLE IDS SHOULD BE IN CORRECT FORMAT.
 * @returns Info of multiple artists with the valid ids requested.
 * @link https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-multiple-artists
 */
export const getMultipleArtists = (
	token: string,
	ids: string | Array<string>
): Promise<void | AxiosResponse<any>> => {
	if (Array.isArray(ids)) {
		return axios
			.get(_base + `artists?ids=${ids.join('%2C')}`, {
				headers: {
					Authorization: 'Bearer ' + token,
				},
			})
			.catch((err) => console.log(err));
	} else if (!Array.isArray(ids)) {
		return axios
			.get(_base + `/artists?ids=${ids}`, {
				headers: {
					Authorization: 'Bearer ' + token,
				},
			})
			.catch((err) => console.log(err));
	}
};

/**
 *
 * @param token The valid access token.
 * @param id The id of the artist.
 * @returns Info about the artist.
 * @link https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-an-artist
 */
export const getArtist = (
	token: string,
	id: string
): Promise<void | AxiosResponse<any>> => {
	return axios
		.get(_base + `/artist/${id}`, {
			headers: {
				Authorization: 'Bearer ' + token,
			},
		})
		.catch((err) => console.log(err));
};

/**
 *
 * @param token The valid access token.
 * @param id The id of the artist.
 * @param market A valid ISO 3166 alpha code.
 * @returns Top tracks of the artist.
 * @link https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
 * @link https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-an-artists-related-artists
 */

export const getArtistTopTracks = (
	token: string,
	id: string,
	market: string
): Promise<void | AxiosResponse<any>> => {
	return axios
		.get(_base + `/artist/${id}/top-tracks?market=${market}`, {
			headers: {
				Authorization: 'Bearer ' + token,
			},
		})
		.catch((err) => console.log(err));
};

/**
 *
 * @param token The valid access token.
 * @param id The id of the artist.
 * @returns Related artists to the artist.
 * @link https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-an-artists-related-artists
 */

export const getArtistRelatedArtists = (
	token: string,
	id: string
): Promise<void | AxiosResponse<any>> => {
	return axios
		.get(_base + `/artist/${id}/related-artists`, {
			headers: {
				Authorization: 'Bearer ' + token,
			},
		})
		.catch((err) => {
			console.log(err);
		});
};

//left off at relatedartists
