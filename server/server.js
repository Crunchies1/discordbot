const TOKEN = require('./secret.js')
const Discord = require('discord.js')
const client = new Discord.Client()

client.once('ready', () => {
  console.log('Ready!')
})

client.login(TOKEN)
