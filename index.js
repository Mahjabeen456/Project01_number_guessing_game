#! /usr/bin/env node
import inquirer from "inquirer";
console.log("guess a number between 1 to 10");
let a = Math.floor(Math.random() * 10);
while (true) {
    let input = await inquirer.prompt({
        name: "guess",
        type: "number",
        message: "Enter your guess"
    });
    let ans = input.guess;
    if (a == ans) {
        console.log("congratulation your guess is correct");
        break;
    }
    else {
        console.log("sorry try again");
    }
    if (a > ans) {
        console.log("hint: number is higher");
    }
    else {
        console.log("hint: number is lower");
    }
    console.log("Game is over");
}
