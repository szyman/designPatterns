interface Shape {
    draw(x: number, y: number, z: number, j: number): void;
}

class Rect implements Shape {
    draw(x: number, y: number, width: number, height: number): void {
        console.log(`Draw rect: ${x} ${y} ${width} ${height}`);
    }
}

class Line implements Shape {
    draw(x: number, y: number, z: number, j: number): void {
        console.log(`Draw line: ${x} ${y} ${z} ${j}`);
    }
}

class RectAdapter implements Shape {
    private reactAdaptee: Rect;
    constructor(shape: Shape) {
        this.reactAdaptee = shape;
    }

    draw(x: number, y: number, z: number, j: number): void {
        this.reactAdaptee.draw(Math.min(x,z), Math.min(y,j), z-x, j-y);
    }
}

class LineAdapter implements Shape {
    private lineAdaptee: Line;

    constructor(line: Line) {
        this.lineAdaptee = line;
    }

    draw(x: number, y: number, z: number, j: number): void {
        this.lineAdaptee.draw(x,y,z,j);
    }
}

export function AdapterPatternDemo2 () {
    let shape1 = new RectAdapter(new Rect());
    let shape2 = new LineAdapter(new Line());
    let x = 10, y= 20, z = 30, j = 60;

    shape1.draw(x, y, z, j);
    shape2.draw(x, y, z, j);
}