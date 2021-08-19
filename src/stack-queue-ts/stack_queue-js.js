// stack
const Stack = function(capa) {
    this.capacity = capa || Infinity;
    this.storage = [];
    this.count = 0;
}

Stack.prototype.push = function(data) {
    if(this.count < this.capacity){
        this.storage[this.count] = data;
        this.count++;
    } else{
        console.log("the storage is full");
    }
}

Stack.prototype.pop = function() {
    if(this.count !== 0){
        this.count--;
        const result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    } else{
        console.log("the storage is empty")
    }
}

const stack_sample = new Stack(5);
stack_sample.push("1");
stack_sample.push("2");
stack_sample.push("3");
console.log("after push on stack", stack_sample.storage);
stack_sample.pop()
console.log("after pop on stack", stack_sample.storage);



// queue
const Queue = function(capa) {
    this.capacity = capa || Infinity;
    this.storage = [];
    this.count = 0;
}

Queue.prototype.enqueue = function(data) {
    if(this.count < this.capacity){
        this.storage[this.count] = data;
        this.count++;
    } else{
        console.log("the storage is full");
    }
}

Queue.prototype.dequeue = function() {
    if(this.count > 0){
        const result = this.storage[0];
        for(let i = 1; i < this.count; i++){
            this.storage[i-1] = this.storage[i];
        }
        this.count--;
        delete this.storage[this.count];
        return result;
    } else{
        console.log("the queue is empty");
    }
}

const queue_sample = new Queue(5);
queue_sample.enqueue(1);
queue_sample.enqueue(2);
queue_sample.enqueue(3);
console.log("after enqueue on queue", queue_sample.storage);
queue_sample.dequeue()
console.log("after dequeue on queue", queue_sample.storage);







