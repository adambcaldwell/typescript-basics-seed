/**
 * The following code will still execute successfully even though the following errors are reported:
 * - TypeScript compile error TS7006: Parameter 'value' implicitly has an 'any' type
 * - TypeScript compile error TS7019: Rest Parameter 'arr' implicitly has an 'any[]' type
 * - TypeScript compile error TS7031: Binding element 'name' implicitly has an 'any' type
 */

console.log('\n- - - Hello World - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ');
console.log('Hello TypeScript!');

// - - - Arrow Functions & implicit returns - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
console.log('\n- - - Arrow Functions & implicit returns - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -');
const pizzas = [
  {
    name: 'Pepperoni',
    toppings: ['pepperoni']
  }
];

const mappedPizzas = pizzas.map(pizza => pizza.name.toUpperCase());

console.log(mappedPizzas);

const pizza = {
  name: 'El Diablo',
  getName: function() {
    console.log(this.name);
  }
};

pizza.getName();

// - - - Default Function Parameters - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
console.log('\n- - - Default Function Parameters - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ');
function multiply(a: number, b = 25) {
  return a * b;
}

console.log(multiply(5));
console.log(multiply(5, 35));

// - - - Object literal improvements - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
console.log('\n- - - Object literal improvements - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ');
const pizzaObject = {
  name: 'Pepperoni',
  price: 15,
  getName() {
    console.log(this.name);
  }
};

const toppings = ['Pepperoni'];

function createOrder(pizza, toppings) {
  return { pizzaObject, toppings };
}

console.log(createOrder(pizzaObject, toppings));

// - - - REST Parameters - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
console.log('\n- - - REST Parameters - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ');
function sumAll(message, ...arr) {
  console.log(arguments);
  // next 2 log statements should log the same thing
  console.log(arguments[0]);
  console.log(message);

  return arr.reduce((prev, next) => prev + next);
}

const sum = sumAll('Hello!', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(sum);

// - - - Array Spread Operator - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
console.log('\n- - - Array Spread Operator - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ');
const toppings2 = ['bacon', 'chili'];

const newToppings = ['pepperoni'];
const allToppings = [...toppings2, ...newToppings];

console.log(allToppings);

// - - - Destructuring Arrays and Object - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
console.log('\n- - - Destructuring Arrays and Objects - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -');

const pizza3 = {
  name: 'pizza',
  toppings: ['pepperoni']
};

function order2({ name: pizzaName, toppings: pizzaToppings }) {
  console.log(pizzaName, pizzaToppings);
}

const { pizzaName } = order2(pizza3);

const toppings3 = ['pepperoni', 'bacon', 'chili'];

const [first, second, third] = toppings3;

console.log(first, second, third);

// function([]: any) is implementing a TypeScript type - to prevent an error
function logToppings([first, second, third]: any) {
  console.log(first, second, third);
}

logToppings(toppings3);
