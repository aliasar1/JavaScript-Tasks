#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
let name = "";
let enimeies = ["Panther", "GodZilla", "Kong"];
let initailHealthPlayer = 100;
let initailHealthEnemy = 100;
let initialAttacks = 5;
let initalHeals = 3;
let gameEnd = false;
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow("Welcome to Adventure Game!");
    await sleep();
    rainbowTitle.stop();
}
function generateRandomNumber(maxNum) {
    return Math.floor(Math.random() * maxNum) + 1;
}
async function attack() {
    let healthEffectedEnemy = generateRandomNumber(30);
    let healthEffectedPlayer = generateRandomNumber(15);
    initailHealthEnemy -= healthEffectedEnemy;
    initailHealthPlayer -= healthEffectedPlayer;
    initialAttacks -= 1;
    console.log(chalk(`${name} ATTACKED!! Enemy health is now ${initailHealthEnemy}.`));
    console.log(chalk(`Your health is now ${initailHealthPlayer} due to your own attacks effect.`));
    console.log(chalk(`Attacks left are ${initialAttacks}.`));
    if (initailHealthEnemy <= 0) {
        console.log(chalk.redBright(`Great! Your enemy died!`));
        gameEnd = true;
    }
    else if (initailHealthPlayer <= 0) {
        console.log(chalk.redBright(`You died because of the effect of your own attack!`));
        gameEnd = true;
    }
}
async function defend() {
    let healthEffectedEnemy = generateRandomNumber(30);
    let healthEffectedPlayer = generateRandomNumber(30);
    initailHealthEnemy -= healthEffectedEnemy;
    initailHealthPlayer -= healthEffectedPlayer;
    initialAttacks -= 1;
    if (initailHealthEnemy <= 0) {
        initailHealthEnemy = 0;
    }
    console.log(chalk(`Enemy health is now ${initailHealthEnemy}.`));
    if (initailHealthEnemy <= 0) {
        initailHealthEnemy = 0;
    }
    console.log(chalk(`ENEMY ATTACKED!! Your health is now ${initailHealthPlayer}.`));
    if (initailHealthEnemy <= 0) {
        console.log(chalk.redBright(`Great! Your enemy died because of its own attack effect!`));
        gameEnd = true;
    }
    else if (initailHealthPlayer <= 0) {
        console.log(chalk.redBright(`You died!!!`));
        gameEnd = true;
    }
}
async function heal() {
    let healed = generateRandomNumber(20);
    if (initailHealthPlayer >= 100) {
        console.log(chalk.green(`Your health is already full.`));
    }
    else {
        initailHealthPlayer += healed;
        initalHeals -= 1;
        if (initailHealthPlayer >= 100) {
            initailHealthPlayer = 100;
        }
        console.log(chalk.green(`Your health is now ${initailHealthPlayer}.`));
        console.log(chalk.green(`Total heals left now = ${initalHeals}.`));
    }
}
async function startGame() {
    let enemyIndex = generateRandomNumber(3);
    let enemy = enimeies[enemyIndex];
    console.log(chalk.blueBright(`Your enemy is ${enemy}!`));
    while (!gameEnd) {
        const ans = await inquirer.prompt([
            {
                type: "list",
                name: "type",
                message: "Select which move you want to make: ",
                choices: ["Attack", "Defend", "Heal", "Run"],
            },
        ]);
        if (ans.type == "Attack") {
            if (initialAttacks != 0) {
                await attack();
            }
            else {
                console.log(chalk.red(`No attacks left!`));
            }
        }
        else if (ans.type == "Defend") {
            await defend();
        }
        else if (ans.type == "Heal") {
            if (initalHeals != 0) {
                await heal();
            }
            else {
                console.log(chalk.red(`No heals left!`));
            }
        }
        else if (ans.type == "Run") {
            console.log(chalk.redBright(`You are coward! You ran away from your enemy!!`));
            return;
        }
    }
}
async function playGame() {
    while (true) {
        const ans = await inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Enter your hero name: ",
            },
        ]);
        console.clear();
        if (ans.name.trim() == "") {
            console.log(chalk.redBright("Please enter your hero name first!"));
        }
        else {
            name = ans.name;
            console.log(chalk.greenBright(`Your hero name is ${name}! Be prepared..`));
            await startGame();
            initailHealthPlayer = 100;
            initailHealthEnemy = 100;
            initialAttacks = 5;
            initalHeals = 3;
            gameEnd = false;
            break;
        }
    }
}
async function askToPlay() {
    console.clear();
    await welcome();
    while (true) {
        const ans = await inquirer.prompt([
            {
                type: "list",
                name: "option",
                message: "Select option: ",
                choices: ["Play", "Exit"],
            },
        ]);
        if (ans.option == "Play") {
            await playGame();
        }
        else if (ans.option == "Exit") {
            console.log(chalk.blueBright(`GoodBye from ADVENTURE LAND!`));
            return;
        }
    }
}
askToPlay();
