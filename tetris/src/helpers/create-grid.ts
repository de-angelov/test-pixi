import { Graphics } from "pixi.js";
import { BORDER, CELL_SIZE, COLORS } from "../constants";

type InnerRectGridConfigT = {
    width: number;
    height: number;
    rows?: number;
    cols?: number;
    xOffset: number;
    yOffset: number;
};

export const addInnerRectWithGrid = (config: InnerRectGridConfigT) => {
    const {
        width,
        height,
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

                    cell.rect(x, y, width, height).stroke({ width: BORDER.width, color: COLORS.weak });

                    return cell;
                }))
            .flat();

    return cells
};