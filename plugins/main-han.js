let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/79b91f1ead9ea126eeb54.png', m, { packname: "Rayhn", author: "Han" })
}

handler.customPrefix = /^(bebanjoin|cie|han|wkwk|awokawok|sad|ha|p|?)$/i
handler.command = new RegExp

module.exports = handler
