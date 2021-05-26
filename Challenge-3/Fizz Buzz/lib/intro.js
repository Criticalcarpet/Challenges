const chalk = require('chalk');
const figlet = require('figlet');

function intro() {
    console.log(chalk.yellow(figlet.textSync('Fizz Buzz', { horizontalLayout: 'full' })));
console.log(chalk.blueBright('Please follow the below instructions'))
console.log('');

};

module.exports = intro;



