import axios, { AxiosResponse } from 'axios';
import { BASE } from './@types/constants';
import { markets } from './@types/market';

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
	if (Array.isArray(ids)) {
		return axios.get(
			BASE.url +
				`/albums?ids=${ids.join('%2C')}?market=${market ? market : 'US'}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
	} else if (!Array.isArray(ids)) {
		return axios.get(BASE.url + `/albums?ids=${ids}`, {
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
	if (typeof id !== 'string') {
		throw new Error('Id must be string.');
	} else if (typeof id === 'string') {
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

getMultipleAlbums('asd', 'asd');
