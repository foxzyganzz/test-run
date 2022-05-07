

const { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn, text }) => {
let [number, pesan1, pesan] = text.split `|`

    if (!number) return conn.reply(m.chat, 'Silahkan masukan nomor yang akan chat', m)
	if (!pesan1) return conn.reply(m.chat, 'Silahkan masukan pesannya', m)
    if (!pesan) return conn.reply(m.chat, 'Silahkan masukan pesannya', m)
	if (!pesan1) return conn.reply(m.chat, 'Silahkan masukan pesannya', m)
    if (text > 500) return conn.reply(m.chat, 'Teks Kepanjangan!', m)
    if (text.startsWith('+')) return conn.reply(m.chat, '[!] Tolong masukan Nomor dengan awalaan 62', m)
    if (text.startsWith('@')) return conn.reply(m.chat, '[!] Tolong masukan Nomor dengan awalaan 62', m)

    let korban = `${number}`
    var nomor = m.sender
    let spam1 = `*「 FOXZY STORE 」*\n\nNumber: ${pesan1}\nPesan: ${pesan}\n\nNokos WhatsApp By FoxzyStore\n NO SPAM KODE OTP BY FOXZY\n\nSilahkan Send SMS Di WhatsApp Anda\nDan Tunggu Bot Akan Mengirim Kode Otomatis Ke Anda\n\nBersabar Dan TIDAK SPAM!!\nTHANKYOU BUYYER ME\n\nOWNER:wa.me/6281386383559`

    conn.sendMessage(korban + '@s.whatsapp.net', spam1, MessageType.text)

    let logs = `[!] Berhasil mengirim pesan wa ke nomor ${korban}`
    conn.reply(m.chat, logs, m)
}
handler.help = ['sendchat1 <nomor|pesan>', 'sendchat1 <nomor|pesan>']
handler.tags = ['premium', 'spam']
handler.command = /^(sendchat1|sendchat1)$/i
handler.owner = true
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false
handler.disable = false // klo pake wa mod ubah aja ke false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler
