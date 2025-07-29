import { Application, Graphics } from "pixi.js";
import { BORDER, CELL_SIZE, COLORS, SIDEBAR_WIDTH_RATIO } from "../constants";
import { addInnerRectWithGrid } from "../helpers/create-grid";
import { createShape } from "../helpers/create-shape";

const drawPreview = () => {
    const container = createShape('pyramid');
    container.position.set(CELL_SIZE.height + BORDER.width, CELL_SIZE.width + 2 * BORDER.width);

    return container;

}



export const addSideBar = (app: Application) => {
    const sidebar = new Graphics();
    const width = app.renderer.width * SIDEBAR_WIDTH_RATIO;
    const height = app.renderer.height;

    sidebar
        .rect(0, 0, width, height)
        .fill({ color: COLORS.secondary, alpha: 1 });

    app.stage.addChild(sidebar);

    const cells = addInnerRectWithGrid({
        xOffset: BORDER.width,
        yOffset: BORDER.width,
        width: width,
        height: height,
        rows: 15,
        cols: 6,
    });

    cells.forEach(c => app.stage.addChild(c));


    const preview = drawPreview();

    app.stage.addChild(preview);
};


