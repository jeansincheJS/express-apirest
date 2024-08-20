import { Router } from "express";
import { AuthService } from "../services/auth.service";
import { AuthConstroller } from "./controller";

export class Authroutes {
    static get routes(): Router {
        const router = Router();
        const authService = new AuthService;
        const controller = new AuthConstroller(authService);

        router.post('/register', controller.registerUser);
        return router;
    }
}