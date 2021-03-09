"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAlbumTracks = exports.getAlbum = exports.getMultipleAlbums = void 0;
const axios_1 = __importDefault(require("axios"));
const _base = 'https://api.spotify.com/v1';
const getMultipleAlbums = (token, ids) => {
    if (Array.isArray(ids)) {
        return axios_1.default
            .get(_base + `/albums?ids=${ids.join('%2C')}`, {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        })
            .catch((err) => console.log(err));
    }
    else if (!Array.isArray(ids)) {
        return axios_1.default
            .get(_base + `/albums?ids=${ids}`, {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        })
            .catch((err) => console.log(err));
    }
};
exports.getMultipleAlbums = getMultipleAlbums;
const getAlbum = (token, id) => {
    return axios_1.default
        .get(_base + `/albums/${id}`, {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    })
        .catch((err) => console.log(err));
};
exports.getAlbum = getAlbum;
const getAlbumTracks = (token, id) => {
    return axios_1.default
        .get(_base + `/albums/${id}/tracks`, {
        headers: {
            Authorization: 'Bearer ' + token,
        },
    })
        .catch((err) => console.log(err));
};
exports.getAlbumTracks = getAlbumTracks;
