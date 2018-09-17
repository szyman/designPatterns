// https://www.tutorialspoint.com/design_pattern/bridge_pattern.htm

interface DrawAPI {
    drawCircle(radius: number, x: number, y:number): void;
}

class RedCircle implements DrawAPI {
    drawCircle(radius: number, x: number, y: number): void {
        console.log(`Drawing Circle[ color: red, radius: ${radius}, x: ${x}, y: ${y} ]`);
    }
}

class GreenCircle implements DrawAPI {
    drawCircle(radius: number, x: number, y: number): void {
        console.log(`Drawing Circle[ color: green, radius: ${radius}, x: ${x}, y: ${y} ]`);
    }
}

abstract class Shape {
    protected drawApi: DrawAPI;

    constructor(drawApi: DrawAPI) {
        this.drawApi = drawApi;
    }

    abstract draw(): void;
}

class Circle extends Shape {
    private x: number;
    private y:number;
    private radius:number;

    constructor(x: number, y: number, radius: number, drawApi: DrawAPI) {
        super(drawApi);
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    draw(): void {
        this.drawApi.drawCircle(this.radius, this.x, this.y);
    }
}

export function BridgePatternDemo() {
    let redCircle = new Circle(100, 100, 10, new RedCircle());
    let greenCircle = new Circle(10,10,30, new GreenCircle());

    redCircle.draw();
    greenCircle.draw();
}