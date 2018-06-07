/**
 * Game defines a State representor.
 * T (the template) is the game's state object.
 *
 * This should be the first thing an user of this library should implement.
 */
export default interface Game<T, P = {}> {
    default: (props?: P) => T;
    actions: {
        [x: string]: (currentState: T, params: any) => Promise<T>;
    };
    isValid(state: any): state is T;
    isEnding(state: T): "won" | "lost" | null;
}
export interface Move {
    action: string;
    params: any;
}
