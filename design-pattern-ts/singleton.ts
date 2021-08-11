class Singleton {
    private static newInstance: any = null;
    private Singleton(){}

    public static getInstance(): any {
        if(Singleton.newInstance === null){
            Singleton.newInstance = new Singleton
        }
        return Singleton.newInstance
    }
}

const sample1: object = Singleton.getInstance();
const sample2: object = Singleton.getInstance();
console.log(sample1);
console.log(sample2);
console.log(sample1===sample2 ? 'yes' : 'no');



// 멀티스레드 환경에서의 Singleton
// 클래스 생성시, 정적 변수에 인스턴스를 만들어서 바로 초기화 하는 방법
class Singleton_multiThread {
    private static newInstance = new Singleton_multiThread; 
    private Singleton_multiThread(){}
    
    public static getInstance(): any {
        return Singleton_multiThread.newInstance;
    }
}

const sample1_mt: object = Singleton_multiThread.getInstance();
const sample2_mt: object = Singleton_multiThread.getInstance();
console.log(sample1_mt);
console.log(sample2_mt);
console.log(sample1_mt===sample2_mt ? 'yes' : 'no');