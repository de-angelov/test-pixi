import { Application, Graphics } from "pixi.js";
import { BORDER, CELL_SIZE, COLORS, SIDEBAR_WIDTH_RATIO } from "../constants";
import { addInnerRectWithGrid } from "../helpers/create-grid";
import { createShape } from "../helpers/create-shape";

const drawPreview = () => {
	const container = createShape('pyramid');
	container.position.set(CELL_SIZE.height, CELL_SIZE.width);
	container.zIndex = 10;

	return container;
}

export const addSideBar = (app: Application) => {
	const sidebar = new Graphics();
	const width = app.renderer.width * SIDEBAR_WIDTH_RATIO;
	const height = app.renderer.height;

	sidebar
		.rect(0, 0, width, height)
		.fill({ color: COLORS.secondary, alpha: 1 })

	app.stage.addChild(sidebar);

	const grid = addInnerRectWithGrid({
		rows: 16,
		cols: 6,
	});

	app.stage.addChild(grid);

	const preview = drawPreview();

	app.stage.addChild(preview);



	const border = new Graphics()
		.moveTo(6 * CELL_SIZE.width, 0)
		.lineTo(6 * CELL_SIZE.width, height)
		.lineTo(0, height)
		.lineTo(0, 0)
		.lineTo(6 * CELL_SIZE.width, 0)
		.stroke({ color: COLORS.strong, width: BORDER.width });

	// Add it to the stage
	app.stage.addChild(border);

	// app.stage.addChild(divider);

};


