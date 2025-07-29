import { Container, Graphics } from "pixi.js";
import { BORDER, CELL_SIZE, COLORS } from "../constants";

const line = ['xxxx'];

const pyramid =
    [
        '-x-',
        'xxx'
    ];

const angle =
    [
        'x--',
        'xxx'
    ];

const cube =
    [
        "xx",
        "xx"
    ];


type ShapeT = 'cube' | 'angle' | 'line' | 'pyramid';


export const createShape = (shape: ShapeT) => {

    const template = (() => {
        switch (shape) {
            case "line": return line;

            case 'angle': return angle;

            case 'cube': return cube;

            case 'pyramid': return pyramid;
        }
    })();

    const cells = template
        .map((row, rowIdx) =>
            row
                .split('')
                .map((col, colIdx) => {
                    if (col !== 'x') {
                        return null;
                    }
                    const cell = new Graphics();
                    const x = colIdx * CELL_SIZE.width;
                    const y = rowIdx * CELL_SIZE.height;

                    cell.rect(x, y, CELL_SIZE.width, CELL_SIZE.height)
                        .fill({ color: COLORS.weak })
                        .stroke({ width: BORDER.width, color: COLORS.strong });

                    return cell;


                })

        )
        .flat()
        .filter(x => x !== null);

    const container = new Container();
    cells.forEach(c => container.addChild(c));

    return container;
}