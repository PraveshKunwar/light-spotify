"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const setToken = async (CLIENT_ID, CLIENT_SECRET, REDIRECT_URI) => {
    const baseUrl = "https://accounts.spotify.com/api/token";
    const getData = await fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: "Basic " + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`),
        },
        body: "grant_type=authorization_code",
    }).then(async (res) => {
        const data = await res.json();
        console.log(data);
    });
    return getData;
};
exports.default = setToken;
