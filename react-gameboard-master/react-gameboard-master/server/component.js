"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const move_server_1 = require("./move_server");
/**
 * Returns the last element of an array.
 */
function back(array) {
    return array[array.length - 1];
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
function CreateGameComponent(game) {
    return class extends react_1.Component {
        constructor(props) {
            super(props);
            this.state = {
                game,
                ready: true,
                states: [game.default(props)],
                moves: [],
                error: null
            };
        }
        async nextMove(fn, action, params) {
            await this.setStateAsync({ ready: false });
            try {
                const next = await fn(back(this.state.states), params);
                this.setState({
                    states: [...this.state.states, next],
                    moves: [...this.state.moves, { action, params }],
                    error: null,
                    ready: true
                });
            }
            catch (e) {
                this.setState({ error: e, ready: true });
            }
        }
        setStateAsync(s) {
            return new Promise(resolve => this.setState(s, resolve));
        }
        /**
         * Returns a list of action props
         */
        actions() {
            const res = {
                fetch: (action, params) => this.nextMove((s, p) => move_server_1.fetchMove(action, s, p), action, params),
                // Undo move
                undo: async () => {
                    await this.setStateAsync({ ready: false });
                    if (this.state.states.length === 0) {
                        this.setState({
                            error: new Error("No moves to undo yet"),
                            ready: true
                        });
                    }
                    else {
                        this.setState({
                            error: null,
                            states: this.state.states.slice(0, this.state.states.length - 1),
                            moves: this.state.moves.slice(0, this.state.moves.length - 1),
                            ready: true
                        });
                    }
                }
            };
            for (const x in game.actions) {
                res[x] = (params) => this.nextMove(game.actions[x], x, params);
            }
            return res;
        }
        render() {
            const children = react_1.default.Children.map(this.props.children, child => typeof child === "string" || typeof child === "number"
                ? child
                : react_1.default.cloneElement(child, Object.assign({ state: back(this.state.states) }, this.actions(), { ready: this.state.ready, error: this.state.error, isEnding: game.isEnding(back(this.state.states)) })));
            return react_1.default.createElement("div", null, children);
        }
    };
}
exports.default = CreateGameComponent;
//# sourceMappingURL=component.js.map