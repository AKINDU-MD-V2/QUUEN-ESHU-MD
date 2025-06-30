const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "about",
    desc: "To get the bot informations.",
    react: "ℹ️",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let about = ` 👋 𝐇𝐄𝐋𝐋𝐎𝐖 𝐓𝐇𝐄𝐈𝐑
              ${senderNumber} 
              𝐈 𝐀𝐌 𝐐𝐔𝐄𝐄𝐍 𝐄𝐒𝐇𝐔-𝐌𝐃 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓
              𝐂𝐑𝐄𝐀𝐓𝐄𝐃 𝐁𝐘 𝐄𝐒𝐇𝐀𝐍-𝐓𝐄𝐒𝐇-𝐒𝐋(𝐀𝐂𝐇𝐀𝐋𝐀-𝐄𝐒𝐇𝐀𝐍)..
              
              > *© Qᴜᴇᴇɴ ᴇꜱʜᴜ-ᴍᴅ ᴡʜᴀɢꜱᴀᴘᴘ ʙᴏᴛ*
              > *ᴡʜᴀᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴᴇʟ :*https://whatsapp.com/channel/0029VabteKy90x2pYTUqub3H          
              тнαηкѕ ƒσя υѕιηg єѕнυ м∂ ωнαтѕαρρ вσт м∂`
return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption:about},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})


