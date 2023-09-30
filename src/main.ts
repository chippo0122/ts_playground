import './style.css';

const arr: Array<string> = ['123', '1332', '123'];

let greet: Function;
interface Person {
    name: string,
    age: number,
    hobbit?: string
};

const tom: Person = {
    name: 'tom',
    age: 26,
    hobbit: 'read'
}
const tim: Person = {
    name: 'tim',
    age: 20
}
const aurora: Person = {
    name: 'aurora',
    age: 28,
    hobbit: 'cycling'
}

greet = (user: Person) => {
    console.log(`Hi, i'm ${user.name}, i'm ${user.age} years old. ${user.hobbit ? `i hava a hobbit, it is ${user.hobbit}` : ""}`);
}

greet(tom);
greet(tim);
greet(aurora);