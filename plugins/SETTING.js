const os = require("os");
const config = require('../config');
const EnvVar = require('../lib/mongodbenv');
const { cmd, commands } = require('../command');
const { updateEnv, readEnv } = require('../lib/database');

let listenerAdded = false; // Prevent multiple listeners
const tick = "`";

cmd({
  pattern: "setting",
  alias: ["setting"],
  desc: "Settings for the bot",
  category: "owner",
  react: "⚙",
  filename: __filename
},
async (conn, mek, m, { from, isOwner, quoted, reply }) => {
  if (!isOwner) return reply("❌ You are not the owner!");

  try {
    const env = await readEnv();

    let desc = `
${tick}🪀 QUEEN ESHU-MD SETTING LIST 📃${tick}

${tick}👨‍💻 [01] BOT WORK MODE${tick}
> *👾 1.1 = MODE:public*
> *👾 1.2 = MODE:private*
> *👾 1.3 = MODE:group*
> *👾 1.4 = MODE:inbox*

${tick}👨‍💻 [02] AUTO STATUS READ${tick}
> *✅ 2.1 = AUTO_READ_STATUS:true*
> *❌ 2.2 = AUTO_READ_STATUS:false*

${tick}👨‍💻 [03] AUTO STATUS REPLY${tick}
> *✅ 3.1 = AUTO_STATUS_REPLY:true*
> *❌ 3.2 = AUTO_STATUS_REPLY:false*

${tick}👨‍💻 [04] AUTO STATUS REACT${tick}
> *✅ 4.1 = AUTO_STATUS_REACT:true*
> *❌ 4.2 = AUTO_STATUS_REACT:false*

${tick}👨‍💻 [05] AUTO VOICE${tick}
> *✅ 5.1 = AUTO_VOICE:true*
> *❌ 5.2 = AUTO_VOICE:false*

${tick}👨‍💻 [06] AUTO STICKER${tick}
> *✅ 6.1 = AUTO_STICKER:true*
> *❌ 6.2 = AUTO_STICKER:false*

${tick}👨‍💻 [07] AUTO REPLY${tick}
> *✅ 7.1 = AUTO_REPLY:true*
> *❌ 7.2 = AUTO_REPLY:false*

${tick}👨‍💻 [08] AUTO REACT${tick}
> *✅ 8.1 = AUTO_REACT:true*
> *❌ 8.2 = AUTO_REACT:false*

${tick}👨‍💻 [09] HEART REACT${tick}
> *✅ 9.1 = HEART_REACT:true*
> *❌ 9.2 = HEART_REACT:false*

${tick}👨‍💻 [10] OWNER REACT${tick}
> *✅ 10.1 = OWNER_REACT:true*
> *❌ 10.2 = OWNER_REACT:false*

${tick}👨‍💻 [11] FAKE RECORDING${tick}
> *✅ 11.1 = FAKE_RECORDING:true*
> *❌ 11.2 = FAKE_RECORDING:false*

${tick}👨‍💻 [12] ANTI BAD${tick}
> *✅ 12.1 = ANTI_BAD:true*
> *❌ 12.2 = ANTI_BAD:false*

${tick}👨‍💻 [13] ANTI LINK${tick}
> *✅ 13.1 = ANTI_LINK:true*
> *❌ 13.2 = ANTI_LINK:false*
`;

    const vv = await conn.sendMessage(from, {
      image: { url: "https://telegra.ph/file/e84c85f6f6554f338f0c9-b29616e9df5cdba264.jpg" },
      caption: desc
    }, { quoted: mek });

    // Auto-delete setting message after 5 minutes
    setTimeout(async () => {
      await conn.sendMessage(from, { delete: vv.key });
    }, 300000);

    // Prevent adding listener more than once
    if (!listenerAdded) {
      conn.ev.on('messages.upsert', async (msgUpdate) => {
        const msg = msgUpdate.messages[0];
        if (!msg.message || !msg.message.extendedTextMessage) return;

        const selectedOption = msg.message.extendedTextMessage.text.trim();
        const contextId = msg.message.extendedTextMessage.contextInfo?.stanzaId;

        // Match reply to settings message
        if (contextId === vv.key.id) {
          const settingMap = {
            '1.1': 'MODE:public',
            '1.2': 'MODE:private',
            '1.3': 'MODE:group',
            '1.4': 'MODE:inbox',
            '2.1': 'AUTO_READ_STATUS:true',
            '2.2': 'AUTO_READ_STATUS:false',
            '3.1': 'AUTO_STATUS_REPLY:true',
            '3.2': 'AUTO_STATUS_REPLY:false',
            '4.1': 'AUTO_STATUS_REACT:true',
            '4.2': 'AUTO_STATUS_REACT:false',
            '5.1': 'AUTO_VOICE:true',
            '5.2': 'AUTO_VOICE:false',
            '6.1': 'AUTO_STICKER:true',
            '6.2': 'AUTO_STICKER:false',
            '7.1': 'AUTO_REPLY:true',
            '7.2': 'AUTO_REPLY:false',
            '8.1': 'AUTO_REACT:true',
            '8.2': 'AUTO_REACT:false',
            '9.1': 'HEART_REACT:true',
            '9.2': 'HEART_REACT:false',
            '10.1': 'OWNER_REACT:true',
            '10.2': 'OWNER_REACT:false',
            '11.1': 'FAKE_RECORDING:true',
            '11.2': 'FAKE_RECORDING:false',
            '12.1': 'ANTI_BAD:true',
            '12.2': 'ANTI_BAD:false',
            '13.1': 'ANTI_LINK:true',
            '13.2': 'ANTI_LINK:false',
          };

          const setting = settingMap[selectedOption];
          if (setting) {
            reply(`.update ${setting}`);
            reply(`.restart`);
          } else {
            reply("Invalid option. Please select a valid option 🔴");
          }

          // Delete user's selection message after short delay
          setTimeout(async () => {
            await conn.sendMessage(from, { delete: msg.key });
          }, 2000);
        }
      });

      listenerAdded = true;
    }

  } catch (e) {
    console.error(e);
    await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
    reply('An error occurred while processing your request.');
  }
});
