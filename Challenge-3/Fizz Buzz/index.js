#!/usr/bin/env node

const chalk = require('chalk');
const figlet = require('figlet');
const ora = require('ora');
const colors = require('colors/safe');
const fs = require('fs');


var array = [];

for (var i = 1; i < 101; i++) {
  if (i % 15 == 0) array.push("FizzBuzz");
  else if (i % 3 == 0) array.push('Fizz');
  else if (i % 5 == 0) array.push("Buzz");
  else array.push(i);;
}

console.log(chalk.yellow(figlet.textSync('Fizz Buzz', { horizontalLayout: 'full' })));

console.log(colors.bold.underline('This console will print the play the fizz buzz from 1 to 100'))
console.log('');
const spinner = ora('Loading...').start();
setTimeout(() => { spinner.color = 'yellow'; spinner.text = 'Calculating...'; }, 1000);
setTimeout(() => { spinner.succeed(chalk.green('See below ↓')); }, 4000);

const myConsole = new console.Console(fs.createWriteStream('./output.txt'));

setTimeout(() => {
  console.log('');
  console.log(''); myConsole.log(array.join(' , '));
}, 5000);
