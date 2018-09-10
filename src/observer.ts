//https://www.tutorialspoint.com/design_pattern/observer_pattern.htm

class Subject {
    private _observers: Array<Observer>;
    private _state: number;

    constructor() {
        this._observers = [];
    }

    getState() {
        return this._state;
    }

    setState(state: number) {
        this._state = state;
        this.notifyAllObservers();
    }

    attach(observer: Observer) {
        this._observers.push(observer);
    }

    notifyAllObservers() {
        this._observers.forEach(observer => {
            observer.update();
        });
    }
}

abstract class Observer {
    protected subject: Subject;
    abstract update(): void
}

class BinaryObserver extends Observer {
    constructor(subject: Subject) {
        super();
        this.subject = subject;
        this.subject.attach(this);
    }

    update(): void {
        console.log('Binary String: ' + dec2bin(this.subject.getState()));
    }
}

class OctaObserver extends Observer {
    constructor(subject: Subject) {
        super();
        this.subject = subject;
        this.subject.attach(this);
    }

    update(): void {
        console.log('Octa String: ' + dec2octa(this.subject.getState()));
    }
}

export function ObserverPatternDemo () {
    let subject = new Subject();
    new BinaryObserver(subject);
    new OctaObserver(subject);

    subject.setState(15);
    subject.setState(20);
}

function dec2bin(dec: any) {
    return (dec >>> 0).toString(2);
}

function dec2octa(dec: any) {
    return (dec >>> 0).toString(8);
}