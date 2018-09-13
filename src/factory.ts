interface Shape {
    draw(): void;
}

class Rectangle implements Shape {
    draw(): void {
        console.log('Rectangle::draw');
    }
}

class Circle implements Shape {
    draw(): void {
        console.log('Circle::draw');
    }
}

class ShapeFactory {
    getShape(shapeType:string) : Shape {
        if (!shapeType) {
            return null;
        }

        if (shapeType === 'CIRCLE') {
            return new Circle();
        } else if (shapeType === 'RECTANGLE') {
            return new Rectangle();
        }
    }
}

export function FactoryPatternDemo() {
    let shapeFactory = new ShapeFactory();

    let shape1 = shapeFactory.getShape('CIRCLE');
    shape1.draw();

    let shape2 = shapeFactory.getShape('RECTANGLE');
    shape2.draw();
}