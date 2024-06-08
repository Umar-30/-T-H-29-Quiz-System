#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// wellcome message 
console.log(chalk.yellow.bold("\n \t WELCOME TO QUIZ SYSTEM \t"));
let score = 0;
//  Question 1
let quiz1 = await inquirer.prompt([
    {
        name: "question",
        type: "list",
        message: chalk.red("Q1: How do you create a list/ array of number in Typescript?"),
        choices: ["let num:number[] = [1,2,3,]", "let num:str[] = [1,2,3]", "let num = {1,2,3,}", "let num = '1,2,3'"]
    }
]);
if (quiz1.question == "let num:number[] = [1,2,3,]") {
    console.log(chalk.magenta("Your answer is Correct!"));
    ++score;
}
else {
    console.log(chalk.blueBright("Incorrect answer!"));
}
// Question 2
let quiz2 = await inquirer.prompt([
    {
        name: "question",
        type: "list",
        message: chalk.red("Q2: Hoe do you access the 1st element of array in Typescript?"),
        choices: ["array[0]", "array[1]", "array.first", "array(0)"]
    }
]);
if (quiz2.question == "array[0]") {
    console.log(chalk.magenta("Your answer is Correct!"));
    ++score;
}
else {
    console.log(chalk.blueBright("Incorrect answer!"));
}
// Question 3
let quiz3 = await inquirer.prompt([
    {
        name: "question",
        type: "list",
        message: chalk.red("Q3: Which method of Inquirer.js is used to stsrt the prompt interface and receive user input?"),
        choices: ["start()", "prompt()", "init()", "run()"]
    }
]);
if (quiz3.question == "prompt()") {
    console.log(chalk.magenta("Your answer is Correct!"));
    ++score;
}
else {
    console.log(chalk.blueBright("Incorrect answer!"));
}
// Question 4
let quiz4 = await inquirer.prompt([
    {
        name: "question",
        type: "list",
        message: chalk.red("Q4: Which operator is commonly used for string concatenation in Typescript?"),
        choices: ["+", "-", ";", ":"]
    }
]);
if (quiz4.question == "+") {
    console.log(chalk.magenta("Your answer is Correct!"));
    ++score;
}
else {
    console.log(chalk.blueBright("Incorrect answer!"));
}
// Question 5
let quiz5 = await inquirer.prompt([
    {
        name: "question",
        type: "list",
        message: chalk.red("Q5: Which of the following characters is commonly allowed in variable names in Typescript?"),
        choices: ["$", "@", "&", "|"]
    }
]);
if (quiz5.question == "$") {
    console.log(chalk.magenta("Your answer is Correct!"));
    ++score;
}
else {
    console.log(chalk.blueBright("Incorrect answer!"));
}
//output condition 
if (score >= 4) {
    console.log(chalk.magenta(`your points: ${score}`));
    console.log(chalk.bgCyan("Congratulation!"));
}
else {
    console.log(chalk.bgCyan("you loss! Try again"));
}
