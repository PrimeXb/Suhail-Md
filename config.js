const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID SUHAIL_14_57_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTEwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTA2LFxuICAgICAgICA2MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDUwLFxuICAgICAgICA4MixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDYzLFxuICAgICAgICA0MyxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4NixcbiAgICAgICAgNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDU1LFxuICAgICAgICAxOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk0LFxuICAgICAgICA5MixcbiAgICAgICAgMjM5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTA5LFxuICAgICAgICA4NixcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDYxLFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjksXG4gICAgICAgIDUzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTUyLFxuICAgICAgICA0NixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDg4LFxuICAgICAgICAxNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDczLFxuICAgICAgICA0MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODUsXG4gICAgICAgIDE2LFxuICAgICAgICA5NSxcbiAgICAgICAgODksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjAyLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NyxcbiAgICAgICAgMTI4LFxuICAgICAgICA3MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTczLFxuICAgICAgICAxMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjEzLFxuICAgICAgICA2MixcbiAgICAgICAgMTAyLFxuICAgICAgICAxLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA1NixcbiAgICAgICAgMjE1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNixcbiAgICAgICAgOTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk0LFxuICAgICAgICA0MixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTkyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEsXG4gICAgICAgIDQ5LFxuICAgICAgICA1MixcbiAgICAgICAgMjMsXG4gICAgICAgIDcxLFxuICAgICAgICA2MyxcbiAgICAgICAgNzksXG4gICAgICAgIDIyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTE0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODEsXG4gICAgICAgIDQyLFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDg4LFxuICAgICAgICAzOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODMsXG4gICAgICAgIDI0MixcbiAgICAgICAgODksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTM2LFxuICAgICAgICA2NixcbiAgICAgICAgMzEsXG4gICAgICAgIDgwLFxuICAgICAgICA2OSxcbiAgICAgICAgNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTk2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjI3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTU3LFxuICAgICAgICA2NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDExLFxuICAgICAgICAxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDU5LFxuICAgICAgICA3OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzAsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDM3LFxuICAgICAgICA2MSxcbiAgICAgICAgODUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyLFxuICAgICAgICA4OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDExLFxuICAgICAgICAyMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI3ekpJVVEvamU2Y2F2NXE5elczSmo3c25Oc2t6blZ4U211OEhRcGY5RWJZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI1RG0yX1k0TlFOeWhDWDhPczFNSVZRXCIsXG4gIFwicGhvbmVJZFwiOiBcImRhNjY0MDMyLTdjYWItNGU0ZC1iZTFjLTdiOTljMjFjNjEzNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NixcbiAgICAgIDMzLFxuICAgICAgMTI4LFxuICAgICAgMTQ3LFxuICAgICAgNjYsXG4gICAgICAyNSxcbiAgICAgIDIwOSxcbiAgICAgIDIxNixcbiAgICAgIDE4LFxuICAgICAgMjE5LFxuICAgICAgMTM4LFxuICAgICAgMjUsXG4gICAgICAyMjgsXG4gICAgICAyMDMsXG4gICAgICAxMTQsXG4gICAgICAzOSxcbiAgICAgIDExMixcbiAgICAgIDIzNCxcbiAgICAgIDgzLFxuICAgICAgNzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNyxcbiAgICAgIDIzOCxcbiAgICAgIDIxLFxuICAgICAgMjExLFxuICAgICAgMTY5LFxuICAgICAgMjIzLFxuICAgICAgMjEzLFxuICAgICAgMTY1LFxuICAgICAgNjIsXG4gICAgICA1MixcbiAgICAgIDE5MSxcbiAgICAgIDgxLFxuICAgICAgMjIzLFxuICAgICAgMTAwLFxuICAgICAgMjUzLFxuICAgICAgMjQ4LFxuICAgICAgMTU2LFxuICAgICAgMjksXG4gICAgICAxODMsXG4gICAgICAxODlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJalN3NXdHRU51aHFiVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlBCMGxpTU9jNFJyTGxXZ2w0T250ZDV6VkRRY01PS0lnME84V1dsQVREZ009XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieHFrejdVUHpPejAxdnp2VVVPUVI0WWFVZmQ4NkU4VlBmU04wQ0VQVEpTQzBveGJhNlV3a3dlWWF5ZzM1ZEZsL0I0aERIeGxjY2NoV1NBSk0xK0svREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicmNvWkxyZ1dnaGtPbi9qVkZxcTdJWHZKaDh1RUtrUkRSaXZ3NzdEd3N2V0c3MzY4ZFlSNGRFTmtrZHR6dUZ0UEh4R3ZXU1hYRmRGeUtyWnVaMnl4Z1E9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTU2NDYwNTc2OjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMTM4NzY2NTQyMzk4Njk6MThAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTU2NDYwNTc2OjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNDM3ODU1XG59Igp9


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
