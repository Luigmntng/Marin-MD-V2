function handler(m) {
const q = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": ""
	},
	"message": {
		"contactMessage": {
			"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Lui;;;FN:Elyas Ganteng\nORG:Elyas Ganteng;\nTEL;type=CELL;type=VOICE;waid=6282146092695:+62 821-4609-2695\nEND:VCARD"
		}
	},
	"participant": "0@s.whatsapp.net"
}

conn.sendContact(m.chat, '6282146092695', 'Lui gmntng', m)
m.reply(m.chat,'*Mau masukin bot ini ke gc lu?*\n*Chat!!*', q)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
