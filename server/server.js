const CLIENT_SECRET = require('./secret.js')
const Discord = require('discord.js')
const client = new Discord.Client()

client.once('ready', () => {
  console.log('Ready!')
})

client.login(CLIENT_SECRET)
