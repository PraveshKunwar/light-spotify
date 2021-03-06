import axios, { AxiosResponse } from 'axios';
import { BASE } from './typedefs/constants';
import { markets } from './typedefs/market';

/**
 *
 * @param {String} token The auth token to request data.
 * @param {String | String[]} ids Id or ids of albums.
 * @param {String} market The market for the album. (OPTIONAL)
 * @returns Promise<void | AxiosResponse<any>>
 */

export const getMultipleAlbums = (
	token: string,
	ids: string | string[],
	market?: markets
): Promise<void | AxiosResponse<any>> => {
	if (!ids) {
		throw new Error('Please make sure that an id is provided.');
	}
	if (!token) {
		throw new Error('Please make sure that a token is provided.');
	}
	if (typeof token !== 'string') {
		throw new Error('Token must be of type string.');
	}
	if (market && typeof market !== 'string') {
		throw new Error(
			'Market must be a string and a valid ISO 3166 Alpha 1-2 Code.'
		);
	}
	if (Array.isArray(ids)) {
		if (ids.length > 20 || ids.length < 1) {
			throw new Error('Please make sure that the array has a max of 20 ids.');
		}
	}
	if (!Array.isArray(ids) && typeof ids !== 'string') {
		throw new Error(
			'Make sure that the id is of type string or an array of strings.'
		);
	}
	if (Array.isArray(ids)) {
		for (let i = 0; i < ids.length; i++) {
			const element = ids[i];
			if (typeof element !== 'string') {
				throw new Error(
					'Please make sure that all ids in the array are strings.'
				);
			}
		}
	} else if (ids && token && ids) {
		return axios.get(
			BASE.url +
				`/albums?ids=${Array.isArray(ids) ? ids.join('%2C') : ids}&market=${
					market ? market : 'US'
				}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
	}
};

/**
 *
 * @param {String} token The auth token to request data.
 * @param {String} id  The id of the specific album you want to get data for.
 *  @param {String} market The market for the album. (OPTIONAL)
 * @returns Promsie<void | AxiosResponse<any>>
 */

export const getAlbum = (
	token: string,
	id: string,
	market?: markets
): Promise<void | AxiosResponse<any>> => {
	if (typeof token !== 'string') {
		throw new Error('Type token must be a string.');
	}
	if (!token) {
		throw new Error('Please make sure that a token is provided.');
	}
	if (!id) {
		throw new Error('ID must be specified.');
	}
	if (typeof id !== 'string') {
		throw new Error('Id must be string.');
	} else if (id && token) {
		return axios.get(
			BASE.url + `/albums/${id}?market=${market ? market : 'US'}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
	}
};

/**
 *
 * @param {String} token The auth token to request data.
 * @param {String} id The id of the album you want to get tracks for.
 * @param {String} market The market for the album. (OPTIONAL)
 * @param {Number} limit The limit of tracks (OPTIONAL | MIN: 1 | DEFAULT: 20 | MAX: 50)
 * @param {Number} offset The index of the first track you want to return. (OPTIONAL)
 * @returns Promise<void | AxiosResponse<any>>
 */

export const getAlbumTracks = (
	token: string,
	id: string,
	market?: markets,
	limit?: number,
	offset?: number
): Promise<void | AxiosResponse<any>> => {
	if (!token) {
		throw new Error('Please make sure that a token is provided.');
	}
	if (!id) {
		throw new Error('Please make sure that an id is provided.');
	}
	if (typeof token !== 'string') {
		throw new Error('Token must of type string.');
	}
	if (market && typeof market !== 'string') {
		throw new Error(
			'Market must be a string and a valid ISO 3166 Alpha 1-2 Code.'
		);
	}
	if ((limit && limit > 50) || limit < 1) {
		throw new Error('Limit must be less than 50 and greater than 1.');
	}
	if (limit && typeof limit !== 'number') {
		throw new Error('Limit must be of type number.');
	}
	if (offset && typeof offset !== 'number') {
		throw new Error('Offset must be of type number.');
	}
	if (typeof id !== 'string') {
		throw new Error('Id must be string.');
	} else if (typeof id === 'string' && token && id) {
		return axios.get(
			BASE.url +
				`/albums/${id}/tracks?market=${market ? market : 'US'}&limit=${
					limit ? limit : 1
				}&offset=${offset ? offset : 1}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
	}
};
