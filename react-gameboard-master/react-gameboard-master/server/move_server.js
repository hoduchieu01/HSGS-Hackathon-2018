"use strict";
// Sometimes, a Move must be calculated on the server side.
// It is then implemented with the following signature.
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
let siteURL = "/";
/**
 * Sets the fetcher's URL.
 */
function SetURL(url) {
    siteURL = url;
}
exports.SetURL = SetURL;
/**
 * Create a fetch move for the game.
 */
async function fetchMove(moveName, state, params) {
    const resp = await axios_1.default.post(siteURL + moveName, { state, params });
    if (resp.status !== 200) {
        throw new Error(resp.data);
    }
    return resp.data;
}
exports.fetchMove = fetchMove;
//# sourceMappingURL=move_server.js.map