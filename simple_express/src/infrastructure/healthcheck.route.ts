import { Router } from 'express';
import HealthcheckController from '../controllers/healthcheck.controller';
import Route from '../interfaces/routes.interface';

export default class HealthcheckRoute implements Route {
  public path = '/';
  public router = Router();
  public healthcheckController = new HealthcheckController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.healthcheckController.healthcheck);
  }
}
