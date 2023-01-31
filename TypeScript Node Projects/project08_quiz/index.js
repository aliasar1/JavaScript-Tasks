#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
let score = 0;
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    console.clear();
    let rainbowTitle = chalkAnimation.rainbow("Welcome to quiz game!");
    await sleep();
    rainbowTitle.stop();
    console.log(chalk.red("NOTE: if your spelling is incorrect then it is considered as wrong answer"));
    await startAgain();
}
async function playGame() {
    const ans = await inquirer.prompt([
        {
            type: "list",
            name: "ques1",
            message: "What does CPU stand for?",
            choices: [
                "Central Processing Usage",
                "Central Processing Unit",
                "Central Processing Users",
                "Central Processing Utility",
            ],
        },
        {
            type: "list",
            name: "ques2",
            message: "What does GPU stand for?",
            choices: [
                "Graphical Processing Unit",
                "Graphics Processing Usage",
                "Graphics Processing Users",
                "Graphics Processing Utility",
            ],
        },
        {
            type: "list",
            name: "ques3",
            message: "What does RAM stand for?",
            choices: [
                "Random Access Module",
                "Random Access Memory",
                "Random Access Message",
                "Random Access Method",
            ],
        },
        {
            type: "list",
            name: "ques4",
            message: "Who is the father of Computer science?",
            choices: [
                "LivingStone Jakob",
                "Charles Babbage",
                "Elon Musk",
                "Angela Kuma",
            ],
        },
        {
            type: "list",
            name: "ques5",
            message: "What does ROM stand for?",
            choices: [
                "Read Access Memory",
                "Read Access Module",
                "Read Only Memory",
                "Read Access Method",
            ],
        },
    ]);
    let question_no = 5;
    if (ans.ques1 == "Central Processing Unit") {
        score += 1;
    }
    if (ans.ques2 == "Graphical Processing Unit") {
        score += 1;
    }
    if (ans.ques3 == "Random Access Memory") {
        score += 1;
    }
    if (ans.ques4 == "Charles Babbage") {
        score += 1;
    }
    if (ans.ques5 == "Read Only Memory") {
        score += 1;
    }
    console.log(chalk.yellow(`\nNumber of questions: ${question_no}`));
    console.log(chalk.yellow(`Your score: ${score}`));
    const percentage = (score * 100) / question_no;
    console.log(chalk.yellow(`${percentage}% questions are correct.`));
}
async function startAgain() {
    do {
        score = 0;
        await playGame();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Do you want to try again? Press Y or N: ",
        });
    } while (again.restart == "y" || again.restart == "Y");
    console.log(chalk.yellow("Thankyou for playing our quiz game!"));
}
await welcome();
