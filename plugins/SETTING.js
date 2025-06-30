const os = require("os")
const config = require('../config')
const EnvVar = require('../lib/mongodbenv');
const { cmd, commands } = require('../command');
const { updateEnv, readEnv } = require('../lib/database');
const fuck = "`"

cmd({
    pattern: "setting",
    alias: ["setting"],
    desc: "settings the bot",
    category: "owner",
    react: "⚙",
    filename: __filename


},
async (conn, mek, m, { from, isOwner, quoted, reply }) => {
    if (!isOwner) return reply("❌ You are not the owner!");
    try {
            const config = await readEnv();
        
        let desc = `
${fuck}🪀QUEEN ESHU-MD SETTING LIST📃${fuck}

${fuck}👨‍💻.[01].𝗕𝗢𝗧 𝗪𝗢𝗥𝗞 𝗠𝗢𝗗𝗘${fuck}

> *👾.1.1 = MODE:public
> *👾.1.2 = MODE:private
> *👾.1.3 = MODE:group
> *👾.1.4 = MODE:inbox
 
${fuck}👨‍💻.[02].𝗔𝗨𝗧𝗢 𝗦𝗧𝗔𝗧𝗨𝗦 𝗥𝗘𝗔𝗗${fuck} 
> *✅2.1 = AUTOREAD_STATUS:true*
> *❌2.2 = AUTOREAD_STATUS:false*

${fuck}👨‍💻.[03].𝗔𝗨𝗧𝗢 𝗦𝗧𝗔𝗧𝗨𝗦 𝗥𝗘𝗣𝗟𝗬${fuck}

> *✅3.1 = AUTOSTATUS_REPLY:true*
> *❌3.2 = AUTOSTATUS_REPLY:false*

${fuck}👨‍💻.[04].𝗔𝗨𝗧𝗢𝗦𝗧𝗔𝗧𝗨𝗦 𝗥𝗘𝗔𝗖𝗧${fuck}

> *✅4.1 = AUTOSTATUS_REACT:true*
> *❌4.2 = AUTOSTATUS_REACT:false*

${fuck}👨‍💻.[05].𝗔𝗨𝗧𝗢 𝗥𝗘𝗔𝗖𝗧${fuck}

> *✅5.1 = AUTO_VOICE:true*
> *❌5.2 = AUTO_VOICE:false*

${fuck}👨‍💻.[06].𝗔𝗨𝗧𝗢 𝗦𝗧𝗜𝗖𝗞𝗘𝗥${fuck}

> *✅6.1 = AUTO_STICKER:true*
> *❌6.2 = AUTO_STICKER:false*

${fuck}👨‍💻.[07].𝗔𝗨𝗧𝗢 𝗥𝗘𝗣𝗟𝗬${fuck}

> *✅7.1 = AUTO_REPLY:true*
> *❌7.2 = AUTO_REPLY:false*

${fuck}👨‍💻.[08].𝗔𝗨𝗧𝗢 𝗥𝗘𝗔𝗖𝗧${fuck}

> *✅8.1 = AUTO_REACT:true*
> *❌8.2 = AUTO_REACT:false*

${fuck}👨‍💻.[09].𝗛𝗘𝗔𝗥𝗧 𝗥𝗘𝗔𝗖𝗧${fuck}

> *✅9.1 = HEART_REACT:true*
> *❌9.2 = HEART_REACT:false*

${fuck}👨‍💻.[10].𝗢𝗪𝗡𝗘𝗥 𝗥𝗘𝗔𝗖𝗧${fuck}
 
> *✅10.1 = OWNER_REACT:true*
> *❌10.2 = OWNER_REACT:false*

${fuck}👨‍💻.[11].𝗙𝗔𝗞𝗘 𝗥𝗘𝗖𝗢𝗥𝗗𝗜𝗡𝗚${fuck}

> *✅11.1 = FAKE_RECORDING:true*;
> *❌11.2 = FAKE_RECORDING:false*
 
${fuck}👨‍💻.[12].𝗔𝗡𝗧𝗜 𝗕𝗔𝗗${fuck}

> *✅12.1 = ANTI_BAD true*
> *❌12.2 = ANTI_BAD:false*

${fuck}👨‍💻.[13].𝗔𝗡𝗧𝗜 𝗟𝗜𝗡𝗞${fuck}
> *✅13.1 = ANTI_LINK true*
> *❌13.2 = ANTI_LINK:false*      
`;

      const vv = await conn.sendMessage(from, { image: { url: "https://telegra.ph/file/e84c85f6f6554f338f0c9-b29616e9df5cdba264.jpg"}, caption: desc }, { quoted: mek });
        
        setTimeout(async () => {
            await conn.sendMessage(from, { delete: vv.key });
        }, 300000); // 10 seconds timeout for deletion

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1.1':
                        reply(".update MODE:public" );
                        reply(".restart");
                        break;
                    case '1.2':               
                        reply(".update MODE:private");
                        reply(".restart");
                        break;
                    case '1.3':               
                          reply(".update MODE:group");
                        reply(".restart");
                      break;
                    case '1.4':     
                        reply(".update MODE:inbox");
                        reply(".restart");
                      break;
                    case '2.1':     
                        reply(".update AUTO_READ_STATUS:true");
                        reply(".restart");
                        break;
                    case '2.2':     
                        reply(".update AUTO_READ_STATUS:false");
                        reply(".restart");
                    break;
                    case '3.1':    
                        reply(".update AUTO_STATUS_REPLY:true");
                        reply(".restart");
                    break;
                    case '3.2':    
                        reply(".update AUTO_STATUS_REPLY:false");
                        reply(".restart");
                    break;              
                    case '4.1':    
                        reply(".update AUTO_STATUS_REACT:true");
                        reply(".restart");
                    break;
                    case '4.2':    
                        reply(".update AUTO_STATUS_REACT:false");
                        reply(".restart");
                    break;            
                    case '5.1':    
                        reply(".update AUTO_VOICE:true");
                        reply(".restart");
                    break;
                    case '5.2':    
                        reply(".update AUTO_VOICE:false");
                        reply(".restart");
                    break;                  
                      case '6.1':    
                        reply(".update AUTO_STICKER:true");
                        reply(".restart");
                    break;
                    case '6.2':    
                        reply(".update AUTO_STICKER:false");
                        reply(".restart");
                    break;              
                    case '7.1':    
                        reply(".update AUTO_REPLY:true");
                        reply(".restart");
                    break;
                    case '7.2':    
                        reply(".update AUTO_REPLY:false");
                        reply(".restart");
                    break;                  
                    case '8.1':    
                        reply(".update AUTO_REACT:true");
                        reply(".restart");
                    break;
                    case '8.2':    
                        reply(".update AUTO_REACT:false");
                        reply(".restart");
                    break;              
                    case '9.1':    
                        reply(".update HEART_REACT:true");
                        reply(".restart");
                    break;
                    case '9.2':    
                        reply(".update HEART_REACT:false");
                        reply(".restart");
                    break;              
                    case '10.1':    
                        reply(".update OWNER_REACT:true");
                        reply(".restart");
                    break;
                    case '10.2':    
                        reply(".update OWNER_REACT:false");
                        reply(".restart");
                    break;              
                    case '12.1':    
                        reply(".update FAKE_RECORDING:true");
                        reply(".restart");
                    break;
                    case '11.2':    
                        reply(".update FAKE_RECORDING:false");
                        reply(".restart");
                    break;              
                    case '12.1':    
                        reply(".update ANTI_BAD:true");
                        reply(".restart");
                    break;
                    case '12.2':    
                        reply(".update ANTI_BAD:false");
                        reply(".restart");
                    break;       
                    case '13.1':    
                        reply(".update ANTI_LINK:true");
                        reply(".restart");
                    break;
                    case '13.2':    
                        reply(".update ANTI_LINK:false");
                        reply(".restart");
                    break;       
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }
                
                       // Auto-delete the option selection after 10 seconds
                setTimeout(async () => {
                    await conn.sendMessage(from, { delete: msg.key });
                }, 2000); // 10 seconds timeout for deletion

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
