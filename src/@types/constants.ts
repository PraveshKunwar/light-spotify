export enum BASE {
	url = 'https://api.spotify.com/v1',
}

export interface Person<T> {
	name: string;
	age: number;
	ext?: T;
}

export interface ext {
	sport?: string | string[];
	subject?: string | string[];
}

const List = new Map<string, Person<ext>>();
