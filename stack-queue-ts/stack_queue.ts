// stack - generics
class Stack_ts {
    capacity: number;
    storage: any[];
    count: number;
    
    constructor(capa: number){
        this.capacity = capa;
        this.storage = [];
        this.count = 0;
    }

    push = <T>(data: T) => {
        if(this.count >= this.capacity){
            console.log("the storage is full");
            return false;
        }
        this.storage[this.count] = data;
        this.count++;
    }

    pop = (): string | boolean => {
        if(this.count === 0){
            console.log("the storage is empty");
            return false;
        }
        this.count--;
        const result: string = this.storage[this.count];
        delete this.storage[this.count];
        return result
    }
}

const stack_sample_ts = new Stack_ts(5);
stack_sample_ts.push<string>("1");
stack_sample_ts.push<number>(2);
stack_sample_ts.push<string>("3");
console.log("after push on stack", stack_sample_ts.storage);
stack_sample_ts.pop()
console.log("after pop on stack", stack_sample_ts.storage);


// queue - interface
interface login {
    name: string,
    password: number
}

class Queue_ts {
    capacity: number;
    storage: any[];
    count: number;
    
    constructor(capa: number) {
        this.capacity = capa;
        this.storage = [];
        this.count = 0;
    }

    enqueue = (data: login): void | boolean => {
        if(this.count >= this.capacity){
            console.log("the storage is full");
            return false;
        } 
        this.storage[this.count] = data;
        this.count++;
    }

    dequeue = (): login | boolean => {
        if(this.count === 0) {
            console.log("the storage is empty");
            return false;
        }
        const result: login = this.storage[0];
        delete this.storage[0]
        for(let i = 0; i < this.capacity - 2; i++){
            this.storage[i] = this.storage[i + 1];
        }
        this.count--;
        delete this.storage[this.count];
        return result;
    
    }
}

const queue_sample_ts = new Queue_ts(5);
queue_sample_ts.enqueue({ name: "john", password: 1234 });
queue_sample_ts.enqueue({ name: "asher", password: 1234 });
queue_sample_ts.enqueue({ name: "tom", password: 1234 });
console.log("after enqueue on queue", queue_sample_ts.storage);
queue_sample_ts.dequeue()
console.log("after dequeue on queue", queue_sample_ts.storage);

