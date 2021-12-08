import { createRequire } from 'module'
import path from 'path'
const require = createRequire(import.meta.url)
const { MultiSelect } = require('enquirer')
const fs = require('fs')
const __dirname = path.dirname(new URL(import.meta.url).pathname)
const clear = require('clear')

const prompt = new MultiSelect({
  name: 'value',
  message: 'Select the method(s) of showcase - \n (Press <space> to select, <a> to select all)',
  limit: 2,
  choices: [
    { name: 'Console', value: '#00ffff' },
    { name: 'JSON file', value: '#000000' }
  ]
})

export const promptRunner = async (resolved) => {
  const promptChoice = await prompt.run()
  console.log(promptChoice)
  if (!promptChoice.length) {
    clear()
    console.log('\nPlease select at least one method.')
    process.exit(1)
  }
  if (promptChoice.includes('Console')) {
    if (resolved.length > 10) {
      clear()
      console.log('\nThe resultant array is too long to display in console.\nPlease select another method.')
      return
    }
    console.log(resolved)
  } else if (promptChoice.includes('JSON file')) {
    clear()
    const filePath = path.join(path.resolve(__dirname), '../../showcase.json')
    fs.writeFileSync(filePath, JSON.stringify(resolved, null, 2))
    console.log(`\nThe resultant array has been saved to ${filePath}.`)
  }
}
