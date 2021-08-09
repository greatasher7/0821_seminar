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

// test
const stack_sample = new Stack(5);
const queue_sample = new Queue(5);

const s_or_q = prompt("stack or queue?");
// stack test
if(s_or_q === "stack"){
    while(1){
        const s_action = prompt("push(u) or pop(o) or exit");
        if(s_action === "u"){
            const s_data = prompt("write data");
            stack_sample.push(s_data);
            console.log("the storage is... ", stack_sample.storage);
        } else if(s_action === "o"){
            stack_sample.pop();
            console.log("the storage is... ", stack_sample.storage);
        } else if(s_action === "exit"){
            console.log("exit!!");
            break;
        } else{
            continue;
        }
    }
// queue test
} else if(s_or_q === "queue"){
    while(1){
        const q_action = prompt("enpueue(e) or dequeue(d) or exit");
        if(q_action === "e"){
            const q_data = prompt("write data");
            queue_sample.enqueue(q_data);
            console.log("the storage is... ", queue_sample.storage);
        } else if(q_action === "d"){
            queue_sample.dequeue();
            console.log("the storage is... ", queue_sample.storage);
        } else if(q_action === "exit"){
            console.log("exit!!");
            break;
        } else{
            continue;
        }
    }
}




