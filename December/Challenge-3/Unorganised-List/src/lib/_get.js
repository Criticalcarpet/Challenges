import { createRequire } from 'module'
import path from 'path'
const require = createRequire(import.meta.url)
const fs = require('fs')
const __dirname = path.dirname(new URL(import.meta.url).pathname)

export const getFile = () => {
  const rawdata = fs.readFileSync(path.resolve(__dirname, '../../presents.json'))
  const student = JSON.parse(rawdata)
  return student
}
