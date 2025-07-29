import { Application, BlurFilter, Graphics, RenderLayer, Text } from "pixi.js";
import { BORDER, CELL_SIZE, COLORS, SIDEBAR_WIDTH_RATIO } from "../constants";
import { addInnerRectWithGrid } from "../helpers/create-grid";
import { createShape } from "../helpers/create-shape";
import { tickerService } from "../services/globalTicker";
import { getCounter } from "../services/counter";

const drawPreview = () => {
	const container = createShape('pyramid');
	container.position.set(CELL_SIZE.height, CELL_SIZE.width);
	container.zIndex = 10;

	return container;
}

const drawText = () => {

	const uiLayer = new RenderLayer();

	// Create text object and store it in a variable
	const dynamicText = new Text({ text: 'COUNT: ' + getCounter() });

	dynamicText.x = CELL_SIZE.width;
	dynamicText.y = CELL_SIZE.height / 4;

	uiLayer.attach(dynamicText);


	return { text: dynamicText, layer: uiLayer };
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

	let elapsed = 0;

	tickerService.add((ticker) => {
		elapsed += ticker.deltaMS / 1000; // convert ms to seconds
		const blur = new BlurFilter();
		blur.blur = 4;


		if (elapsed >= 0.6) {
			elapsed = 0;


			console.log(ticker)

			preview.alpha = preview.alpha === 0.7 ? 1 : 0.7;
			preview.filters = preview.filters ? undefined : [blur];
		}
	});

	const { text, layer } = drawText();

	app.stage.addChild(layer);

	tickerService.add(() => { text.text = 'COUNT: ' + getCounter(); });

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


