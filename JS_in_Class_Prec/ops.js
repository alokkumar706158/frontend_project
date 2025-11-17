class person {
    constructor(name,age){
        this.firstName = name;
        this.agg = age;
        this.birthYear = 2025 - age;
    }
    introduce() {
        console.log('hi my name is ${this.name}, and i am ${this.age} year old')
    }
}