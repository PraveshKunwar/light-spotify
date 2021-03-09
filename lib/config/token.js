"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const Buffer = require('buffer').Buffer;
const createToken = async (CLIENT_ID, CLIENT_SECRET, REDIRECT_URI) => {
    const baseUrl = 'https://accounts.spotify.com/api/token';
    const getData = await node_fetch_1.default(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: 'Basic ' +
                new Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64'),
        },
        body: 'grant_type=client_credentials',
    });
    return getData;
};
exports.default = createToken;
