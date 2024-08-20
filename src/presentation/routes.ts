import { Router } from "express";
import { Authroutes } from "./auth/routes";
import { TodoRoutes } from "./todos/routes";

export class AppRoutes {
    static get routes(): Router {
        const router = Router();
        router.use('/api/auth', Authroutes.routes);
        router.use('/api/todos', TodoRoutes.routes);
        return router;
    }
}