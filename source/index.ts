import { existsSync } from 'fs'
import { resolve } from 'path'

export default (cwd = process.cwd()) => existsSync(resolve(cwd, 'package.json'))
