let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/849dba166cfbc3cb2e7ae.jpg', m, { packname: "Rayhn", author: "Han" })
}

handler.customPrefix = /^(anjing|cie|han|wkwk|awokawok|sad|ha|p|?)$/i
handler.command = new RegExp

module.exports = handler