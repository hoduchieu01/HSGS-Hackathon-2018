// Sometimes, a Move must be calculated on the server side.
// It is then implemented with the following signature.

import axios from "axios";

export default interface RemoteMove<T> {
  name: string;
  handle(state: T, params: any): Promise<T>;
}

export interface ReqState<T> {
  state: T;
  params: any;
}

let siteURL: string = "/";
/**
 * Sets the fetcher's URL.
 */
export function SetURL(url: string) {
  siteURL = url;
}

/**
 * Create a fetch move for the game.
 */
export async function fetchMove<T>(
  moveName: string,
  state: T,
  params: any
): Promise<T> {
  const resp = await axios.post(siteURL + moveName, { state, params });
  if (resp.status !== 200) {
    throw new Error(resp.data);
  }
  return resp.data;
}
