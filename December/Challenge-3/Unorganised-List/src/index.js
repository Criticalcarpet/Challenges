
import { startIntro } from './lib/_start.js'
import { worker } from './lib/_worker.js'
import { getFile } from './lib/_get.js'
import { promptRunner } from './lib/_ask.js'
import chalk from 'chalk'

/*
=> Create a File named 'presents.json' in the root of the project containing your desired data.
=> See README.md for more info.
*/

(async () => {
  const DONE = await startIntro()
  console.log(DONE)
  const student = await getFile()
  const RESULT = await worker(student, 'age')
  await promptRunner(RESULT)
  console.log(chalk.yellowBright('💖 Thank you for using my script! 💖'))
})()
