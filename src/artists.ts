import axios, { AxiosResponse } from 'axios';
import { BASE } from './typedefs/constants';
import { markets } from './typedefs/market';

export const getMultipleArtists = (
	token: string,
	ids: string | string[]
): Promise<void | AxiosResponse<any>> => {
	if (Array.isArray(ids)) {
		if (ids.length > 50 || ids.length < 1) {
			throw new Error('Please make sure that the array has a max of 50 ids.');
		}
	}
	if (Array.isArray(ids)) {
		return axios.get(BASE.url + `/artists?ids=${ids.join('%2C')}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	} else if (!Array.isArray(ids)) {
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
