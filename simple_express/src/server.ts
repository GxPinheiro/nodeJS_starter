import App from './app';
import Healthcheck from './routes/healthcheck.route';

const app = new App([
  new Healthcheck(),
]);

app.listen();
