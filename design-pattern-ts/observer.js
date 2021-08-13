// 클래스 생성
var Subject = /** @class */ (function () {
    function Subject() {
        // 등록된 옵저버들을 담을 배열 선언
        this.observers = [];
    }
    // 옵저버를 등록한다 (배열에 담는다) 
    Subject.prototype.register = function (observer) {
        this.observers.push(observer);
    };
    // 배열에서 옵저버를 삭제한다
    Subject.prototype.unregister = function (observer) {
        this.observers = this.observers.filter(function (registedObserver) { return registedObserver !== observer; });
    };
    // 데이터를 받으면 등록된 옵저버들에게 이를 알리고 데이터를 전송한다.
    Subject.prototype.notice = function (data) {
        this.observers.forEach(function (observer) { return observer.notify(data); });
    };
    return Subject;
}());
// 인스턴스 생성
var subject = new Subject;
// 옵저버 생성
var observer1 = {
    notify: function (data) { console.log("first " + data); }
};
var observer2 = {
    notify: function (data) { console.log("second " + data); }
};
var observer3 = {
    notify: function (data) { console.log("third " + data); }
};
// 인스턴스 옵저버 목록에 생성된 옵저버 추가
subject.register(observer1);
subject.register(observer2);
subject.register(observer3);
// 인스턴스 옵저버 목록에서 옵저버 제거
subject.unregister(observer2);
// 인스턴스의 옵저버 목록 확인
console.log('observer list is...', subject.observers);
// 인스턴스에게 데이터 전달 후, 그 사실이 옵저버에게 전달이 되었는지 확인.
subject.notice("alarm");
