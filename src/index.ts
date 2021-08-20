import StackQueue from './stack-queue/stack_queue';
import Singleton from './design-pattern/singleton';
import Observer from './design-pattern/observer';

// StackQueue();
// Singleton();
Observer();


// map in ts
const map_sample = new Map<string, string>();

map_sample.set("name", "tom");
map_sample.set("age", "12");
map_sample.set("gender", "male");

console.log(map_sample);