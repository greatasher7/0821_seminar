const map_js = () => {
    
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
    john.gender = "male";
    console.log(john);
    console.log(john.age);
    
    
    // map - ts 확인해보기
    const asher = new Map;
    
    asher.set("name", "Asher");
    asher.set("age", 27);
    asher.set("roll", "frontend");
    asher.set("alive", true);
    
    console.log(asher);
    console.log(asher.get("age"));
}

export default map_js;