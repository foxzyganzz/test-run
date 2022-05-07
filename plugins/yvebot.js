let { MessageType } = require('@adiwajshing/baileys')
let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
  
let handler = async (m, { conn }) => {
let caption = `*HALO Bang*\n*Saya © Foxzy Botz*\n*Pilih Menu Di Bawah Yaa Bree*\n*Spam = Banned*\n*Telp = Blok*\n\n*Join Group WhatsApp*\nhttps://chat.whatsapp.com/ExiDZoKE1Nr3VP0F8ZK6zs\n\n*Untuk Melihat Menu Bot Ketik .menu Atau .© Foxzy Botz*`.trim()
conn.send3Button(m.chat, caption, `Powered By Baileys\nCreated © Foxzy Botz By ✗✗✗ FoxzyWasHereゑ\n`.trim(), '🧾MENU', '.?', '🍭Owner © Foxzy Botz', '.owner', '📖Info Bot', '.infobot', m)
}

handler.command = /^(hel)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false
handler.register = false

handler.fail = null
handler.exp = 20

module.exports = handler