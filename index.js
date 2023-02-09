const { Client, MessageAck } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
    const number="+628xxxxxx";
    const text="silahkan digunakan Whatsapp Bot sebaik mungkin ya";
    const chatId=number.substring(1)+"@c.us";
    client.sendMessage(chatId,text);
});
client.on('message',async message=>{
    if(message.body==='hallo'){
        message.reply('hai djancuk');
    }
});

client.on('disconnected',(reason)=>{
    console.log('disconected ya',reason);
})

client.initialize();
