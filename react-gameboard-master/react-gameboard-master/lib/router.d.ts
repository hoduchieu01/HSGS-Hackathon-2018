/// <reference types="express" />
import { Router as IRouter, Response, NextFunction } from "express-serve-static-core";
import Game from "./game";
import { Request } from "express";
import RemoteMove from "./move_server";
/**
 * Use this class's router to handle game routes.
 */
export default class GameRouter<T, P> {
    readonly router: IRouter;
    private game;
    constructor(game: Game<T, P>);
    private createMoveMiddleware(fn);
    private verifyMoves(moves);
    verify(req: Request, res: Response, next: NextFunction): Response;
    registerRemote(fn: RemoteMove<T>): this;
}
