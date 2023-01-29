#!/usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow("Let's start calculation");
    await sleep();
    rainbowTitle.stop();
}
async function askQuestion() {
    const ans = await inquirer.prompt([
        {
            type: "list",
            name: "operator",
            message: "Which operation you want to perform?",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        },
        {
            type: "number",
            name: "num1",
            message: "Enter first number: ",
        },
        {
            type: "number",
            name: "num2",
            message: "Enter second number: ",
        },
    ]);
    if (ans.operator == "Addition") {
        console.log(chalk.greenBright(`${ans.num1} + ${ans.num2} = ${ans.num1 + ans.num2}`));
    }
    else if (ans.operator == "Subtraction") {
        console.log(chalk.greenBright(`${ans.num1} - ${ans.num2} = ${ans.num1 - ans.num2}`));
    }
    else if (ans.operator == "Multiplication") {
        console.log(chalk.greenBright(`${ans.num1}  ${ans.num2} = ${ans.num1 * ans.num2}`));
    }
    else if (ans.operator == "Division") {
        console.log(chalk.greenBright(`${ans.num1} / ${ans.num2} = ${ans.num1 / ans.num2}`));
    }
}
async function startAgain() {
    do {
        await askQuestion();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Do you want to restart again? Press Y or N: ",
        });
    } while (again.restart == "y" || again.restart == "Y");
}
await welcome();
startAgain();
