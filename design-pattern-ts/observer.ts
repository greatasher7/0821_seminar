// create class
class Subject {
    observers: any[];

    constructor() {
        this.observers = [];
    }

    // register observer
    register(observer: object){
        this.observers.push(observer);
    }

    // unregister observer
    unregister(observer: object){
        this.observers = this.observers.filter(registedObserver => registedObserver !== observer);
    }

    // notice to observers
    notice(data: any){
        this.observers.forEach(observer => observer.notify(data));
    }
}

// create instance
const subject = new Subject;

// create observers
const observer1 = {
    notify: (data: any) => {console.log(`first ${data}`)}
}
const observer2 = {
    notify: (data: any) => {console.log(`second ${data}`)}
}
const observer3 = {
    notify: (data: any) => {console.log(`third ${data}`)}
}

// register observers on instance 
subject.register(observer1);
subject.register(observer2);
subject.register(observer3);

subject.unregister(observer2);


// check subject's observers
console.log('observer list is...', subject.observers);

// give changes to subject and notice to observers
subject.notice("alarm");
