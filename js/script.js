var pizza = {
    crushType: "Sicilian",
    sauceType: "Spicy red",
    cheeses: "Provolone",
    toppings: ["broccolini", "olives", "anchovies"]
};

console.log(pizza);

function pizzaOven(crushType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crushType = crushType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
console.log(pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);

var pizza3 = pizzaOven("Sicilian", "tomatoe", "Provolone", ["pinnaple", "spinach", "coconut"]);
console.log(pizza3);

var pizza4 = pizzaOven("Pasta gruesa", "Salsa Tomate", "Mozzarella", ["hongos", "piña", "coconut"]);
console.log(pizza4);

