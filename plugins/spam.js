const { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn, text }) => {
let [number, pesan1, pesan, pesan2] = text.split `|`

    if (!number) return conn.reply(m.chat, 'Silahkan masukan nomor yang akan chat', m)
	if (!pesan1) return conn.reply(m.chat, 'Silahkan masukan pesannya', m)
    if (!pesan) return conn.reply(m.chat, 'Silahkan masukan pesannya', m)
	if (!pesan2) return conn.reply(m.chat, 'Silahkan masukan pesannya', m)
    if (text > 500) return conn.reply(m.chat, 'Teks Kepanjangan!', m)
    if (text.startsWith('+')) return conn.reply(m.chat, '[!] Tolong masukan Nomor dengan awalaan 62', m)
    if (text.startsWith('@')) return conn.reply(m.chat, '[!] Tolong masukan Nomor dengan awalaan 62', m)

    let korban = `${number}`
    var nomor = m.sender
    let spam1 = `*「 FOXZY AUTO SEND CODE 」*\n\nNumber: ${pesan1}\nKode WhatsApp:${pesan}\nAnda juga dapat mengetuk tautan ini untuk verifikasi: v.whatsapp.com/${pesan2}\n\nBot Send Kode WhatsApp By FoxzyStore\n-----------------------------------------------------------\nTerimaKasih Sudah Order\nKak ${number}\n-----------------------------------------------------------\nJangan Lupa Untuk Order Lagi Hehehe\nFoxzyWasHere`

    conn.sendMessage(korban + '@s.whatsapp.net', spam1, MessageType.text)

    let logs = `[!] Berhasil mengirim code wa ke nomor ${korban}`
    conn.reply(m.chat, logs, m)
}
handler.help = ['spam <nomor|pesan>', 'spamwa <nomor|pesan>']
handler.tags = ['premium', 'spam']
handler.command = /^(spam|spamwa)$/i
handler.owner = false
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
