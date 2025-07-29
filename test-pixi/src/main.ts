import { initApp } from "./pixi"
const tw = {
  container: "flex p-5 gap-x-5 flex-col",
  header: "text-3xl font-bold underline text-center",
  canvas: 'border mt-3 w-full h-200'
}

const canvasId = "canvas";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = 
  `
    <div class="${tw.container}">
      <div>
        <h1 class="${tw.header}">
          PIXI JS
        </h1>
      </div>
      <div class="${tw.canvas}" id="${canvasId}" ></div>
    </div>
  `;

const canvasContainer = document.getElementById(canvasId);

console.log('canvas', canvasContainer);

const pixiApp = await initApp(
  { 
    resizeTo: canvasContainer!,
    backgroundAlpha: 0.5,
    backgroundColor: 0xffea00
  });
canvasContainer?.appendChild(pixiApp.canvas)