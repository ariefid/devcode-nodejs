import { Router } from 'hyper-express';
import { HomeMiddleware } from './middlewares';

export class HomeRouter {
    private homeRouter: Router;
    private homeMiddleware: HomeMiddleware;

    constructor() {
        this.homeRouter = new Router();
        this.homeMiddleware = new HomeMiddleware();
    }

    get routes() {
        this.homeRouter.get('/', this.homeMiddleware.getHome);
        return this.homeRouter;
    }
}
