//Q2:
var personName = 'Asharib';
console.log('hello', personName, 'would you like to learn some TypeScript today?');
//Q3:
var person_name = 'asharib';
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());
//Q4:
console.log("Albert Einstein once said, “A person who never made a mistake never tried anything new.”");
//Q5:
var famous_person = "Albert Einstein";
var Message = "once said,'A person who never made a mistake never tried anything new.'";
console.log(famous_person, Message);
//Q6,Q10:
//date:9-March-24
var whiteSpace = '\n\t Asharaib\t\n'; //\n is used for new line and \t is used fow whitespaace
console.log(whiteSpace);
var whithoutwhiteSpace = whiteSpace.trim();
console.log(whithoutwhiteSpace);
//Q7,Q8:
console.log(4 + 4);
console.log(10 - 2);
console.log(2 * 4);
console.log(16 / 2);
//Q9:
var favouriteNumber = 9;
console.log('My favourite number is', favouriteNumber);
//Q11,Q12:
var friend_names = ["Sadia", "Fariha", "Diya"];
for (var _b = 0, friend_names_1 = friend_names; _b < friend_names_1.length; _b++) {
    var name_1 = friend_names_1[_b];
    console.log("hello".concat(name_1, ",would you like to learn some TypeScript today?"));
}
//Q13:
var motorcycles = ["Honda", "Yamaha", "Kawasaki", "Suzuki", "Ducati"];
motorcycles.forEach(function (motorcycle) { console.log("I would like to own a ".concat(motorcycle, " motorcycle.")); });
// Q14:
var guest_list = ["Albert Einsten", "Leornado da Vinci", "Marie Curie"];
guest_list.forEach(function (person) {
    console.log("Dear".concat(person, ", You are cordially invited to dinner at my place."));
});
//Q15:
var guestlist = ["Albert Einsten", "Leornado da Vinci", "Marie Curie"];
var unableToAttendIndex = "Marie Curie";
console.log("".concat(unableToAttendIndex, " can't make it dinner."));
var newGuest = "Nikola Tesla";
guestlist.forEach(function (person) {
    console.log("Dear".concat(person, ", You are cordially invited to dinner at my place."));
});
//Q16:
var GuestList = ["Albert Einsten", "Leornado da Vinci", "Marie Curie", "Nikola Tesla"];
console.log("Great news! We found a big dinner tsble.");
GuestList.unshift("Isac Newton");
var middleIndex = Math.floor(GuestList.length / 2);
GuestList.splice(middleIndex, 0, "Galileo Galilei");
GuestList.push("Stephen Hawking");
GuestList.forEach(function (person) {
    console.log("Dear ".concat(person, ", You are cordially invited to dinner at my place."));
});
//Q17:
var guestlist1 = ["Albert Einsten", "Leornado da Vinci", "Marie Curie", "Nikola Tesla", "Isac Newton", "Galileo Galilei", "Stephen Hawking"];
console.log("Unfortunately, due to unforseen circumstaances, We can only invite two people for dinner");
while (guestlist1.length > 2) {
    var removedGuest = guestlist1.pop();
    console.log("Sorry ".concat(removedGuest, " , We can't invite you to dinner."));
}
guestlist1.forEach(function (person) { console.log("Dear ".concat(person, ", \nYou are still cordially invited to dinner. Please join us for evening of great food and simulting conversation.\n")); });
guestlist1.pop();
guestlist1.pop();
console.log("Uptaded guest list:", guestlist1);
//Q18;
var placesToVisit = ["Egypt", "Dubai", "London", "Turkey", "Iceland"];
console.log("Original order:", placesToVisit);
console.log("Alphabetical order:", __spreadArray([], placesToVisit, true).sort());
console.log("Still in original order:", placesToVisit);
console.log("Reverse alphabetical order:", __spreadArray([], placesToVisit, true).sort().reverse());
console.log("Still in original order:", placesToVisit);
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);
placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);
placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted in reverse alphabetical order:", placesToVisit);
//Q19:
var guestList = ["Albert Einstein", "Leonardo da Vinci", "Marie Curie", "Nikola Tesla"];
console.log("You are inviting ".concat(guestList.length, " people to dinner."));
guestList.forEach(function (person) { console.log("Dear ".concat(person, ", You are cordially invited to dinner. Please join us for an evening of great food and stimulating conversation.")); });
//Q20:
var Fruits = ["Apple", "Banana", "Orange", "Grape", "Pineapple", "Strawberry", "Watermelon"];
console.log("List of fruits:", Fruits);
//Q21:
var car1 = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "Silver"
};
var car2 = {
    make: "Honda",
    model: "Civic",
    year: 2018,
    color: "Blue"
};
var car3 = {
    make: "Ford",
    model: "Mustang",
    year: 2021,
    color: "Red"
};
console.log("Car 1:", car1);
console.log("Car 2:", car2);
console.log("Car 3:", car3);
//Q22:
var fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[3]);
console.log(fruits[1]);
console.log("List of fruits:", fruits);
//Q23:
var Car = 'subaru';
var Age = 25;
var isRaining = true;
var day = 'Monday';
var temperature = 20;
console.log("Is Car == 'subaru'? I predict True.");
console.log(car == 'subaru');
console.log("Is Age >= 25? I predict True.");
console.log(age >= 25);
console.log("Is it raining? I predict True.");
console.log(isRaining);
console.log("Is it not Sunday? I predict True.");
console.log(day != 'Sunday');
console.log("Is temperature < 20? I predict True.");
console.log(temperature < 20);
console.log("Is Car != 'ford'? I predict False.");
console.log(car != 'ford');
console.log("Is Age < 21? I predict False.");
console.log(age < 21);
console.log("Is it not raining? I predict False.");
console.log(isRaining);
console.log("Is it Sunday? I predict False.");
console.log(day == 'Sunday');
console.log("Is temperature > 25? I predict False.");
console.log(temperature > 25);
//Q24:
var string1 = 'apple';
var string2 = 'banana';
var number1 = 10;
var number2 = 20;
var array = ['apple', 'banana', 'orange'];
console.log("Test for equality with strings: 'apple' == 'banana'? Prediction: False.");
console.log(string1 == string2);
console.log("Test for inequality with strings: 'apple' != 'banana'? Prediction: True.");
console.log(string1 != string2);
console.log("Test using lowercase function: 'APPLE' converted to lowercase is 'apple'. Prediction: True.");
console.log(string1.toLowerCase() === 'apple');
console.log("Numerical test: 10 < 20? Prediction: True.");
console.log(number1 < number2);
console.log("Numerical test: 20 >= 10? Prediction: True.");
console.log(number2 >= number1);
console.log("Test using 'and' operator: 10 < 20 and 'apple' == 'apple'? Prediction: True.");
console.log(number1 < number2 && string1 == 'apple');
console.log("Test using 'or' operator: 10 < 5 or 'banana' == 'apple'? Prediction: False.");
console.log(number1 < 5 || string2 == 'apple');
//Q25:
//Version 1: Passes the if test (alien's color is green)
var alien_color1 = 'green';
if (alien_color1 === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
//Version 2: Fails the if test (alien's color is not green)
var AleinColor1 = 'red';
if (alien_color1 === 'green') { }
//Q26:
//Version 1: Runs the if block (alien's color is green)
var alien_color2 = 'green';
if (alien_color2 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else {
    console.log("Congratulations! You just earned 10 points for shooting the alien.");
}
//Version 2: Runs the else block (alien's color is not green)
var AleinColor2 = 'red';
if (alien_color2 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else {
    console.log("Congratulations! You just earned 10 points for shooting the alien.");
}
//Q27:
//Version 1: Alein is green
var alien_color3 = 'green';
if (alien_color3 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if (alien_color3 === 'yellow')
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
else if (alien_color3 === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
//Version 2: Alein is yellow
var alienColor = 'yellow';
if (alienColor === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if (alienColor === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}
else if (alienColor === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
//Version 3: Alein is red
var AlienColor = 'red';
if (AlienColor === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if (AlienColor === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}
else if (AlienColor === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
//Q28:
var age1 = 30;
if (age1 < 2) {
    console.log("The person is a baby.");
}
else if (age1 >= 2 && age1 < 4) {
    console.log("The person is a toddler.");
}
else if (age1 >= 4 && age1 < 13) {
    console.log("The person is a kid.");
}
else if (age1 >= 13 && age1 < 20) {
    console.log("The person is a teenager.");
}
else if (age1 >= 20 && age1 < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
//Q29:
var favorite_fruits = ["apple", "banana", "strawberry"];
if (favorite_fruits.includes("apple")) {
    console.log("You really like apples!");
}
if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes("orange")) {
    console.log("You really like oranges!");
}
if (favorite_fruits.includes("strawberry")) {
    console.log("You really like strawberries!");
}
if (favorite_fruits.includes("kiwi")) {
    console.log("You really like kiwis!");
}
//Q30:
var usernames = ["admin", "Alice", "Bob", "Charlie", "David"];
usernames.forEach(function (username) {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
});
//Q31:
var age = 25;
var users = ["Alice", "Bob", "Charlie"];
if (users.length === 0) {
    console.log("We need to find some users!");
}
else {
    if (age < 2) {
        console.log("The person is a baby.");
    }
    else if (age >= 2 && age < 4) {
        console.log("The person is a toddler.");
    }
    else if (age >= 4 && age < 13) {
        console.log("The person is a kid.");
    }
    else if (age >= 13 && age < 20) {
        console.log("The person is a teenager.");
    }
    else if (age >= 20 && age < 65) {
        console.log("The person is an adult.");
    }
    else {
        console.log("The person is an elder.");
    }
}
//Q32:
var current_users = ["john", "alice", "bob", "charlie", "emma"];
var new_users = ["jane", "emma", "sarah", "charlie", "mike"];
for (var i = 0; i < new_users.length; i++) {
    var new_username_lower = new_users[i].toLowerCase();
    if (current_users.map(function (user) { return user.toLowerCase(); }).includes(new_username_lower)) {
        console.log("Sorry, the username '".concat(new_users[i], "' is already taken. Please enter a new username."));
    }
    else {
        console.log("Congratulations! The username '".concat(new_users[i], "' is available."));
    }
}
//Q33:
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number === 1) {
        console.log("".concat(number, "st"));
    }
    else if (number === 2) {
        console.log("".concat(number, "nd"));
    }
    else if (number === 3) {
        console.log("".concat(number, "rd"));
    }
    else {
        console.log("".concat(number, "th"));
    }
}
//Q34:
var favorite_pizzas = ["Pepperoni", "Margherita", "BBQ Chicken"];
console.log("Printing pizza names:");
for (var i = 0; i < favorite_pizzas.length; i++) {
    console.log(favorite_pizzas[i]);
}
console.log("\nPrinting statements about favorite pizzas:");
for (var i = 0; i < favorite_pizzas.length; i++) {
    console.log("I like ".concat(favorite_pizzas[i], " pizza."));
}
console.log("\nI really love pizza!");
//Q35:
function makeShirt(size, message) {
    console.log("A ".concat(size, "-sized shirt will be printed with the message: \"").concat(message, "\"."));
}
makeShirt('medium', 'Hello, World!');
//Q36:
function makeShirt1(size, message) {
    console.log("A ".concat(size, "-sized shirt will be printed with the message: \"").concat(message, "\"."));
}
make_shirt('large', 'I love TypeScript!');
//Q37:
function MakeShirt(size, message) {
    if (size === void 0) { size = 'large'; }
    if (message === void 0) { message = 'I love TypeScript!'; }
    console.log("A ".concat(size, "-sized shirt will be printed with the message: \"").concat(message, "\"."));
}
MakeShirt();
MakeShirt('medium');
MakeShirt('small', 'JavaScript is fun!');
//Q38:
function describeCity(city, country) {
    if (country === void 0) { country = 'Unknown'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describeCity('Karachi', 'Pakistan');
describeCity('New York', 'USA');
describeCity('Tokyo');
//Q39:
function cityCountry(city, country) {
    return "".concat(city, ", ").concat(country);
}
var city1 = cityCountry('Lahore', 'Pakistan');
var city2 = cityCountry('Paris', 'France');
var city3 = cityCountry('Tokyo', 'Japan');
console.log(city1);
console.log(city2);
console.log(city3);
//Q40:
function makeAlbum(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks !== undefined) {
        album = tracks;
    }
    return album;
}
var album1 = make_album('Taylor Swift', 'Fearless');
var album2 = make_album('Ed Sheeran', 'Divide', 16);
var album3 = make_album('Beyoncé', 'Lemonade', 12);
console.log(album1);
console.log(album2);
console.log(album3);
//Q41:
function showMagicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
var magician_names = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
showMagicians(magician_names);
//Q42:
var magicians = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];
function makeGreat(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great ".concat(magicians[i]);
    }
}
function showMagicians1(magicians) {
    for (var _b = 0, magicians_1 = magicians; _b < magicians_1.length; _b++) {
        var magician = magicians_1[_b];
        console.log(magician);
    }
}
makeGreat(magicians);
showMagicians1(magicians);
//Q43:
function makeGreat1(magicians) {
    var great_magicians = [];
    for (var _b = 0, magicians_2 = magicians; _b < magicians_2.length; _b++) {
        var magician = magicians_2[_b];
        great_magicians.push("the Great ".concat(magician));
    }
    return great_magicians;
}
function showMagicians2(magicians) {
    for (var _b = 0, magicians_3 = magicians; _b < magicians_3.length; _b++) {
        var magician = magicians_3[_b];
        console.log(magician);
    }
}
var Magicians = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];
var great_magicians = make_great(__spreadArray([], Magicians, true));
console.log("Original Magicians:");
showMagicians2(Magicians);
console.log("\nGreat Magicians:");
showMagicians2(great_magicians);
//Q44:
function makeSandwich() {
    var items = [];
    for (var _b = 0; _b < arguments.length; _b++) {
        items[_b] = arguments[_b];
    }
    console.log("Making a sandwich with the following items:");
    for (var _c = 0, items_1 = items; _c < items_1.length; _c++) {
        var item = items_1[_c];
        console.log("- " + item);
    }
    console.log("Enjoy your sandwich!");
}
makeSandwich('ham', 'cheese', 'lettuce');
makeSandwich('turkey', 'bacon', 'avocado', 'tomato');
makeSandwich('peanut butter', 'jelly');
//Q45:
function storeCarInfo(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car_info = {
        manufacturer: manufacturer,
        model: model,
        options: {}
    };
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var option = options_1[_a];
        Object.assign(car_info.options, option);
    }
    return car_info;
}
var car = storeCarInfo("Toyota", "Camry", { color: "blue" }, { year: 2022 });
console.log(car);
