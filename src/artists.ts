import axios, { AxiosResponse } from 'axios';
import { BASE } from './typedefs/constants';
import { markets } from './typedefs/market';
import { includeGroups } from './typedefs/glob';

/**
 *
 * @param {String} token The valid auth token to request data for.
 * @param {String | String[]} ids The id or ids of the artists you want to get data for.
 * @returns Promise<void | AxiosResponse<any>>
 */

export const getMultipleArtists = (
	token: string,
	ids: string | string[]
): Promise<void | AxiosResponse<any>> => {
	if (!ids) {
		throw new Error('Please make sure that an id is provided.');
	}
	if (!token) {
		throw new Error('Please make sure that a token is provided.');
	}
	if (typeof token !== 'string') {
		throw new Error('Token must of type string.');
	}
	if (Array.isArray(ids)) {
		if (ids.length > 50 || ids.length < 1) {
			throw new Error('Please make sure that the array has a max of 50 ids.');
		}
	}
	if (Array.isArray(ids) && token) {
		return axios.get(BASE.url + `/artists?ids=${ids.join('%2C')}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	} else if (!Array.isArray(ids) && token) {
		return axios.get(BASE.url + `/artists?ids=${ids}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
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
	}
};

/**
 *
 * @param {String} token The valid auth token to request data for.
 * @param {String} id The id of the artist you want to get data for.
 * @returns Promise<void | AxiosResponse<any>>
 */

export const getArtist = (
	token: string,
	id: string
): Promise<void | AxiosResponse<any>> => {
	if (!id) {
		throw new Error('Please make sure that an id is provided.');
	}
	if (typeof id !== 'string') {
		throw new Error('Id must be of type string.');
	}
	if (!token) {
		throw new Error('Please make sure that a token is provided.');
	}
	if (typeof token !== 'string') {
		throw new Error('Token must of type string.');
	} else if (token && id) {
		return axios.get(BASE.url + `/artists/${id}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	}
};

/**
 *
 * @param {String} token The valid auth token to request data for.
 * @param {String} id The id of the artist you want to get top tracks for.
 * @param {String} market The market for the artists top tracks.
 */

export const getArtistTopTracks = (
	token: string,
	id: string,
	market?: markets
): Promise<void | AxiosResponse<any>> => {
	if (!token) {
		throw new Error('Please make sure that a token is provided.');
	}
	if (typeof token !== 'string') {
		throw new Error('Token must be of type string.');
	}
	if (typeof id !== 'string') {
		throw new Error('Id must be of type string');
	}
	if (!id) {
		throw new Error('Please make sure that an id is provided.');
	}
	if (market && typeof market !== 'string') {
		throw new Error(
			'Market must be a string and a valid ISO 3166 Alpha 1-2 Code.'
		);
	} else if (token && id) {
		return axios.get(BASE.url + `/artists/${id}/top-tracks`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	}
};

/**
 *
 * @param {String} token The valid auth token to request data for.
 * @param {String} id The id of the artist you want to get related artists for.
 * @returns Promise<void | AxiosResponse<any>>
 */

export const getArtistRelatedArtists = (
	token: string,
	id: string
): Promise<void | AxiosResponse<any>> => {
	if (!id) {
		throw new Error('Please make sure that an id is provided.');
	}
	if (!token) {
		throw new Error('Please make sure that a token is provided.');
	}
	if (typeof token !== 'string') {
		throw new Error('Token must be of type string.');
	}
	if (typeof id !== 'string') {
		throw new Error('Id must be of type string.');
	} else if (token && id) {
		return axios.get(BASE.url + `/artists/${id}/related-artists`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	}
};

export const getArtistAlbums = (
	token: string,
	id: string,
	includeGroups?: includeGroups[] | includeGroups,
	market?: markets,
	limit?: number,
	offset?: number
) => {
	if (typeof token !== 'string') {
		throw new Error('Token must be of type string.');
	}
	if (!token) {
		throw new Error('Please make sure that a token is provided.');
	}
	if (typeof id !== 'string') {
		throw new Error('Id must be of type string.');
	}
	if (!id) {
		throw new Error('Please make sure that an id is provided.');
	}
	/**if(Array.isArray(includeGroups)){
		if(!includeGroups.includes)
	}**/
};
