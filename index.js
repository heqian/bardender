import { Bard } from 'googlebard'
import * as dotenv from 'dotenv'
dotenv.config()

const bot = new Bard(`__Secure-1PSID=${process.env['__Secure-1PSID']}`)

console.log(await bot.ask('Hello?'))
