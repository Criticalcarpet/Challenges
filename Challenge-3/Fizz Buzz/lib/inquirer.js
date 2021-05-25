const { Select } = require('enquirer');
 
const prompt = new Select({
  name: 'color',
  message: 'Wher should the result be printed ?',
  choices: ['Only Console', 'In a text file', 'Both']
});
 
prompt.run()
.then(answer => {
    if (answer == 'Only Console') {
      console.log('Correct!');
    } else if (answer == 'In a text file') {
      console.log('Wrong!');
    } else if (answer == 'Both') {
        console.log('dodo');
    }
  })
  .catch(console.error);