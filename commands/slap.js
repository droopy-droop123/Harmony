module.exports = {
    main: function(bot, msg) {
        var Discord = require('discord.js')
        var WolkeHelper = require("wolke-api");
        var WolkeApi = new WolkeHelper({
            version: 1, //current API versions are 1 and 2 
            nsfw: false //a boolean for NSFW switching 
        }); //the constructor arguments are optional 
        const user = msg.mentions.users.first();
        WolkeApi.picture("slap").then((result) => {
			if (user === msg.author) {
            const embed = new Discord.RichEmbed()
                .setTitle(`Harmony slapped the annoying ${msg.author.username}`)
                .setColor("#808080")
                .setImage(result.url)

            msg.channel.sendEmbed(embed)
            return
			}
            if (user) {
                const embed = new Discord.RichEmbed()
                    .setTitle(`${msg.author.username} slapped ${user.username}`)
                    .setColor("#808080")
                    .setImage(result.url)

                msg.channel.sendEmbed(embed)
            }
            if (!user) {
                const embed = new Discord.RichEmbed()
                    .setTitle(`Harmony slapped the annoying ${msg.author.username}`)
                    .setColor("#808080")
                    .setImage(result.url)

                msg.channel.sendEmbed(embed)
            }
        }).catch((error) => {
            console.log(error.toString());
        })
    },
    args: '<mention>',
    help: 'Slap that annoyance'
};
