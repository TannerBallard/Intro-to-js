

var age = 27

function getAgeInDogYears(humaneage) {
    var dogAge = humanAge * 7;
    return dogAge;
}


function sayHello(name) {
   var age = 23;
    alert("Hello, " + name + ". Your age is" + getAgeInDogYears(age) + ".");
    age = getAgeInDogYears(age);
}

sayHello("Tyler");
console.log(age);