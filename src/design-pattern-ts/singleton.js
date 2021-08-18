"use strict";
exports.__esModule = true;
var singleton = function () {
    var Singleton = /** @class */ (function () {
        function Singleton() {
        }
        Singleton.prototype.Singleton = function () { };
        // 인스턴스 전역 변수가 비어 있으면 인스턴스 생성하고, 해당 인스턴스를 리턴
        Singleton.getInstance = function () {
            if (Singleton.newInstance === null) {
                Singleton.newInstance = new Singleton;
            }
            return Singleton.newInstance;
        };
        // 생성될 인스턴스를 넣을 전역 변수 선언
        Singleton.newInstance = null;
        return Singleton;
    }());
    // 복수의 인스턴스 생성 메서드를 실행해도, 인스턴스는 하나만 생성
    var sample1 = Singleton.getInstance();
    var sample2 = Singleton.getInstance();
    console.log("/////////// single-thread ///////////////");
    console.log(sample1);
    console.log(sample2);
    console.log(sample1 === sample2 ? 'yes' : 'no');
    // 멀티스레드 환경에서의 Singleton (기존 방법에서는 동시에 다수의 인스턴스가 생성될 수도 있다)
    var Singleton_multiThread = /** @class */ (function () {
        function Singleton_multiThread() {
        }
        Singleton_multiThread.prototype.Singleton_multiThread = function () { };
        // 생성된 인스턴스를 리턴
        Singleton_multiThread.getInstance = function () {
            return Singleton_multiThread.newInstance;
        };
        // class 생성과 동시에, 인스턴스를 생성하여 정적 변수에 초기화
        Singleton_multiThread.newInstance = new Singleton_multiThread;
        return Singleton_multiThread;
    }());
    var sample1_mt = Singleton_multiThread.getInstance();
    var sample2_mt = Singleton_multiThread.getInstance();
    console.log("/////////// multi-thread ///////////////");
    console.log(sample1_mt);
    console.log(sample2_mt);
    console.log(sample1_mt === sample2_mt ? 'yes' : 'no');
};
exports["default"] = singleton;
