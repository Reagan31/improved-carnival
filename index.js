var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Raven Checker için yeni dönem - Votre Destek",
assets : {
large_image : "votre",
large_text : "https://discord.gg/EpYykbZmUp",
small_image : "static",
small_text : "https://discord.gg/DYMtpS4Tjd"  // bu gözükmeyebilir!!
},
buttons : [{label : "Raven Checker" , url : "https://discord.gg/DYMtpS4Tjd"},{label : "Votre Destek",url : "https://discord.gg/EpYykbZmUp"}] //kendinize göre yazın
}
})
})
client.login({ clientId : "995297321799655455" }).catch(console.error);