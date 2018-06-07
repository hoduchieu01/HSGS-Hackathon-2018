/**
 * Verifies a game's move sequence.
 */
export default async function verify(game, endingState, moves, props) {
    if (!game.isValid(endingState) || game.isEnding(endingState) !== "won") {
        return false;
    }
    const calculatedState = await moves.reduce(async (pPrev, move) => {
        const prev = await pPrev;
        if (!(move.action in game.actions))
            throw new Error("Move not found: " + move.action);
        return game.actions[move.action](prev, move.params);
    }, Promise.resolve(game.default(props)));
    if (calculatedState instanceof Error)
        return false;
    return JSON.stringify(endingState) === JSON.stringify(calculatedState);
}
//# sourceMappingURL=verify.js.map