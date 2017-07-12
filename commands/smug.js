module.exports = {
    main: function(bot, msg) {
        var Discord = require('discord.js')
        var WolkeHelper = require("wolke-api");
        var WolkeApi = new WolkeHelper({
            version: 1, //current API versions are 1 and 2 
            nsfw: false //a boolean for NSFW switching 
        }); //the constructor arguments are optional 
        WolkeApi.picture("smug").then((result) => {
            const embed = new Discord.RichEmbed()
                .setTitle(`${msg.author.username} is aiming to be the next smug Wendy's`)
                .setColor("#808080")
                .setImage(result.url)

            msg.channel.sendEmbed(embed)
        }).catch((error) => {
            console.log(error.toString());
        })
    },
    args: '<mention>',
    help: 'Become the new smug Wendy\'s'
};
