let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'listnokos')).buffer(), `
Jual jasa OTAV (One Time Account Verification)
• Harga sangat terjangkau (paling murah SE-INDONESIA)
• Garansi berlaku apabila OTAV gagal terkirim

Harga: mulai dari 4k-23k (Tergantung negara) 🌐

Pembayaran bisa dilakukan via:
• Dana
• Gopay 
• OVO
• QRIS (Up to 1k)

Tanya-tanya bisa melalui WA dibawah 👇🏼
Minat? chat wa.me/6281386383559 (FOXZY SELLER)

Jangan lupa untuk menyertakan bukti pembayaran

⚠️ PERHATIAN! ⚠️
• Harga dibawah merupakan harga OTAV untuk WhatsApp, harga akan berbeda jika anda ingin melakukan OTAV untuk aplikasi lain (misalnya Discord,Telegram,Tinder,OLX,dll)

LIST NEGARA/COUNTRY CODE:
Total list: 100+

Algeria (+213) = 13k
Argentina (+54) = 13k
Austria (+43) = 15k
Azerbaijan (+994) = 15k
Belarus (+375) = 18k
Belgium (+32) = 15k
Bolivia (+591) = 13k
Brazil (+55) = 14k
Cambodia (+855) = 13k
Cameroon (+237) = 13k
Canada (+1) = 15k
Chad (+235) = 15k
China (+86) = 13k
Colombia (+57) = 14k
Croatia (+385) = 15k
Cyprus (+357) = 25k
Côte d'Ivoire (+225) = 17k
Egypt (+20) = 17k
El Salvador (+503) = 13k
Estonia (+372) = 15k
Ethiopia (+251) = 13k
France (+33) = 18k
Gambia (+220) = 116k
Germany (+49) = 19k
Ghana (+233) = 13k
Greece (+30) = 15k
Haiti (+509) = 15k
Hong Kong (+852) = 16k
India (+91) = 13k
Indonesia (+62) = 1k
Iran (+98) = 19k
Ireland (+353) = 13k
Israel (+972) = 16k
Kazakhstan (+7) = 13k
Kenya (+254) = 13k
Kyrgyztan (+996) = 15k
Macao (+853) = 23k
Malawi (+265) = 13k
Malaysia (+60) = 15k
Mali (+223) = 19k
Mauritania (+222) = 15k
Mexico (+52) = 13k
Montonegro (+382) = 15k
Morocco (+212) = 13k
Myanmar (+95) = 13k
Netherlands (+31) = 17k
New Caledonia (+687) = 25k
Nicaragua (+505) = 13k
Nigeria (+234) = 13k
Pakistan (+92) = 13k
Panama (+507) = 16k
Peru (+51) = 13k
Philippines (+63) = 13k
Puerto Rico (+1) = 5k
Reunion (+262) = 13k
Romania (+40) = 15k
Russia (+7) = 10k
Saudi Arabia (+966) = 15k
Senegal (+221) = 13k
Serbia (+381) = 15k
Singapore (+65) = 15k
South Africa (+27) = 13k
Spain (+34) = 19k
Sudan (+249) = 13k
Taiwan (+886) = 15k
Thailand (+66) = 13k
Togo (+228) = 14k
Tunisia (+216) = 13k
Turkey (+90) = 13k
UAE (+971) = 13k
Uganda (+256) = 13k
UK (+44) = 15k
Ukraine (+380) = 13k
Uzbekistan (+998) = 16k
Venezuela (+58) = 13k
Vietnam (+84) = 13k
Yemen (+967) = 19k
Zambia (+260) = 13k
Zimbabwe (+263) = 13k
DAN LAIN-LAIN... MALES GUE NGETIK, SELENGKAPNYA chat (wa.me/6281386383559)

...: FAQ FOXZY SELLER :...

Q: Nomor yg didapatkan itu darimana min?
A: Semua nomor yg kami dapatkan dari penyuplai adalah real sim-card :D.

Q: Setelah saya beli nomor, lalu dikemudian hari saya butuh nomor sebelumnya, bisa dipakai lagi ga?
A: Tidak bisa, 1 nomor hanya bisa dipakai untuk 1 SMS, kalau Anda keluar/Log Out/Hapus APK, nomornya gabisa dipakai lagi :D.

Q: Berapa banyak waktu yg saya miliki untuk menunggu SMS?
A: 18 Menit.

Q: Gimana mimin menentukan harga?
A: Harga ditentukan oleh pesuplai (Penawaran & Permintaan).

Q: Apakah nomor yg diberikan legal?
A: Tentu saja legal, nomor yg kami miliki datang dari pesuplai yg dapat dipercaya.

Q: Saya ingin membeli nomor yg bisa digunakan berhari-hari dan berkali-kali, bisa min?
A: Bisa dong, dengan sistem Rent kamu bisa sewa nomor selama beberapa Jam,Hari,Minggu, dan Bulan yg telah ditentukan.

Q: Nomor yg saya beli, apakah kedepannya akan dijual lagi untuk diverifikasi orang lain?
A: Tidak, nomor yg sudah diaktivasi akan sepenuhnya dihapus dari server, nomor yg sudah kamu beli tidak akan dijual lagi :D.

Q: Proses penerimaan dan pengiriman SMS oleh Admin manual atau otomatis?
A: Proses SMS masuk sangat cepat, antara 1-18 menit dan dikirim secara otomatis.

Q: Apa alasan SMS tidak masuk-masuk?
A: Banyak faktor, salahsatu alasan nya adalah IP Address Anda tidak sesuai dengan nomor yg dipesan, jika IP Address Anda telah digunakan untuk verifikasi SMS berkali-kali lalu Anda ingin membeli nomor baru, disarankan untuk mengubah IP Address Anda sesuai dengan negara yg dibeli.

Q: Mengapa wajib merubah IP Address setelah sering melakukan SMS di IP yg sama?
A: Karena WhatsApp memiliki fitur penyaringan yg sangat baik, jika Anda membeli nomor menggunakan IP Address yg sama secara berulangkali, WhatsApp akan mendeteksi adanya aktivitas mencurigakan, jadi SMS tidak akan terkirim.
`.trim(), footer, 'Owner', '.owner')
handler.help = ['listnokos']
handler.tags = ['info']
handler.command = /^list(nokos|noluar)$/i

module.exports = handler