class Singleton {
    private static one: any = null;
    private Singleton(){
        console.log("this is a new object!");
    }

    public static getInstance(): any {
        if(Singleton.one === null){
            Singleton.one = new Singleton
        }
        return Singleton.one
    }
}

const sample1: object = Singleton.getInstance();
const sample2: object = Singleton.getInstance();

console.log(sample1);
console.log(sample2);

console.log(sample1===sample2 ? 'yes' : 'no');


