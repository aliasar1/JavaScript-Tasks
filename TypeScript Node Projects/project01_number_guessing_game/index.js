#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
let random;
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow("Welcome to Number Guessing Game");
    await sleep();
    rainbowTitle.stop();
}
function getRandomNumber() {
    random = Math.floor(Math.random() * 100);
}
async function askGuess() {
    getRandomNumber();
    let count = 0;
    while (count < 5) {
        const guess = await inquirer.prompt([
            {
                type: "number",
                name: "answer",
                message: `Enter your guess from 0 - 100. You have ${5 - count} tries remaining: `,
            },
        ]);
        if (guess.answer == random) {
            console.log(chalk.greenBright(`You guess correctly. The answer is ${random}!`));
            return;
        }
        else if (guess.answer > random) {
            console.log(chalk.redBright(`Your guess is higher than the answer!`));
        }
        else if (guess.answer < random) {
            console.log(chalk.redBright(`Your guess is lower than the answer!`));
        }
        count++;
    }
    console.log(chalk.blueBright(`You lose! Better luck next time. Correct answer was ${random}`));
}
async function playAgain() {
    do {
        await askGuess();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Do you want to play again? Press Y or N: ",
        });
    } while (again.restart == "y" || again.restart == "Y");
}
await welcome();
playAgain();
