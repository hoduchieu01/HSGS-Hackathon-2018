/// <reference types="react" />
import { ComponentClass } from "react";
import Game, { Move } from "./game";
export interface ComponentState<T> {
    game: Game<T>;
    ready: boolean;
    states: T[];
    moves: Move[];
    error: Error | null;
}
/**
 * Returns a React Component responsible for state management of the game.
 *
 * Every child of the component will receive:
 * - a copy of the game's current state (`state` prop)
 * - every possible actions of the game, along with an `undo` action.
 * - An `error` prop with type `Error` if an error is present, or `null` otherwise.
 * - An `isEnding` prop that states "won", "lost" or `null` (game is still on).
 */
declare function CreateGameComponent<T, P = {}>(game: Game<T, P>): ComponentClass<P>;
export default CreateGameComponent;
