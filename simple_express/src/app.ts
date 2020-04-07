import * as express from 'express';
import Routes from './interfaces/routes.interface';

class App {
    public app: express.Application;
    public port: (string | number);
    public env: boolean;

    constructor(routes: Routes[]) {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.env = process.env.NODE_ENV === 'production' ? true : false;
    
        this.initializeRoutes(routes);
    }

    public listen() {
        this.app.listen(this.port, () => {
          console.log(`🚀 App listening on the port ${this.port}`);
        });
    }

    public getServer() {
        return this.app;
    }
 
    private initializeRoutes(routes: Routes[]) {
        routes.forEach((route) => {
          this.app.use('/', route.router);
        });
    }
}

export default App;