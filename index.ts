#! /usr/bin/env node

import inquirer from "inquirer"


// 1) computer will generate a random number 

// 2) user input for guessing number - done 

// 3) compare user input with computer generated number and show result - done


const randomNumber = Math.floor(Math.random() * 10  + 1);

const answer = await inquirer . prompt([
    {
        name : "userguessedNuber",
        type : "number",
        message : "please guess a number between 1-10:",
    },
]);

if(answer.userguessedNuber === randomNumber){
    console.log("Congtratulational you guessed right number.")
}else {
    console.log("You guessed wrong number.")
} 