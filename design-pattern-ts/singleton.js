var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.prototype.Singleton = function () { };
    Singleton.getInstance = function () {
        if (Singleton.newInstance === null) {
            Singleton.newInstance = new Singleton;
        }
        return Singleton.newInstance;
    };
    Singleton.newInstance = null;
    return Singleton;
}());
var sample1 = Singleton.getInstance();
var sample2 = Singleton.getInstance();
console.log(sample1);
console.log(sample2);
console.log(sample1 === sample2 ? 'yes' : 'no');
// 멀티스레드 환경에서의 Singleton
var Singleton_multiThread = /** @class */ (function () {
    function Singleton_multiThread() {
    }
    Singleton_multiThread.prototype.Singleton_multiThread = function () { };
    Singleton_multiThread.getInstance = function () {
        return Singleton_multiThread.newInstance;
    };
    Singleton_multiThread.newInstance = new Singleton_multiThread;
    return Singleton_multiThread;
}());
var sample1_mt = Singleton_multiThread.getInstance();
var sample2_mt = Singleton_multiThread.getInstance();
console.log(sample1_mt);
console.log(sample2_mt);
console.log(sample1_mt === sample2_mt ? 'yes' : 'no');
