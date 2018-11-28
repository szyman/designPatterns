class SingleObject {
    private static instance: SingleObject = new SingleObject();

    public static getInstance() {
        return this.instance;
    }

    public sayHello() : void {
        console.log('Hello');
    }
}

export function SingletonPatternDemo() {
    let obj = SingleObject.getInstance();
    obj.sayHello();
}