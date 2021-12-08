import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const { Confirm } = require('enquirer')

const prompt = new Confirm({
  name: 'question',
  message: 'Do you wish to continue ?'
})

export const confirmPrompt = async () => {
  const CONFIRMATION = await prompt.run()
  return CONFIRMATION
}
