"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getToken = async (CLIENT_ID, CLIENT_SECRET, REDIRECT_URI) => {
    const baseUrl = "https://accounts.spotify.com/api/token";
    const getData = await fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: "Basic " + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`),
        },
        body: "grant_type=client_credentials",
    });
    return getData;
};
exports.default = getToken;
