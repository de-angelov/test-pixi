import { Application, Graphics } from "pixi.js";
import { COLORS, MAIN_WIDTH_RATIO, SIDEBAR_WIDTH_RATIO } from "../constants";
import { addInnerRectWithGrid } from "../helpers/create-grid";

export const addMainContent = (app: Application) => {
	const main = new Graphics();
	const xStart = app.renderer.width * SIDEBAR_WIDTH_RATIO;
	const width = app.renderer.width * MAIN_WIDTH_RATIO;
	const height = app.renderer.height;

	main
		.rect(xStart, 0, width, height)
		.fill({ color: COLORS.secondary, alpha: 1 })

	app.stage.addChild(main);

	const grid = addInnerRectWithGrid({
		rows: 16,
		cols: 18,
	});

	grid.position.x = xStart;

	app.stage.addChild(grid)
};