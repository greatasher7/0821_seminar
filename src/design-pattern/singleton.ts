const singleton = () => {
    // 생성될 인스턴스의 원형이 될 Class
    class PrivateSingleton {
        message: string
        constructor() {
            this.message = "i am a instance";
        }
    }

    class Singleton {

        message: string
        private constructor() {
            this.message = "i am a instance";
        }
        // 생성될 인스턴스를 넣을 전역 변수 선언
        private static newInstance: object = null;
        
        // 인스턴스 전역 변수가 비어 있으면 인스턴스 생성하고, 해당 인스턴스를 리턴 ===의 의미 in js
        public static getInstance(): object {
            if(Singleton.newInstance === null){
                Singleton.newInstance = new Singleton
            }
            return Singleton.newInstance
        }
    }
    
    // 복수의 인스턴스 생성 메서드를 실행해도, 인스턴스는 하나만 생성
    const sample1: object = Singleton.getInstance();
    const sample2: object = Singleton.getInstance();
    console.log("/////////// singleton ///////////////")
    console.log(sample1);
    console.log(sample2);
    console.log(sample1 === sample2 ? 'yes' : 'no');
    console.dir(sample1);
    
    
    // 멀티스레드 환경에서의 Singleton (기존 방법에서는 동시에 다수의 인스턴스가 생성될 수도 있다)
    // 생성될 인스턴스의 원형이 될 Class
    class PrivateSingleton_multiThread {
        message: string
        constructor() {
            this.message = "i am a instance";
        }
    }

    class Singleton_multiThread {
        // class 생성과 동시에, 인스턴스를 생성하여 정적 변수에 초기화
        private static newInstance = new PrivateSingleton_multiThread; 
    
        // 생성된 인스턴스를 리턴
        public static getInstance(): object {
            return Singleton_multiThread.newInstance;
        }
    }
    
    const sample1_mt: object = Singleton_multiThread.getInstance();
    const sample2_mt: object = Singleton_multiThread.getInstance();
    console.log("/////////// multi-thread ///////////////")
    console.log(sample1_mt);
    console.log(sample2_mt);
    console.log(sample1_mt===sample2_mt ? 'yes' : 'no');
    
}

export default singleton;



