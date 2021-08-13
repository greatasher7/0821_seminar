// stack - generics
var Stack_ts = /** @class */ (function () {
    function Stack_ts(capa) {
        var _this = this;
        this.push = function (data) {
            if (_this.count >= _this.capacity) {
                console.log("the storage is full");
                return false;
            }
            _this.storage[_this.count] = data;
            _this.count++;
        };
        this.pop = function () {
            if (_this.count === 0) {
                console.log("the storage is empty");
                return false;
            }
            _this.count--;
            var result = _this.storage[_this.count];
            delete _this.storage[_this.count];
            return result;
        };
        this.capacity = capa;
        this.storage = [];
        this.count = 0;
    }
    return Stack_ts;
}());
var stack_sample_ts = new Stack_ts(5);
stack_sample_ts.push("1");
stack_sample_ts.push(2);
stack_sample_ts.push("3");
console.log("after push on stack", stack_sample_ts.storage);
stack_sample_ts.pop();
console.log("after pop on stack", stack_sample_ts.storage);
var Queue_ts = /** @class */ (function () {
    function Queue_ts(capa) {
        var _this = this;
        this.enqueue = function (data) {
            if (_this.count >= _this.capacity) {
                console.log("the storage is full");
                return false;
            }
            _this.storage[_this.count] = data;
            _this.count++;
        };
        this.dequeue = function () {
            if (_this.count === 0) {
                console.log("the storage is empty");
                return false;
            }
            var result = _this.storage[0];
            delete _this.storage[0];
            for (var i = 0; i < _this.capacity - 2; i++) {
                _this.storage[i] = _this.storage[i + 1];
            }
            _this.count--;
            delete _this.storage[_this.count];
            return result;
        };
        this.capacity = capa;
        this.storage = [];
        this.count = 0;
    }
    return Queue_ts;
}());
var queue_sample_ts = new Queue_ts(5);
queue_sample_ts.enqueue({ name: "john", password: 1234 });
queue_sample_ts.enqueue({ name: "asher", password: 1234 });
queue_sample_ts.enqueue({ name: "tom", password: 1234 });
console.log("after enqueue on queue", queue_sample_ts.storage);
queue_sample_ts.dequeue();
console.log("after dequeue on queue", queue_sample_ts.storage);
