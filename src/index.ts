import config from "./config";
import { HttpService } from "./http";
console.log(config)
const { app } = new HttpService({
  logger: config.debug ? "debug" : "warn",
});

app.listen(+config.port, config.host, err => {
  if (err) throw err;
});
