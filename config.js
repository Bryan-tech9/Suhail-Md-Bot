const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",
SUHAIL_14_27_08_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDMxLFxuICAgICAgICA3LFxuICAgICAgICA4NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTE2LFxuICAgICAgICA5NixcbiAgICAgICAgOTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTksXG4gICAgICAgIDk5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDM5LFxuICAgICAgICAxNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE0LFxuICAgICAgICA5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDY2LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTY2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjUzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjIxLFxuICAgICAgICA4NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxODQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEsXG4gICAgICAgIDc5LFxuICAgICAgICA5MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODEsXG4gICAgICAgIDE1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyNixcbiAgICAgICAgMjcsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDUwLFxuICAgICAgICA1MixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDcwLFxuICAgICAgICA5NCxcbiAgICAgICAgODMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTE3LFxuICAgICAgICA4MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDc5LFxuICAgICAgICA5OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjI0LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDgzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjU1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTIzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTA1LFxuICAgICAgICA4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDQyLFxuICAgICAgICAxODMsXG4gICAgICAgIDQzLFxuICAgICAgICAzMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDkxLFxuICAgICAgICA4NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODksXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTA5LFxuICAgICAgICA2NixcbiAgICAgICAgMzgsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODIsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3NixcbiAgICAgICAgMTU4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAzOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk5LFxuICAgICAgICA4OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDk3LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjdWd3U5QWFxZEZ4cVYwOWs3dmtwZTZab0JIeG5TT3R1c1ZjYTBwWFRnTzg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjMtenRtY0tDUVplNkc4MnVxM09UWUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOWVmMTdiMWQtZjViYi00YjFlLTgwYjAtYjYwNjYyNzAzZDMxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg4LFxuICAgICAgMjQ0LFxuICAgICAgNzIsXG4gICAgICA5MyxcbiAgICAgIDEwNixcbiAgICAgIDE5OCxcbiAgICAgIDE0MixcbiAgICAgIDEzNyxcbiAgICAgIDEyMixcbiAgICAgIDE5MSxcbiAgICAgIDY0LFxuICAgICAgMTMsXG4gICAgICAxMDEsXG4gICAgICAyMzgsXG4gICAgICA1MSxcbiAgICAgIDE0NixcbiAgICAgIDEwLFxuICAgICAgODAsXG4gICAgICAxNTEsXG4gICAgICAxNzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODcsXG4gICAgICAxMyxcbiAgICAgIDI0MyxcbiAgICAgIDQzLFxuICAgICAgMjU0LFxuICAgICAgMjAxLFxuICAgICAgMzcsXG4gICAgICA3OSxcbiAgICAgIDkwLFxuICAgICAgNjcsXG4gICAgICA1OCxcbiAgICAgIDE4MixcbiAgICAgIDI1NSxcbiAgICAgIDEsXG4gICAgICAyNTEsXG4gICAgICAzNyxcbiAgICAgIDk5LFxuICAgICAgODQsXG4gICAgICAxODMsXG4gICAgICAxNThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSllSRjlSUUhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQ1ODk0NTA5Nzo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi0YLQvdGUJ8+JIFLOsXp6zrFxIM65zrfRlc654oiC0ZRcXG5cXG7iirlcXG7iirlcXG7iirlcXG7iirkgXFxu4oq5IFxcbuKKuSBcXG7iirkgXFxu4oq5IFxcbuKKuSBcXG7iirkgXFxu4oq5XFxu4oq5IFxcbuKKuSBcXG7iirkgXFxu4oq5IFxcbuKKuVxcbuKKuSBcXG5cXG7wk4ap8JakjfCThqpcIixcbiAgICBcImxpZFwiOiBcIjYyMzY3NzkwODE3MzY6OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQNk92WTRFRU1tS3dyWUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkFqZmR3K29KTUxiZjdKaTRLNmM4eXduRE5reXZSZjNYazI2bVQwM1lNR0k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicWRZUSs4NmZSRUVlQ2I0MERpZ0xYKzUwaEY0QlRMUVFmMlpIempZWkdnVzlzTUhva2ZHMm1JSU0zUHQ5VzhRd1RJQUZzcE81OVVPY0xlaUFmWGxEQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicUtaRG9SL0QyaStwVkJmd2NndjMwbFZlcm1WWnBnWFdEbDArNGI1b2VCMTNrQURDYU5UYWYwRlNFVEM1Z1Q2VzUzc1BweEN5SzNibUFwK3FzNlVLakE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDU4OTQ1MDk3OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI0OTQxNjQ4XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==
  sessionName:process.env.SESSION_ID || "",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
