import { CELL_SIZE, COLORS } from "./constants";
import { initApp } from "./pixi"
const tw = {
  container: "p-5 gap-x-5 flex-col flex justify-center ",
  header: "text-3xl font-bold underline text-center",
  canvas: `border mt-3 mx-auto`
}
const size = `width: ${CELL_SIZE.width * 24}px; height: ${CELL_SIZE.height * 16}px;`;
const canvasId = "canvas";

document.querySelector<HTMLDivElement>('#app')!.innerHTML =
  `
    <div class="${tw.container}">
      <div>
        <h1 class="${tw.header}">
          PIXI TETRIS
        </h1>
      </div>
      <div  style="${size}" class="${tw.canvas}" id="${canvasId}" ></div>
    </div>
  `;

const canvasContainer = document.getElementById(canvasId);

const pixiApp = await initApp(
  {
    resizeTo: canvasContainer!,
    backgroundAlpha: 0.5,
    backgroundColor: COLORS.secondary,
  });
canvasContainer?.appendChild(pixiApp.canvas)