import axios, { AxiosResponse } from 'axios';
import { stringify } from 'querystring';
/**
 *
 * @param token The valid access token.
 * @param ids The id or ids of the albums. NOTE: MULTIPLE IDS SHOULD BE IN CORRECT FORMAT.
 * @returns Info of multiple albums with the valid ids requested.
 * @link https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-multiple-albums
 */

const _base = 'https://api.spotify.com/v1';
export const getMultipleAlbums = (
	token: string,
	ids: string | Array<string>
): Promise<void | AxiosResponse<any>> => {
	if (Array.isArray(ids)) {
		return axios
			.get(_base + `/albums?ids=${ids.join('%2C')}`, {
				headers: {
					Authorization: 'Bearer ' + token,
				},
			})
			.catch((err) => console.log(err));
	} else if (!Array.isArray(ids)) {
		return axios
			.get(_base + `/albums?ids=${ids}`, {
				headers: {
					Authorization: 'Bearer ' + token,
				},
			})
			.catch((err) => console.log(err));
	}
};

/**
 *
 * @param token
 * @param id
 * @returns The albums info.
 * @link https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-an-album
 */
export const getAlbum = (
	token: string,
	id: string
): Promise<void | AxiosResponse<any>> => {
	return axios
		.get(_base + `/albums/${id}`, {
			headers: {
				Authorization: 'Bearer ' + token,
			},
		})
		.catch((err) => console.log(err));
};

/**
 *
 * @param token
 * @param id
 * @returns The albums info.
 * @link https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-an-album
 */
export const getAlbumTracks = (
	token: string,
	id: string
): Promise<void | AxiosResponse<any>> => {
	return axios
		.get(_base + `/albums/${id}/tracks`, {
			headers: {
				Authorization: 'Bearer ' + token,
			},
		})
		.catch((err) => console.log(err));
};
