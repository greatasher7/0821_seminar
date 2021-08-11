// create class
var Subject = /** @class */ (function () {
    function Subject() {
        this.observers = [];
    }
    // register observer
    Subject.prototype.register = function (observer) {
        this.observers.push(observer);
    };
    // unregister observer
    Subject.prototype.unregister = function (observer) {
        this.observers = this.observers.filter(function (registedObserver) { return registedObserver !== observer; });
    };
    // notice to observers
    Subject.prototype.notice = function (data) {
        this.observers.forEach(function (observer) { return observer.notify(data); });
    };
    return Subject;
}());
// create instance
var subject = new Subject;
// create observers
var observer1 = {
    notify: function (data) { console.log("first " + data); }
};
var observer2 = {
    notify: function (data) { console.log("second " + data); }
};
var observer3 = {
    notify: function (data) { console.log("third " + data); }
};
// register observers on instance 
subject.register(observer1);
subject.register(observer2);
subject.register(observer3);
subject.unregister(observer2);
// check subject's observers
console.log('observer list is...', subject.observers);
// give changes to subject and notice to observers
subject.notice("alarm");
