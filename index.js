const Discord = require('discord.js')
const client = new Discord.Client()
client.on('Ready',()=>{
    console.log("봇 레디")
})
client.on('message', msg=>{
    if(msg.content === '핑'){
        msg.reply('퐁!')
    }
})

client.login('ODM3OTgwMzM4NDQxMjg5NzI4.YI0cAQ.TAv4eV0W9TYuP97HdWxSkrx_te4')
