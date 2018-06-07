// Sometimes, a Move must be calculated on the server side.
// It is then implemented with the following signature.
import axios from "axios";
let siteURL = "/";
/**
 * Sets the fetcher's URL.
 */
export function SetURL(url) {
    siteURL = url;
}
/**
 * Create a fetch move for the game.
 */
export async function fetchMove(moveName, state, params) {
    const resp = await axios.post(siteURL + moveName, { state, params });
    if (resp.status !== 200) {
        throw new Error(resp.data);
    }
    return resp.data;
}
//# sourceMappingURL=move_server.js.map