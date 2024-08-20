import express, { Router } from 'express';
interface Options {
    port: number;
    routes: Router;
}
export class Server {
    public readonly app = express();
    private readonly port: number;
    private readonly routes: Router;
    private serverListener?: any;
    constructor(options: Options) {
        const { port, routes } = options;
        this.port = port;
        this.routes = routes;
    }
    async start() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(this.routes);
        this.serverListener = this.app.listen(this.port, () => {
            console.log(`Server started on port ${this.port}`);
        });
    }
    public close() {
        this.serverListener?.close();
    }

}

