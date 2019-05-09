import Application from "./application";
import Router from "./router";
import Logger from "./logger";
import tasker from "./tasker";

const logger = new Logger(tasker);
const router = new Router(logger);
const application = new Application(tasker, logger);

export { application, router, logger };
