import {Telegraf, Markup} from 'telegraf'

const token = '7524486522:AAG4Ex5NkjCCT9GpI-fS1o98CHsVt_fgBBY'
const webAppUrl = 'https://diary-b1c96.web.app'

const bot = new Telegraf(token);

bot.command('start', (ctx)=>{
    ctx.reply('Иди нахуй уебище!', Markup.inlineKeyboard([
        Markup.button.webApp(
        'тыкай сюда ублюдок',
            `${webAppUrl}?ref=${ctx.payload}`
         )

    ]))
})

bot.launch()