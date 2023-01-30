#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";


const task: string[] = [];

async function main() {
    console.log(chalk.green("Welcome to your Todo App!\n"));
    console.log(chalk.green("Please Enter your Name: "));

    const name = await inquirer.prompt({
        type: 'input',
        name: 'name',
        message: 'Enter your name:',
    });

    console.log(chalk.green(`Hello ${name.name}`));

    let choice = null;

    do {
        console.log(chalk.green("Please choose an option\n"));
        console.log(chalk.green("1. Enter a task "));
        console.log(chalk.green("2. Remove a task "));
        console.log(chalk.green("3. Update a task "));
        console.log(chalk.green("4. List all tasks "));
        console.log(chalk.green("5. Exit"));

        choice = await inquirer.prompt({
            type: 'input',
            name: 'choice',
            message: 'Enter your choice:',
        });

        switch (choice.choice) {
            case '1':
                const newTask = await inquirer.prompt({
                    type: 'input',
                    name: 'task',
                    message: 'Enter a task:',
                });
                task.push(newTask.task);
                break;
            case '2':
                const removeTask = await inquirer.prompt({
                    type: 'input',
                    name: 'task',
                    message: 'Enter the task you want to remove:',
                });
                const index = task.indexOf(removeTask.task);
                if (index > -1) {
                    task.splice(index, 1);
                }
                break;
            case '3':
                const updateTask = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'task',
                        message: 'Enter the task you want to update:',
                    },
                    {
                        type: 'input',
                        name: 'updatedTask',
                        message: 'Enter the updated task:',
                    },
                ]);
                const taskIndex = task.indexOf(updateTask.task);
                if (taskIndex > -1) {
                    task[taskIndex] = updateTask.updatedTask;
                }
                break;
            case '4':
                console.log(chalk.green(`Tasks: ${task}`));
                break;
            case '5':
                console.log(chalk.green('Bye!'));
                break;
        }
    } while (choice.choice !== '5');
}

main();