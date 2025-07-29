import { Container, Graphics } from "pixi.js";
import { BORDER, CELL_SIZE, COLORS } from "../constants";
import { setCounter } from "../services/counter";

type InnerRectGridConfigT = {
	rows?: number;
	cols?: number;
};

export const addInnerRectWithGrid = (config: InnerRectGridConfigT) => {
	const {
		rows = 10,
		cols = 10,
	} = config;


	const itemsArray = Array.from(
		{ length: rows },
		() => Array.from({ length: cols })
	);

	const cells =
		itemsArray
			.map((rowItems, rowIdx) =>
				rowItems.map((_, colIdx) => {
					const cell = new Graphics();
					const x = colIdx * CELL_SIZE.width;
					const y = rowIdx * CELL_SIZE.height;

					cell
						.clear()
						.rect(x, y, CELL_SIZE.width, CELL_SIZE.height)
						.stroke({ width: BORDER.width, color: COLORS.weak });


					cell.eventMode = "static";
					cell.cursor = "pointer";
					// cell.cacheAsTexture(true);

					cell.on("mouseover", () => {
						cell
							.fill({ color: COLORS.accent })
							.stroke({ width: BORDER.width, color: COLORS.weak });
						cell.eventMode = "none";

						setCounter();
					});


					return cell;

				}))
			.flat();


	const container = new Container();
	cells.forEach(c => container.addChild(c));

	return container;
};