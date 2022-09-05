const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m, {conn}) => {
const vcard = `BEGIN:VCARD
VERSION:3.0
N:;;;
FN: Han
item.ORG: Ham
item1.TEL;waid=62895627514070:62895627514070@s.whatsapp.net
item1.X-ABLabel:owner selalu ada 
item2.EMAIL;type=INTERNET: komnthol@gmail.com
item2.X-ABLabel:📧Email
item3.ADR:;;🎍Badung;;;;
item3.X-ABADR:ac
item3.X-ABLabel:asal kota
item4.URL:https//github.com/RyhnXD
item4.X-ABLabel:Website
END:VCARD`
const sentMsg  = await conn.sendMessage(
    m.chat,
    { 
        contacts: { 
            displayName: 'OWNER BOT', 
            contacts: [{ vcard }]  
        }
    }
)
let rozi = 'https://telegra.ph/file/cc1b5b996d3791e89ebf5.jpg'
await conn.send3ButtonImg(m.chat, rozi, "*Hai kak👋,  ɪᴛᴜ ɴᴏᴍᴏʀ ᴏᴡɴᴇʀ ᴋᴜ ᴋᴀᴋ…*", '📮: ᴊᴀɴɢᴀɴ ᴅɪ sᴘᴀᴍ ʏᴀ', 'Credits', '.tqto', 'Back', '.menu', 'Donasi', '.donasi', sentMsg)}
handler.help = ['owner2', 'creator2']
handler.tags = ['info']

handler.command = /^(owner2|creator2)$/i

module.exports = handler
