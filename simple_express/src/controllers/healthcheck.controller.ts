import { NextFunction, Request, Response } from 'express';

class HealthcheckController {

  public healthcheck = (req: Request, res: Response, next: NextFunction) => {
    try {
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  }
}

export default HealthcheckController;
