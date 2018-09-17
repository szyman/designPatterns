//https://www.tutorialspoint.com/design_pattern/facade_pattern.htm

interface Shape {
    draw(): void;
}

class Rectangle implements Shape {
    draw(): void {
        console.log('Rectangle::draw()');
    }
}

class Circle implements Shape {
    draw(): void {
        console.log('Circle::draw()');
    }
}

class ShapeMaker {
    private rect: Shape;
    private circle: Shape;

    constructor() {
        this.rect = new Rectangle();
        this.circle = new Circle();
    }

    drawCircle(): void {
        this.circle.draw();
    }

    drawRect(): void {
        this.rect.draw();
    }
}

export function FacadePatternDemo() {
    let shapeMaker = new ShapeMaker();
    shapeMaker.drawCircle();
    shapeMaker.drawRect();
}