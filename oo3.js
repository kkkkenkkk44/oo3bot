const Discord = require('discord.js');
const client = new Discord.Client();


// 連上線時的事件
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// 當 Bot 接收到訊息時的事件
client.on('message', msg => {

    if (msg.content === '那我也要睡啦') {

        msg.reply('好啊快睡！');
    }
});

client.login(process.env.token);