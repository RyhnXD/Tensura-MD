let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/2b9a839b602942c447414.png', m, { packname: "zifabotz", author: "@rozi" })
}

handler.customPrefix = /^(ok)$/i
handler.command = new RegExp

module.exports = handler
