import axios, { AxiosResponse } from 'axios';
import { BASE } from './typedefs/constants';
import { markets } from './typedefs/market';
import { includeGroups } from './typedefs/glob';

/**
 *
 * @param {String} token The valid token to request data for.
 * @param {String} country The valid ISO-3161 Alpha 1-2 code (OPTIONAL).
 * @param {Number} limit The limit of new releases to get (OPTIONAL).
 * @param {Number} offset The offset of the new releases (OPTIONAL).
 * @returns Promise<void | AxiosResponse<any>>
 */

export const browseNewReleases = (
	token: string,
	country?: markets,
	limit?: number,
	offset?: number
): Promise<void | AxiosResponse<any>> => {
	if (token) {
		return axios.get(
			BASE.url +
				`/browse/new-releases?country=${country ? country : 'US'}&limit=${
					limit ? limit : 20
				}&offset=${offset ? offset : 0}`
		);
	}
	if (country && typeof country !== 'string') {
		throw new Error(
			'Please make sure that the country is a valid ISO-3161 Alpha 1-2 Code.'
		);
	}
	if (limit && typeof limit !== 'number') {
		throw new Error('Limit must be of type number.');
	}
	if ((limit && limit < 0) || limit > 50) {
		throw new Error('Limit can only be max 50, and minimumu of 1.');
	}
	if (offset && typeof offset !== 'number') {
		throw new Error('Offset must be of type number.');
	}
};

export const browseFeaturedPlaylists = (
	token: string,
	country?: markets,
	locale?: string,
	timestamp?: string,
	limit?: number,
	offset?: number
): Promise<void | AxiosResponse<any>> => {
	if (country && typeof country !== 'string') {
		throw new Error(
			'Please make sure that the country is a valid ISO-3161 Alpha 1-2 Code.'
		);
	}
	if (limit && typeof limit !== 'number') {
		throw new Error('Limit must be of type number.');
	}
	if ((limit && limit < 0) || limit > 50) {
		throw new Error('Limit can only be max 50, and minimumu of 1.');
	}
	if (offset && typeof offset !== 'number') {
		throw new Error('Offset must be of type number.');
	}
	if (locale && typeof locale !== 'string') {
		throw new Error(
			'Please make sure that the specified locale is correct, and it is of type string.'
		);
	}
	if (timestamp && typeof timestamp !== 'string') {
		throw new Error(
			'Please make sure that the passed timestamp is of type string, and in the correct format: yyyy-MM-ddTHH:mm:ss'
		);
	}
	if (token) {
		return axios.get(
			BASE.url +
				`/browse/featured-playlists?country=${country ? country : 'US'}&limit=${
					limit ? limit : 20
				}&offset=${offset ? offset : 0}&locale=${
					locale ? locale : 'en_US'
				}&timestamp=${timestamp ? timestamp : new Date().toISOString()}`
		);
	}
};
