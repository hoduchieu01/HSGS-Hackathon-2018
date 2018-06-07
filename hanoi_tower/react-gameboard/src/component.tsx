import React, { Component, ComponentClass } from "react";
import Game, { Move } from "./game";
import { fetchMove } from "./move_server";

export interface ComponentState<T> {
  game: Game<T>;
  ready: boolean;
  states: T[];
  moves: Move[];
  error: Error | null;
}

/**
 * Returns the last element of an array.
 */
function back<T>(array: T[]): T {
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
function CreateGameComponent<T, P = {}>(game: Game<T, P>): ComponentClass<P> {
  return class extends Component<P, ComponentState<T>> {
    constructor(props: P) {
      super(props);
      this.state = {
        game,
        ready: true,
        states: [game.default(props)],
        moves: [],
        error: null
      };
    }
    private async nextMove(
      fn: (state: T, params: any) => Promise<T>,
      action: string,
      params: any
    ) {
      await this.setStateAsync({ ready: false });
      try {
        const next = await fn(back(this.state.states), params);
        this.setState({
          states: [...this.state.states, next],
          moves: [...this.state.moves, { action, params }],
          error: null,
          ready: true
        });
      } catch (e) {
        this.setState({ error: e, ready: true });
      }
    }
    private setStateAsync(s: any) {
      return new Promise(resolve => this.setState(s, resolve));
    }
    /**
     * Returns a list of action props
     */
    private actions(): {
      fetch: (action: string, params: any) => void;
      [x: string]: ((...params: any[]) => void);
    } {
      const res = {
        fetch: (action: string, params: any) =>
          this.nextMove((s, p) => fetchMove(action, s, p), action, params),
        // Undo move
        undo: async () => {
          await this.setStateAsync({ ready: false });
          if (this.state.states.length === 0) {
            this.setState({
              error: new Error("No moves to undo yet"),
              ready: true
            });
          } else {
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
        res[x] = (params: any) => this.nextMove(game.actions[x], x, params);
      }
      return res;
    }
    render() {
      const children = React.Children.map(
        this.props.children,
        child =>
          typeof child === "string" || typeof child === "number"
            ? child
            : React.cloneElement(child, {
                state: back(this.state.states),
                ...this.actions(),
                ready: this.state.ready,
                error: this.state.error,
                isEnding: game.isEnding(back(this.state.states))
              })
      );
      return <div>{children}</div>;
    }
  };
}

export default CreateGameComponent;
