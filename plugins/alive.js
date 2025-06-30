const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "bot alive check.",
    react: "ℹ️",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let about = ` 🎗️Hey👋 ${pushname}  , 
Welcome  to *ᴇꜱʜᴀɴ ᴛᴇᴄɴɪᴄ ʙᴏᴛ*✨🪼
So , I think this bots are useful 
to you . 😊
Nice to meet you 🤝
*Thankyou* ♥️ 🪄 

*🧫𝙵𝙾𝙻𝙻𝙾𝚆𝚄𝚂🪐*

[📡].ʏᴏᴜᴛᴜʙᴇ:- https://youtu.be/pytdWKT-NV4?si=KYqyyP962Tzq2rqQ💡`
return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption:about},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})

