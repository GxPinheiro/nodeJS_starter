import {Request, Response, Router, NextFunction} from 'express';
import {UserService} from './user.service';

import {
    HTTPBadRequestError,
    HTTPNoResultsError,
    getExceptionByStatusCodeUpstream,
} from '../../infrastructure/error';
import {ResponseBase} from '../../infrastructure/response';

import {check, validationResult} from 'express-validator';

export class CarteiraResource {
    public async getResponseUser(
        request: Request,
        response: ResponseBase,
    ) {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            throw new HTTPBadRequestError(undefined, errors);
        }

        const userService = new UserService();
        const payloadUser = await userService
            .BuscarUser("nome")
            .catch((reason) => {
                throw getExceptionByStatusCodeUpstream(
                    reason.status,
                    reason.body,
                );
            });

        response.ok(payloadUser);
    }
}

export const UserRouters = (router: Router) => {
    /**
     * @swagger
     *
     * /user:
     *   get:
     *     summary: Obtém dados do usuário
     *     description: Obtém 
     *     parameters:
     *       - in: header
     *     responses:
     *       200:
     *         schema:
     *           type: object
     *           $ref: TODO
     */
    router.get(
        '/user',
        [
            // check('bra-agencia')
            //     .isNumeric()
            //     .withMessage('bra-agencia não é um número válido'),
            // check('bra-conta')
            //     .isNumeric()
            //     .withMessage('bra-conta não é um número válido'),
        ],
        (req: Request, res: Response, next: NextFunction) => {
            const resource = new UserResource();
            resource
                .getResponseUser(req, ResponseBase.build(res))
                .catch(next);
        },
    );
};