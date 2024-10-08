const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "hey am bryan tech" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="bryansolos298@gmail.com"
global.location="Nigeria,lagos."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "8106546983" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "8106546983";




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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "8106546983,810xxxxxxxx";


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
  VERSION : process.env.VERSION || "V.1.2.8.9.10",
  caption : process.env.CAPTION || "®bryantech²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "bryantech-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "bryantech-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x bryantech",

  sessionName:process.env.SESSION_ID || "",  // PUSUHAIL_16_30_10_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA3NixcbiAgICAgICAgNDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjA2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDk4LFxuICAgICAgICA1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTUzLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI4LFxuICAgICAgICA1NixcbiAgICAgICAgMTIzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDQ5LFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTYzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTgzLFxuICAgICAgICA3MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3MixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDc3LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAwLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDgyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTgyLFxuICAgICAgICA0NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDY3LFxuICAgICAgICA3MixcbiAgICAgICAgMjcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjU1LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTgyLFxuICAgICAgICA0MyxcbiAgICAgICAgNixcbiAgICAgICAgMTI3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTg5LFxuICAgICAgICA1NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMSxcbiAgICAgICAgMTksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjAxLFxuICAgICAgICA0MyxcbiAgICAgICAgODIsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjA0LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjcsXG4gICAgICAgIDc1LFxuICAgICAgICA3NixcbiAgICAgICAgMzYsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgODIsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjEwLFxuICAgICAgICA2OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTc0LFxuICAgICAgICA4NixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA0MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTk4LFxuICAgICAgICA1MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjksXG4gICAgICAgIDEwLFxuICAgICAgICAyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTI4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwLFxuICAgICAgICA5NixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTczLFxuICAgICAgICAzOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDM3LFxuICAgICAgICA5LFxuICAgICAgICAxODcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJpeklaV3phdVdtS1E1U2x4bXpscU5pT2JRNnVXT2UwQ1lDQjRick9OZEMwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxMDY1NDY5ODNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkNERTA4QUI5OEY0QjQ4NTgzRjhDRDBFMThFRDE4MUEyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyODQwNTAwNVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJkYlFuVlV3aVFoUzBQc2VyQ0YzYTVBXCIsXG4gIFwicGhvbmVJZFwiOiBcImI1NDFiMzQxLWYwZDUtNGU0My05ODEwLTQ4MTEzYTYyYzQ2MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzAsXG4gICAgICAyMCxcbiAgICAgIDg1LFxuICAgICAgMTEwLFxuICAgICAgNyxcbiAgICAgIDEwMyxcbiAgICAgIDI0LFxuICAgICAgNTcsXG4gICAgICAyMjgsXG4gICAgICAxNjYsXG4gICAgICAxNDksXG4gICAgICAxNCxcbiAgICAgIDI1LFxuICAgICAgMjksXG4gICAgICA3NixcbiAgICAgIDEyNCxcbiAgICAgIDIzMSxcbiAgICAgIDE0MCxcbiAgICAgIDE4MyxcbiAgICAgIDE5MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2LFxuICAgICAgMTg0LFxuICAgICAgMTI3LFxuICAgICAgNzksXG4gICAgICAyNTQsXG4gICAgICAzMixcbiAgICAgIDQsXG4gICAgICA4NyxcbiAgICAgIDIzNixcbiAgICAgIDY4LFxuICAgICAgMTQ5LFxuICAgICAgMTQ3LFxuICAgICAgNDcsXG4gICAgICAxMDQsXG4gICAgICAxMTcsXG4gICAgICAyMjgsXG4gICAgICAzMixcbiAgICAgIDE5NCxcbiAgICAgIDE2NSxcbiAgICAgIDQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjZTNzZMR0FBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTA2NTQ2OTgzOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEwNjQ1OTU1NTcwOTAxNzo1QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIn5CcnlhbuKEosKjXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS1grcVY4UWhieVZ1QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI3Z3hzRTBTMEFQV01CR1hwWWN6YkRWdGY4QkFQNWR0R1FPRnJqQkNJWGhrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlQxRkFGUGVWWURzVG9FTHBpNGxCbzZuMjFnVXFENSsrcWJwNFpGNS82djVPN1lqb2tjcVBXWEZLaHl6TmY3KzlWZ21CRnpGb2VGMzUwQ2NLdXUzSkJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk9HWmxkd3lTUFVmRU03cU42bEpPV3p4T0NwN3NJUDZUTkk5OEs5Q1NBMmNObjY1ajB6RTJHTHEyM1JXamFKdEhZTyt1U1VpZGE4SWw3NUJHK3hWMUR3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMDY1NDY5ODM6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyODQwNTAwMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtDb1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS0NvLmpzb24iOiAie1wia2V5RGF0YVwiOlwibDZMNUQ4MGpxZnRlelRuK08xbDN6SzRjYk9YclJIOFRkTlNvdGVqZGE4dz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTk5MTczNDcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjgzNjc1NTg5ODZcIn0iCn0=T SESSION ID HERE 
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
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "BRYAN",



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
 
