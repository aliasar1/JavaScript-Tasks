#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const exchangeRates = {
    USD: { USD: 1, PKR: 226.24374, INR: 82.748325, EUR: 0.93974126, GBP: 0.82736784 },
    PKR: { USD: 0.00442006, PKR: 1, INR: 0.36702946, EUR: 0.0041702345, GBP: 0.0036587484 },
    INR: { USD: 0.012086212, PKR: 2.732179, INR: 1, EUR: 0.0041702345, GBP: 0.011352094 },
    EUR: { USD: 1.0641592, PKR: 240.7404, INR: 88.055836, EUR: 1, GBP: 0.88042992 },
    GBP: { USD: 1.2090796, PKR: 273.55943, INR: 100.05348, EUR: 1.1358529, GBP: 1 },
};
function exchange(from, to, amount) {
    const rates = exchangeRates[from];
    const rate = rates[to];
    return rate * amount;
}
async function askQuestion() {
    const answers = await inquirer.prompt([
        {
            type: "list",
            name: "cur1",
            message: chalk.blackBright("Which currency do you want to convert from?"),
            choices: ["PKR", "INR", "USD", "EUR", "GBP"],
        },
        {
            type: "list",
            name: "cur2",
            message: chalk.blackBright("Which currency do you want to convert into?"),
            choices: ["PKR", "INR", "USD", "EUR", "GBP"],
        },
        {
            type: "input",
            name: "amountI",
            message: chalk.yellowBright("Enter the amount here!"),
            validate: (amountI) => {
                if (isNaN(Number(amountI))) {
                    return chalk.yellowBright("Please enter a valid number!");
                }
                return true;
            },
        },
    ]);
    const result = exchange(answers.cur1, answers.cur2, Number(answers.amountI));
    console.log(`${answers.cur1} ${chalk.greenBright(answers.amountI.toLocaleString("en-US"))}/- is equal to ${answers.cur2} ${chalk.green(result.toLocaleString("en-US"))}/-`);
}
async function startagain() {
    var again;
    do {
        await askQuestion();
        again = await inquirer
            .prompt({
            type: "input",
            name: "restart",
            message: "Do you want to restart again? Press Y or N: ",
        });
    } while (again.restart == 'y' || again.restart == 'Y');
}
startagain();
