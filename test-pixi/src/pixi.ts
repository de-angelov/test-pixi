import {
    Application, Graphics, Text, TextStyle, type ApplicationOptions, Assets,
    Sprite,
    type Renderer,
    Container,
    BlurFilter,
    NoiseFilter
} from "pixi.js";

const addRandomCircles = (app: Application<Renderer>) => {
    const circle = new Graphics();
    app.ticker.add(() => {
        circle
            .circle(Math.random() * app.screen.width, Math.random() * app.screen.height, 5)
            .fill({ color: 0xffffff });


        app.stage.addChild(circle);
    });

}

const addContainer = async (app: Application<Renderer>) => {
    const container = new Container();
    app.stage.addChild(container);
    container.position.set(200, 200);

    const texture = await Assets.load('public/vite.svg');
    const sprite = Sprite.from(texture);
    sprite.position.x = 500;
    sprite.position.y = 500;
    sprite.scale = 5;
    sprite.anchor = 0.5;
    sprite.skew.set(Math.PI / 8, 0);
    sprite.rotation = Math.PI / 4;
    sprite.filters = [new BlurFilter({ strength: 10 }), new NoiseFilter({ noise: .3 })];


    container.position = { x: 400, y: 200 };
    container.addChild(sprite);

}

const createItems = async () => {
    const texture = await Assets.load('public/vite.svg');
    const sprite = Sprite.from(texture);

    const rectangle = new Graphics()
        .rect(200, 200, 200, 100)
        .fill({
            // Sets the color
            color: 0xffea00,
            // Sets the opacity
            alpha: 0.5
        })
        .stroke({
            // Sets the thickness of the stroke
            width: 8,
            color: 0x00ff00
        });

    function moveRectangle() {
        rectangle.position.x -= 10;
        rectangle.position.y += 10;
    };

    rectangle.eventMode = 'static';
    rectangle.on('pointerdown', moveRectangle);
    rectangle.cursor = 'pointer';


    const star = new Graphics()
        .star(1000, 250, 5, 80, 30)
        .stroke({
            width: 8,
            color: 0x00ff00
        })
        .fill({
            color: 0xffffff
        });

    const textStyle = new TextStyle({
        fill: '#58E0FC',
        fontSize: 100,
        dropShadow: {
            color: '#FFFFFF',
            blur: 4,
            angle: Math.PI / 6,
            distance: 6,
        },
        // fontFamily: 'MyFont',
    });

    const myText = new Text({ text: 'Hello PixiJS!', style: textStyle });

    return [
        rectangle,
        star,
        myText,
        sprite
    ];
}

const initApp = async (options?: Partial<ApplicationOptions>) => {
    const app = new Application();
    await app.init(options);
    const items = await createItems();
    items.forEach(c => app.stage.addChild(c));

    addRandomCircles(app);
    addContainer(app);
    return app;
};

export { initApp };