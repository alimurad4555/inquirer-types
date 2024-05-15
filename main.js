"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
//1- input prompt
var answer = await inquirer_1.default.prompt([
    {
        type: 'input',
        name: 'yourname',
        message: 'what is your name'
    }
]);
console.log(answer.yourname);
//2- list prompt
var askfruit = await inquirer_1.default.prompt([
    {
        type: 'list',
        name: 'fruit',
        message: 'what is your fiverit fruit',
        choices: ["apple.bana.mango.lichi"]
    }
]);
console.log(askfruit.fruit);
var myCalcuilater = await inquirer_1.default.prompt([
    {
        type: "list",
        name: 'opersion',
        message: 'what operison you went to perfom',
        choices: ["add. subtrcat. multiply. adision"]
    },
    {
        type: 'number',
        name: 'num1',
        message: 'enter first number'
    },
    {
        type: 'number',
        name: 'num2',
        message: 'enter other number'
    },
]);
if (myCalcuilater.operison === 'add') {
    console.log(myCalcuilater.num1 + myCalcuilater.num2);
}
else if (myCalcuilater.operison === 'sutrcat') {
    console.log("the difrant off your number ".concat(myCalcuilater.num1 - myCalcuilater.num2));
}
else if (myCalcuilater.operison === 'multiply') {
    console.log("the product off your number ".concat(myCalcuilater.num1 * myCalcuilater.num2));
}
else {
    console.log("the quotinat of ".concat(myCalcuilater.num1, " and ").concat(myCalcuilater.num2, " is ").concat(myCalcuilater.num1 / myCalcuilater.num2));
}
//3- checkbox promt
var pizzBuy = await inquirer_1.default.prompt([
    {
        type: 'checkbox',
        name: 'falavoer',
        message: 'tell use your falavoer',
        choices: ["chines. japanes. pakistani"]
    }
]);
console.log('you have this falavoer oders', pizzBuy.falavoer);
var array = 'pizzBuy.falavoer';
console.log(array[0]);
//4- confiom prompt
var qualifican = await inquirer_1.default.prompt([
    {
        type: 'confirm',
        name: 'quali',
        message: 'are you graduatin'
    }
]);
console.log('your answer is ', qualifican.quali);
//5- password prompt
var passwordVar = await inquirer_1.default.prompt([
    {
        type: 'password',
        name: 'yourpass',
        message: 'Enter your password'
    }
]);
console.log(passwordVar.yourpass);
