import { Container, Graphics } from "pixi.js";
import { BORDER, CELL_SIZE, COLORS } from "../constants";

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
						.rect(x, y, CELL_SIZE.width, CELL_SIZE.height)
						.stroke({ width: BORDER.width, color: COLORS.weak });

					return cell;
				}))
			.flat();


	const container = new Container();
	cells.forEach(c => container.addChild(c));

	return container;
};