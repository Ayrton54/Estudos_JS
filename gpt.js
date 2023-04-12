function greet(person) {
    return "Hello, ".concat(person.name, "! You are ").concat(person.age, " years old.");
}
var john = { name: 'John', age: 30 };
console.log(greet(john));
