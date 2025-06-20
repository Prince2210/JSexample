const person = {
  name: "Alice",
  greet: function (city, country) {
    console.log(`Hello, I'm ${this.name} from ${city}, ${country}`);
  },
};
person.greet("Delhi", "India");

let anotherPersoon = { name: "Prince" };

person.greet.call(anotherPersoon, "Delhi", "India");
person.greet.apply(anotherPersoon, ["Delhi", "India"]);
person.greet.bind(anotherPersoon, "Berlin", "Germany")();
