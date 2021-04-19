"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAlbum = exports.getMultipleAlbums = void 0;
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("./@types/constants");
const getMultipleAlbums = (token, ids, market) => {
    if (Array.isArray(ids)) {
        return axios_1.default.get(constants_1.BASE.url +
            `/albums?ids=${ids.join('%2C')}?market=${market ? market : 'US'}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }
    else if (!Array.isArray(ids)) {
        return axios_1.default.get(constants_1.BASE.url + `/albums?ids=${ids}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }
    if (!Array.isArray(ids) && typeof ids !== 'string') {
        throw new Error('Make sure that the id is of type string or an array of strings.');
    }
    if (Array.isArray(ids)) {
        for (let i = 0; i < ids.length; i++) {
            const element = ids[i];
            if (typeof element !== 'string') {
                throw new Error('Please make sure that all ids in the array are strings.');
            }
        }
    }
};
exports.getMultipleAlbums = getMultipleAlbums;
const getAlbum = (token, id, market) => {
    if (typeof id !== 'string') {
        throw new Error('Id must be string.');
    }
    else if (typeof id === 'string') {
        return axios_1.default.get(constants_1.BASE.url + `/albums/${id}?market=${market ? market : 'US'}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }
};
exports.getAlbum = getAlbum;
exports.getMultipleAlbums('asd', 'asd');
