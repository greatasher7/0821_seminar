
// array
const tom = ["Tom", 27, "frontend", true];
console.log(tom);
console.log(tom[1]);


// object
const john = {
    name: "John",
    age: 27,
    roll: "frontend",
    alive: true
}
console.log(john);
console.log(john.age);

// map - ES6 spec
const asher = new Map;

asher.set("name", "Asher");
asher.set("age", 27);
asher.set("roll", "frontend");
asher.set("alive", true);

console.log(asher);
console.log(asher.get("age"));

// set
const names = new Set([1,2,3,4,5,5]);

names.add(5);

console.log(names);

// obfect 대비 map 장점
// key에 다양한 데이터타입 / 크기를 쉽게 얻음 / 