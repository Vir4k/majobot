const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  try {
    let output = '';
    Object.keys(require('../package').dependencies).forEach((pack) => output += pack + ', ');
    
	let finaloutput = output.split("...")

    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle("Majo modules list")
	.setDescription(finaloutput)
    //.setDescription(output)
    message.channel.send(embed);
  } catch (err) {
    message.channel.send({embed: {
                color: 16734039,
                description: "Something went wrong... :cry:"
            }})
  }
}

module.exports.help = {
    name: "modules",
    description: "Returns a list of dependencies Majo uses",
    usage: "modules",
    type: "General" 
}