import { existsSync } from 'fs'
import { resolve } from 'path'

export default (cwd?: string) => existsSync(resolve(cwd || process.cwd(), 'package.json'))
