import { Application, type ApplicationOptions } from "pixi.js";
import { addSideBar } from "./components/sidebar";
import { addMainContent } from "./components/main-content";

const initApp = async (options?: Partial<ApplicationOptions>) => {
	const app = new Application();
	await app.init(options);

	addMainContent(app);
	addSideBar(app);

	return app;
};

export { initApp };