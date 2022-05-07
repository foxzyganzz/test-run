let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'paynokos')).buffer(), `
╔════════════════════
╠════════════════════
║ • _QRIS ALL PAYMENT:https://l.top4top.io/p_2226w1xbi1.jpg
║ • _DANA/OVO:081386383559
╠════════════════════
║ _*SILAHKAN MELAKUKAN PEMBAYARAN PAKAI QRIS ALL PAYMENT*_
║ BILA APK PEMBAYARAN ANDA BELUM DI UPGRADE
╚════════════════════
*[❗] Sertakan Bukti Pembayaran*
-------------------------------------------------------
*「 FOXZYBOTZWA 」
`.trim(), footer, 'Owner', '.owner')
handler.help = ['paynokos']
handler.tags = ['info']
handler.command = /^pay(nokos|noluar)$/i

module.exports = handler