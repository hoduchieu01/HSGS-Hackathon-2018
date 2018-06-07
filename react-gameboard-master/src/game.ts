// We're going to create a Redux-like state management system.
// Here we represent the state, S, as an object.

/**
 * Game defines a State representor.
 * T (the template) is the game's state object.
 *
 * This should be the first thing an user of this library should implement.
 */
export default interface Game<T, P = {}> {
  // Returns the default action.
  default: (props?: P) => T;
  actions: {
    // A list of possible actions for the Game.
    // Note that these only qualifies as "static" moves (aka client-side).
    // Server-side moves must be registered independently.
    [x: string]: (currentState: T, params: any) => Promise<T>;
  };
  // Verifies whether a state is valid.
  isValid(state: any): state is T;
  // Checks whether a state is the ending of the game, and whether the player has won ("won"), lost ("lost"),
  // or the game still continues (null).
  isEnding(state: T): "won" | "lost" | null;
}

export interface Move {
  action: string;
  params: any;
}
