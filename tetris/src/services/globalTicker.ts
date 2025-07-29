import { Ticker } from 'pixi.js';

const ticker = new Ticker();

ticker.minFPS = 1000;

export { ticker as tickerService };