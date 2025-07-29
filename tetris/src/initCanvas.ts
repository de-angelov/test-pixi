import { Application, type ApplicationOptions } from "pixi.js";
import { addSideBar } from "./components/sidebar";
import { addMainContent } from "./components/main-content";
import { tickerService } from "./services/globalTicker";

const initApp = async (options?: Partial<ApplicationOptions>) => {
	const app = new Application();
	await app.init(options);


	tickerService.start();

	addMainContent(app);
	addSideBar(app);

	return app;
};

export { initApp };