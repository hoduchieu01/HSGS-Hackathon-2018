export default interface RemoteMove<T> {
    name: string;
    handle(state: T, params: any): Promise<T>;
}
export interface ReqState<T> {
    state: T;
    params: any;
}
/**
 * Sets the fetcher's URL.
 */
export declare function SetURL(url: string): void;
/**
 * Create a fetch move for the game.
 */
export declare function fetchMove<T>(moveName: string, state: T, params: any): Promise<T>;
