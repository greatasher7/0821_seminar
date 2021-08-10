var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.prototype.Singleton = function () {
        console.log("this is a new object!");
    };
    // 
    Singleton.SingletonTest = function () {
        console.log(Singleton.one);
        if (Singleton.one === "1") {
            Singleton.one = new Singleton;
        }
        return Singleton.one;
    };
    Singleton.one = "1";
    return Singleton;
}());
var sample1 = Singleton.SingletonTest();
var sample2 = Singleton.SingletonTest();
console.log(sample1);
console.log(sample2);
console.log(sample1 === sample2 ? 'yes' : 'no');
