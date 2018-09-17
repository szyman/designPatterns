//https://www.tutorialspoint.com/design_pattern/decorator_pattern.htm

interface Shape {
    type: string;
    draw(): void;
}

class Circle implements Shape {
    type: string = 'Circle';

    draw(): void {
        console.log('Circle::draw');
    }
}

class Rectangle implements Shape {
    type: string = 'Rectangle';

    draw(): void {
        console.log('Shape: Rectangle');
    }
}

abstract class ShapeDecorator implements Shape {
    type: string;
    protected decoratedShape: Shape;

    constructor(decoratedShape: Shape) {
        this.decoratedShape = decoratedShape;
    }

    draw(): void {
        this.decoratedShape.draw();
    }
}

class RedShapeDecorator extends ShapeDecorator {
    constructor(decoratedShape: Shape) {
        super(decoratedShape);
    }

    draw(): void {
        super.draw();
        this.setRedBorder(this.decoratedShape);
    }

    private setRedBorder(decoratedShape: Shape): void {
        console.log(decoratedShape.type + ': Border Color: Red');
    }
}

export function DecoratorPatternDemo() {
    let circle = new Circle();
    circle.draw();
    let redCircle = new RedShapeDecorator(new Circle());
    redCircle.draw();

    let rect = new Rectangle();
    rect.draw();
    let redRect = new RedShapeDecorator(new Rectangle());
    redRect.draw();
}