const TOKEN = process.argv[2]
console.log(TOKEN)
const commandsEmmiter = require("./commandsEmmiter.js")
commandsEmmiter.emmit(TOKEN)
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply(`Pong! Latency is ${Date.now() - interaction.createdTimestamp}ms`);
  }
  if(interaction.commandName === "info"){
    interaction.reply("Comming soon!")
  }
});

client.login(TOKEN);
