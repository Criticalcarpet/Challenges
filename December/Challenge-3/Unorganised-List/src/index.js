
import { startIntro } from './lib/_start.js'
import { worker } from './lib/_worker.js'
import { getFile } from './lib/_get.js'
import { promptRunner } from './lib/_ask.js'
import { confirmPrompt } from './lib/_accept.js'

/*
=> Create a File named 'presents.json' in the root of the project containing your desired data.
=> See README.md for more info.
*/

const execute = async () => {
  await startIntro()
  setTimeout(async () => {
    const student = await getFile()
    const RESULT = await worker(student, 'age')
    await promptRunner(RESULT)
  }, 100)
  return Promise.resolve('DONE')
}
(async () => {
   await execute()
  const RENDERERD = await confirmPrompt()
  console.log(RENDERERD)
})()
