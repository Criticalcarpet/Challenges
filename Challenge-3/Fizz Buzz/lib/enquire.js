const { Select } = require('enquirer');
const { designIn, designOut, designboth } = require('./design')
const {calculate, calculateOut} = require('./calculate');

function ask() {
  const prompt = new Select({
    name: 'color',
    message: 'Where should the result be printed ?',
    choices: ['Only Console', 'In a text file(output.txt)', 'Both']
  });
   
  prompt.run()
  .then(answer => {
      if (answer == 'Only Console') {
        designIn();
        setTimeout(() => {
          calculate();
        }, 4000);

      } else if (answer == 'In a text file(output.txt)') {
        designOut();
        setTimeout(() => {
          calculateOut();
        }, 4000);

      } else if (answer == 'Both') {
        designboth();
        setTimeout(() => {
          calculate();  
          calculateOut();
        }, 4000);

      }
    })
    .catch(console.error);
};

module.exports = ask;