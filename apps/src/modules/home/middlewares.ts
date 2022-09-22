import { Request, Response } from 'hyper-express';
import { GetResponse } from '../../responses';

export class HomeMiddleware {
    constructor() {
        //
    }

    async getHome(request: Request, response: Response) {
        const cached = {
            hello: 'world',
        };
        return GetResponse(response, cached);
    }
}
