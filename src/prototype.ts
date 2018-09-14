//https://www.tutorialspoint.com/design_pattern/prototype_pattern.htm

abstract class Shape {
    private id: string;
    protected type: string;

    abstract draw(): void;

    getType(): string {
        return this.type;
    }

    getId(): string {
        return this.id;
    }

    setId(id: string): void {
        this.id = id;
    }

    clone(proto: Shape): Shape {
        this.id = proto.id;
        this.type = proto.type;

        return this;
    }
}

class Rectangle extends Shape {
    constructor() {
        super();
        this.type = 'Rectangle';
    }

    draw(): void {
        console.log('Rectangle::draw()');
    }
}

class Circle extends Shape {
    constructor() {
        super();
        this.type = 'Circle';
    }

    draw(): void {
        console.log('Circle::draw()');
    }
}

class ShapeCache {
    private static _shapesMap: Array<Shape> = [];

    static getShape(shapeId: string): Shape {
        let cachedShape = this._shapesMap.filter(x => x.getId() === shapeId)[0];

        return cachedShape.clone(cachedShape);
    }

    static loadCache(): void {
        let circle = new Circle();
        circle.setId('1');
        this._shapesMap.push(circle);

        let rectangle = new Rectangle();
        rectangle.setId('2');
        this._shapesMap.push(rectangle);
    }
}

export function PrototypePatternDemo() {
    ShapeCache.loadCache();

    let clonedShape = ShapeCache.getShape('1');
    console.log(clonedShape.getType());
    clonedShape.draw();

    let clonedShape2 = ShapeCache.getShape('2');
    console.log(clonedShape2.getType());
    clonedShape2.draw();
}

