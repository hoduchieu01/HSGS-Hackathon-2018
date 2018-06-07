import Game, { Move } from "./game";
/**
 * Verifies a game's move sequence.
 */
export default function verify<T, P>(game: Game<T, P>, endingState: T, moves: Move[], props: P): Promise<boolean>;
