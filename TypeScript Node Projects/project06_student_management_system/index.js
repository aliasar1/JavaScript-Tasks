#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
let rollNumber = 1;
let studentList = [];
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    console.clear();
    let rainbowTitle = chalkAnimation.rainbow("Welcome to Student Management System");
    await sleep();
    rainbowTitle.stop();
}
async function addStudent() {
    const data = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter name of student: ",
        },
        {
            type: "input",
            name: "class",
            message: "Enter class of student: ",
        },
        {
            type: "input",
            name: "phone",
            message: "Enter phone number of student: ",
        },
    ]);
    if (data.name != null && data.class != null && data.phone != null) {
        studentList.push({
            name: data.name,
            rollNumber: rollNumber,
            class: data.class,
            phoneNumber: data.phone,
        });
        console.log(`Student added successfully with roll numer = ${rollNumber}.`);
        rollNumber++;
    }
    else {
        console.log(chalk.redBright(`Please provide all information!`));
    }
}
function checkRollNumber(rollNumber) {
    for (let i = 0; i < studentList.length; i++) {
        if (studentList[i].rollNumber == rollNumber) {
            return rollNumber;
        }
    }
    return -1;
}
async function updateStudent() {
    if (studentList.length == 0) {
        console.log(chalk.redBright(`No student exist!`));
        return;
    }
    const data = await inquirer.prompt([
        {
            type: "number",
            name: "rollNum",
            message: "Enter roll number of student to update: ",
        }
    ]);
    let rNum = checkRollNumber(data.rollNum);
    if (rNum != -1) {
        const selection = await inquirer.prompt([
            {
                type: "list",
                name: "option",
                message: "Select option:",
                choices: ["Update name", "Update class", "Update phone number"],
            }
        ]);
        if (selection.option == "Update name") {
            const ans = await inquirer.prompt([
                {
                    type: "input",
                    name: "name",
                    message: "Enter new name: ",
                }
            ]);
            studentList[rNum - 1].name = ans.name;
        }
        else if (selection.option == "Update class") {
            const ans = await inquirer.prompt([
                {
                    type: "input",
                    name: "class",
                    message: "Enter new class: ",
                }
            ]);
            studentList[rNum - 1].class = ans.class;
        }
        else if (selection.option == "Update phone number") {
            const ans = await inquirer.prompt([
                {
                    type: "input",
                    name: "phone",
                    message: "Enter new phone number: ",
                }
            ]);
            studentList[rNum - 1].phoneNumber = ans.phone;
        }
        console.log(`Student details updated successfully with roll numer = ${studentList[rNum - 1].rollNumber}.`);
    }
    else {
        console.log(chalk.redBright(`Student with this roll number does't exists.`));
    }
}
function deleteWithRollNum(rollNum) {
    studentList = studentList.filter(item => item.rollNumber !== rollNum);
}
async function deleteStudent() {
    if (studentList.length == 0) {
        console.log(chalk.redBright(`No student exist!`));
        return;
    }
    const data = await inquirer.prompt([
        {
            type: "number",
            name: "rollNum",
            message: "Enter roll number of student to update: ",
        }
    ]);
    let rNum = checkRollNumber(data.rollNum);
    if (rNum != -1) {
        deleteWithRollNum(rNum);
        console.log(`Student deleted successfully with roll numer = ${rNum}.`);
    }
    else {
        console.log(chalk.redBright(`Student with this roll number does't exists.`));
    }
}
async function viewAllStudents() {
    if (studentList.length == 0) {
        console.log(chalk.redBright(`No student exist!`));
        return;
    }
    for (let i = 0; i < studentList.length; i++) {
        console.log(chalk.blueBright(`Name: ${studentList[i].name}\nRoll Number: ${studentList[i].rollNumber}\nClass: ${studentList[i].class}\nPhone Number: ${studentList[i].phoneNumber}\n\n`));
    }
}
async function searchStudent() {
    if (studentList.length == 0) {
        console.log(chalk.redBright(`No student exist!`));
        return;
    }
    const ans = await inquirer.prompt([
        {
            type: "number",
            name: "rollNum",
            message: "Enter roll number to search student: "
        }
    ]);
    let rNum = checkRollNumber(ans.rollNum);
    if (rNum != -1) {
        for (let i = 0; i < studentList.length; i++) {
            if (studentList[i].rollNumber == rNum) {
                console.log(chalk.blueBright(`Name: ${studentList[i].name}\nRoll Number: ${studentList[i].rollNumber}\nClass: ${studentList[i].class}\nPhone Number: ${studentList[i].phoneNumber}\n`));
                return;
            }
        }
    }
    else {
        console.log(chalk.redBright(`Student with this roll number does't exists.`));
    }
}
async function mainMenu() {
    while (true) {
        const selected = await inquirer.prompt([
            {
                type: "list",
                name: "option",
                message: "Select option: ",
                choices: [
                    "Add Student",
                    "Update Student",
                    "Delete Student",
                    "View Students",
                    "Search Student",
                    "Exit",
                ],
            },
        ]);
        if (selected.option == "Add Student") {
            await addStudent();
        }
        else if (selected.option == "Update Student") {
            await updateStudent();
        }
        else if (selected.option == "Delete Student") {
            await deleteStudent();
        }
        else if (selected.option == "View Students") {
            await viewAllStudents();
        }
        else if (selected.option == "Search Student") {
            await searchStudent();
        }
        else if (selected.option == "Exit") {
            console.log(chalk.bgRedBright("System is closing! Bye.."));
            return;
        }
        console.clear();
    }
}
await welcome();
mainMenu();
