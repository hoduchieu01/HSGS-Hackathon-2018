import Game, { Move } from "./game";

/**
 * Verifies a game's move sequence.
 */
export default async function verify<T, P>(
  game: Game<T, P>,
  endingState: T,
  moves: Move[],
  props: P
): Promise<boolean> {
  if (!game.isValid(endingState) || game.isEnding(endingState) !== "won") {
    return false;
  }

  const calculatedState = await moves.reduce<Promise<T>>(
    async (pPrev, move) => {
      const prev = await pPrev;

      if (!(move.action in game.actions))
        throw new Error("Move not found: " + move.action);

      return game.actions[move.action](prev, move.params);
    },
    Promise.resolve(game.default(props))
  );

  if (calculatedState instanceof Error) return false;

  return JSON.stringify(endingState) === JSON.stringify(calculatedState);
}
