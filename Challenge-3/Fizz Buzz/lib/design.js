const ora = require('ora');
const chalk = require('chalk');

function designIn() {
    const spinner = ora('Loading...').start();
setTimeout(() => { spinner.color = 'yellow'; spinner.text = 'Calculating...'; }, 1000);
setTimeout(() => { spinner.succeed(chalk.green('See below ↓')); }, 4000);
};

function designOut() {
    const spinner = ora('Loading...').start();
    setTimeout(() => { spinner.color = 'yellow'; spinner.text = 'Calculating...'; }, 1000);
    setTimeout(() => { spinner.succeed(chalk.green('output.txt file has been created...')); }, 4000);
}

function designboth() {
    const spinner = ora('Loading...').start();
    setTimeout(() => { spinner.color = 'yellow'; spinner.text = 'Calculating...'; }, 1000);
    setTimeout(() => { spinner.succeed(chalk.green('See below ↓ and the output.txt file')); }, 3000);
};

module.exports = {designIn, designOut, designboth};