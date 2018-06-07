import {
  Router as IRouter,
  RequestHandler,
  Response,
  NextFunction
} from "express-serve-static-core";
import Game, { Move } from "./game";
import { Router, Request } from "express";
import RemoteMove, { ReqState } from "./move_server";
import verify from "./verify";

/**
 * Use this class's router to handle game routes.
 */
export default class GameRouter<T, P> {
  public readonly router: IRouter;
  private game: Game<T, P>;
  constructor(game: Game<T, P>) {
    this.game = game;
    this.router = Router();

    // Register all public moves
    for (const move in game.actions) {
      this.router.post(
        "/moves/" + move,
        this.createMoveMiddleware(game.actions[move])
      );
    }

    // Register a game creator
    this.router.get("/", (req, res) => res.send(this.game.default(req.body)));

    // Register a game verifier
    this.router.get("/verify", this.verify.bind(this));
  }

  private createMoveMiddleware(
    fn: (state: T, params: any) => Promise<T>
  ): RequestHandler {
    return async (req, res) => {
      const state = req.body as ReqState<T>;
      if (!this.game.isValid(state.state))
        return res.status(403).send("State is invalid");
      try {
        const next = await fn(state.state, state.params);
        return res.send(next);
      } catch (e) {
        return res.status(403).send(e.message);
      }
    };
  }

  private verifyMoves(moves: any): moves is Move[] {
    if (!(moves instanceof Array)) return false;
    return moves.every(v => v.action in this.game.actions);
  }

  verify(req: Request, res: Response, next: NextFunction) {
    const endingState = req.body.endingState;
    if (!this.game.isValid(endingState)) {
      return res.status(403).send("State is invalid");
    }
    const moves = req.body.moves;
    if (!this.verifyMoves(moves)) {
      return res.status(403).send("Invalid moves");
    }
    if (!verify(this.game, endingState, moves, req.body.props)) {
      return res.status(403).send("Invalid final state");
    }
    return res.sendStatus(200);
  }

  registerRemote(fn: RemoteMove<T>): this {
    // Enrich the game struct
    this.game.actions[fn.name] = fn.handle;
    //
    this.router.post("/moves/" + fn.name, this.createMoveMiddleware(fn.handle));
    return this;
  }
}
