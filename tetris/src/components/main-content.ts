import { Application, Graphics } from "pixi.js";
import { BORDER, COLORS, MAIN_WIDTH_RATIO, SIDEBAR_WIDTH_RATIO } from "../constants";
import { addInnerRectWithGrid } from "../helpers/create-grid";

export const addMainContent = (app: Application) => {
    const main = new Graphics();
    const xStart = app.renderer.width * SIDEBAR_WIDTH_RATIO;
    const width = app.renderer.width * MAIN_WIDTH_RATIO;
    const height = app.renderer.height;

    const innerWidth = width - 2 * BORDER.width;
    const innerHeight = height - 2 * BORDER.width;

    // Outer rectangle
    main
        .rect(xStart, 0, width, height)
        .fill({ color: COLORS.strong, alpha: 1 });

    // Inner rectangle (offset + opposite color)
    main
        .rect(xStart + BORDER.width, BORDER.width, innerWidth, innerHeight)
        .fill({ color: COLORS.secondary, alpha: 1 });

    app.stage.addChild(main);


    const xOffset = xStart + BORDER.width;
    const yOffset = BORDER.width;


    const cells = addInnerRectWithGrid({
        xOffset,
        yOffset,
        width: width,
        height: height,
        rows: 15,
        cols: 18,
    });

    cells.forEach(c => app.stage.addChild(c));
};