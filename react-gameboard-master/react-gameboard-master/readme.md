# react-gameboard

- [react-gameboard](#react-gameboard)
	- [Install](#install)
	- [Implementation](#implementation)
		- [The `Game` interface](#the-game-interface)
		- [The React wrapper](#the-react-wrapper)
		- [Server-side Move Handling](#server-side-move-handling)
			- [As an Express Router](#as-an-express-router)

## Install

```bash
yarn add https://gitlab.com/deltarena/react-gameboard
```

## Implementation

You can find an example of everything in the `example` folder of `hsgs-hackathon-18`.

### The `Game` interface

First, an object conforming the `Game` interface must be implemented.

It **must** have the following properties:

```typescript
interface {
	// Returns the state of the beginning of a game.
	// Props can be given, stating the property of the
	// created game (e.g. board size).
	default: (props) => T;
	// Returns whether the given object (can really be an object of anything) is a valid game state.
	isValid: (board: any) => boolean;
	// Receives a *valid* game state, returns whether
	// the game is won, lost or not ended (`null`).
	isEnding: (board: T) => "won" | "lost" | null;
	// The list of possible moves for the game.
	// It must be calculatable from every valid state.
	actions: {
		// Performs an action and resolves with the new state if the action is valid, or reject with an error stating the action is invalid.
		"action-name": (board: T, params: any) => Promise<T>;
	}
}
```

### The React wrapper

The `ReactGame` function takes a `Game` object and returns a `React.ComponentClass` that can be used whenever a state manager for a gameboard is needed.

```jsx
const GameObj = {}; //... implements the Game interface
GameObj.default = ({ cellSize }) => {
  // An array of length `cellSize` containing all zeroes.
  return new Array(cellSize).map(() => 0);
};
const GameComponent = ReactGame(GameObj);

// The game's state is passed in.
function RenderGame({ state }) {
  return (
    <div>
      <span>Cell 1: {state[0]}</span>
      <span>Cell 2: {state[1]}</span>
    </div>
  );
}

// Render the whole gameboard.
function Game() {
  return (
    <GameComponent cellSize={2}>
      <RenderGame />
    </GameComponent>
  );
}
```

Anything passable to `props` in `Game.default` can be passed as props into `GameComponent`.

The following props are passed to all children of `GameComponent`:

```typescript
interface {
	state: T; // The current state of the game.
	ready: boolean; // Whether the client is ready for the next move.
	error: Error | null; // An error is passed if there's an error returned from the move handler.
	isEnding: "won" | "lost" | null; // The output of Game.isEnding

	// Possible moves
	undo: () => void; // Undo the last move
	remote: (moveName: string, params: any) => void; // Perform a remote move, more later.
	"move_name": (params: any) => void; // This is implemented for every possible move declared in `Game.actions`
}
```

### Server-side Move Handling

**CAUTION!** On Node.js (and preferrably anywhere without React/webpack) please import/require `react-gameboard/server`
instead of `react-gameboard`.

Sometimes, it is not possible to implement a move with the user's access to it. We provide `RemoteMove` as a mechanism for server-side moves handling.

To implement a move handler, create an object with the following properties:

```typescript
interface {
	// The name of the move. It should contain only lowercase letters, digits and "_"
	name: string;
	// The move handler. Any props passed should be JSON-compatible.
	handle: (state: T, props: any) => Promise<T>;
}
```

#### As an Express Router

We provide `GameRouter` as a wrapper for the Express Router. It abstracts away the data-handling process so you can focus on implementing move handlers.

To use a server-side move handler, just `register` it.

```js
const GameObj = ; // Implements the Game interface.
const gameRouter = new GameRouter(GameObj);

const remoteMove = {
	name: "remote_move",
	handle: async (state, { amount }) => {
		return [state[0] + amount, ...state.slice(1)];
	}
}
gameRouter.register(remoteMove);

const app = new Express();
app.use(gameRouter.router);
```

The following paths are exposed on a `GameRouter` router (all POST):

- `/` returns a starting state. Props can be passed.
- `/moves/[move-name]` receives `{state: T, params: any}` and returns the next state as JSON (with status 200) or an Error as string (with status 403).
- `/verify` takes a state and returns status 200 if the state is valid.
