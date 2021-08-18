
const Observer = () => {

    // 클래스 생성
    class Subject {
        // 등록된 옵저버들을 담을 변수의 타입 지정
        observers: any[];
    
        constructor() {
            // 등록된 옵저버들을 담을 배열 선언
            this.observers = [];
        }
    
        // 옵저버를 등록한다 (배열에 담는다) 
        register(observer: object){
            this.observers.push(observer);
        }
    
        // 배열에서 옵저버를 삭제한다
        unregister(observer: object){
            this.observers = this.observers.filter(registedObserver => registedObserver !== observer);
        }
    
        // 데이터를 받으면 등록된 옵저버들에게 이를 알리고 데이터를 전송한다.
        notice(data: any){
            this.observers.forEach(observer => observer.notify(data));
        }
    }
    
    // 인스턴스 생성
    const subject = new Subject;
    
    // 옵저버 생성
    const observer1 = {
        notify: (data: any) => {console.log(`first ${data}`)}
    }
    const observer2 = {
        notify: (data: any) => {console.log(`second ${data}`)}
    }
    const observer3 = {
        notify: (data: any) => {console.log(`third ${data}`)}
    }
    
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
}

export default Observer;

