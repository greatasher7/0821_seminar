// stack - number
const Stack_ts: any = function(capa: number): void{

    this.capacity = capa || Infinity;
    this.storage = [];
    this.count = 0;
}

Stack_ts.prototype.push = function(data: number): void{
    if(this.count < this.capacity){
        this.storage[this.count] = data;
        this.count++;
    } else{
        console.log("the storage is full")
    }
}

Stack_ts.prototype.pop = function(): number {
    if(this.count !== 0){
        this.count--;
        const result: number = this.storage[this.count];
        delete this.storage[this.count]
        return result
    } else{
        console.log("the storage is empty");
    }
}

// queue - string
const Queue_ts: any = function(capa: number): void{

    this.capacity = capa || Infinity;
    this.storage = [];
    this.count = 0;
}

Queue_ts.prototype.enqueue = function(data: string): void {
    if(this.count < this.capacity){
        this.storage[this.count] = data;
        this.count++;
    } else{
        console.log("the storage is full");
    }
}

Queue_ts.prototype.dequeue = function(): string{
    if(this.count > 0){
        const result: string = this.storage[0];
        for(let i: number = 0; i < this.count; i++){
            this.storage[i-1] = this.storage[i];
        }
        this.count--;
        delete this.storage[this.count];
        return result;
    } else{
        console.log("the queue is empty");
    }
}

const stack_sample_ts = new Stack_ts(5);
stack_sample_ts.push("123");
console.log(stack_sample_ts.storage);


const queue_sample_ts = new Queue_ts(5);

