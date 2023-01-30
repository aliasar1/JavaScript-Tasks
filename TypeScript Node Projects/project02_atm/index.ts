#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const accNum = "11000";
const pin = "1234";

let balance = 5000;
const accounts = [
  {
    accountNum: "12345",
    name: "Huzaifa Khan",
    currentBalance: 2000,
  },
  {
    accountNum: "54321",
    name: "Ahmed Kamran",
    currentBalance: 1000,
  },
  {
    accountNum: "56789",
    name: "Moosa Ali",
    currentBalance: 4000,
  },
];
let logout = false;

const sleep = () => {
  return new Promise((res) => {
    setTimeout(res, 2000);
  });
};

async function welcome() {
  console.clear();
  let rainbowTitle = chalkAnimation.rainbow("Welcome to ATM");
  await sleep();
  rainbowTitle.stop();
}

async function withdraw() {
  console.clear();
  const amount = await inquirer.prompt([
    {
      type: "number",
      name: "money",
      message: "Enter how much amount you want to withdraw: ",
    },
  ]);

  if (amount.money <= balance) {
    balance = balance - amount.money;
    console.log(
      chalk.greenBright(
        `Withdrawing ${amount.money} from account. Your new balance is ${balance}.`
      )
    );
  } else {
    console.log(
      chalk.redBright(
        `Insufficient balance in account to withdraw. Your current balance is ${balance}.`
      )
    );
  }
}

function checkAccount(accountNum: string) {
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].accountNum == accountNum) {
      return i;
    }
  }
  return -1;
}

async function transfer() {
  console.clear();
  const person = await inquirer.prompt([
    {
      type: "input",
      name: "accountName",
      message: "Enter account number in which you want to transfer money: ",
    },
  ]);

  let id = checkAccount(person.accountName);
  if (id != -1) {
    const amount = await inquirer.prompt([
      {
        type: "number",
        name: "money",
        message: `Enter amount you want to transfer money to ${accounts[id].name}: `,
      },
    ]);

    if (amount.money <= balance) {
      balance = balance - amount.money;
      console.log(
        chalk.greenBright(
          `Tranferring ${amount.money} from your account to to ${accounts[id].name}. Your new balance is ${balance}.`
        )
      );
    } else {
      console.log(
        chalk.redBright(
          `Insufficient balance in account to transfer. Your current balance is ${balance}.`
        )
      );
    }
  } else {
    console.log(chalk.redBright(`This account doesn't exits.`));
  }
}

async function mainMenu() {
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "option",
      message: "Select any option: ",
      choices: ["View Balance", "Withdraw Money", "Transfer Money", "Logout"],
    },
  ]);

  if (answer.option == "View Balance") {
    console.log(chalk.greenBright(`Your account balance is ${balance}.`));
  } else if (answer.option == "Withdraw Money") {
    await withdraw();
  } else if (answer.option == "Transfer Money") {
    await transfer();
  } else if (answer.option == "Logout") {
    logout = true;
    return;
  }
}

async function start() {
  console.clear();
  do {
    await mainMenu();
  } while (!logout);
  main();
}

async function login() {
  console.clear();
  let tries = 3;
  let failed = false;
  while (tries > 0) {
    const credential = await inquirer.prompt([
      {
        type: "input",
        name: "accNum",
        message: "Enter your account number: ",
      },
      {
        type: "input",
        name: "accPin",
        message: "Enter your account pin: ",
      },
    ]);

    if (credential.accNum == accNum && credential.accPin == pin) {
      failed = false;
      start();
      break;
    } else {
      if (tries > 1) {
        console.log(
          chalk.redBright("Invalid account number or pin! Try again..")
        );
      }
      failed = true;
    }
    tries--;
  }

  if (failed) {
    console.log(
      chalk.redBright(
        "You failed to enter correct account number and pin for 3 times.\nSystem closing. Bye!"
      )
    );
  }
}

async function main() {
  console.clear();
  await welcome();
  const selection = await inquirer.prompt([
    {
      type: "list",
      name: "option",
      message: "Select option: ",
      choices: ["Login", "Exit"],
    },
  ]);

  if (selection.option == "Login") {
    login();
  } else if (selection.option == "Exit") {
    console.log(chalk.redBright("System closing. Bye!"));
  }
}

main();
