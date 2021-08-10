// stack - number
var Stack_ts = function (capa) {
    this.capacity = capa || Infinity;
    this.storage = [];
    this.count = 0;
};
Stack_ts.prototype.push = function (data) {
    if (this.count < this.capacity) {
        this.storage[this.count] = data;
        this.count++;
    }
    else {
        console.log("the storage is full");
    }
};
Stack_ts.prototype.pop = function () {
    if (this.count !== 0) {
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }
    else {
        console.log("the storage is empty");
    }
};
// queue - string
var Queue_ts = function (capa) {
    this.capacity = capa || Infinity;
    this.storage = [];
    this.count = 0;
};
Queue_ts.prototype.enqueue = function (data) {
    if (this.count < this.capacity) {
        this.storage[this.count] = data;
        this.count++;
    }
    else {
        console.log("the storage is full");
    }
};
Queue_ts.prototype.dequeue = function () {
    if (this.count > 0) {
        var result = this.storage[0];
        for (var i = 0; i < this.count; i++) {
            this.storage[i - 1] = this.storage[i];
        }
        this.count--;
        delete this.storage[this.count];
        return result;
    }
    else {
        console.log("the queue is empty");
    }
};
var stack_sample_ts = new Stack_ts(5);
stack_sample_ts.push("123");
console.log(stack_sample_ts.storage);
var queue_sample_ts = new Queue_ts(5);
