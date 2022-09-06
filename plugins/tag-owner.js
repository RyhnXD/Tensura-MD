let fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
let name = m.fromMe ? conn.user : conn.contacts[m.sender]
let rozi = 'https://telegra.ph/file/816fe31b3d02ff785dddf.jpg'
await conn.send3ButtonImg(m.chat, rozi, "*Ada Apa Tag owner Gua Ngab?🤨*", '=====『 TAG TERDETEKSI 』=====', 'OWNER', '.owner', 'KEMBALI', '.menu', 'STORE', '.store', m)
                        
}
handler.customPrefix = /@62895627514070/i
handler.command = new RegExp

module.exports = handler
