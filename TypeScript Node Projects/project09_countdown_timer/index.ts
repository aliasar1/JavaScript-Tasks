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
  let rainbowTitle = chalkAnimation.rainbow("Welcome To Countdown Timer");
  await sleep();
  rainbowTitle.stop();
}

async function timer() {
  const ans = await inquirer.prompt([
    {
      type: "input",
      name: "duration",
      message: "Enter the timer duration in seconds:",
    },
  ]);

  const parsed = parseInt(ans.duration);
  if (!isNaN(parsed) && parsed > 0) {
    const duration = parsed;
    let seconds = duration;
    const intervalId = setInterval(() => {
      console.log(chalk.yellow(`${seconds} seconds left`));
      seconds--;
      if (seconds < 0) {
        clearInterval(intervalId);
        console.log(chalk.red("EXPIRED"));
        return;
      }
    }, 1000);
  } else {
    console.log(chalk.redBright("Please enter a valid number greater than 0."));
  }
}

await welcome();
await timer();
