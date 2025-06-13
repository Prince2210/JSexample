sayHello(); // works
console.log(data); // undefined
console.log(data1); // Refrence Error initialization
greet(); // Refrence error /initialization
function sayHello() {
  console.log("Hello World");
}
var data = {
  name: "Prince",
  surname: "Chauhan",
};
let data1 = {
  name: "Prince",
  surname: "Chauhan",
};

const greet = () => {
  console.log("Greeting");
};
