const mongoose = require('mongoose');
const config = require('../config');
const EnvVar = require('./mongodbenv');

const defaultEnvVariables = [
    { key: 'AUTO_READ_STATUS', value: 'true' },
    { key: 'AUTO_VOICE', value: 'true' },
    { key: 'MODE', value: 'public' },
    { key: 'AUTO_STICKER', value: 'false' },
    { key: 'AUTO_REPLY', value: 'false' },
    { key: 'AUTO_REACT', value: 'true' },
    { key: 'HEART_REACT', value: 'true' },
    { key: 'LANG', value: 'EN' },
    { key: 'OWNER_REACT', value: 'true' },    
    { key: 'PREFIX', value: '.' }, 
    { key: 'ANTI_BAD', value: 'true' },
    { key: 'ANTI_LINK', value: 'true' },
    { key: 'FAKE_RECORDING', value: 'true' },
    { key: 'AUTO_STATUS_REPLY', value: 'false' },    
    { key: 'BODY', value: 'CREATED BY ESHAN TECH SL🛡️' },
    { key: 'AUTO_STATUS_REACT', value: 'true' },   
    { key: 'BOT_IMG', value: 'https://i.ibb.co/xmhW7DJ/6252.png' },   
    { key: 'WEBURL', value: 'https://github.com/CYBER-ESHU/ESHU-MD' },   
    { key: 'TITLE', value: 'QUEEN-ESHU-MD-V1' },   
    { key: 'NEWSLETTER_ID', value: '120363303242803015@newsletter' },   
    { key: 'ALIVE_IMG', value: 'https://i.ibb.co/xmhW7DJ/6252.png' },              
    { key: 'CHANNEL_NAME', value: '💗 QUEEN-ESHU-MD-V1 💗' },   
    { key: 'FILENAME', value: 'QUEEN-ESHU-MD-V1' },             
    { key: 'BOT_NAME', value: 'ESHU 𝙼𝙳 V1ESHU 𝙼𝙳 V1' },             
      ];

// MongoDB connection function
const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB);
        console.log('🛜 MongoDB Connected ✅');

        // Check and create default environment variables
        for (const envVar of defaultEnvVariables) {
            const existingVar = await EnvVar.findOne({ key: envVar.key });

            if (!existingVar) {
                // Create new environment variable with default value
                await EnvVar.create(envVar);
                console.log(`➕ Created default env var: ${envVar.key}`);
            }
        }

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
                                       
 //                                                                       
