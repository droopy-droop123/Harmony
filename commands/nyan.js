module.exports = {
    main: function(bot, msg) {
        var Discord = require('discord.js')
        var WolkeHelper = require("wolke-api");
        var WolkeApi = new WolkeHelper({
            version: 1, //current API versions are 1 and 2 
            nsfw: false //a boolean for NSFW switching 
        }); //the constructor arguments are optional 
        WolkeApi.picture("nyan").then((result) => {
            const embed = new Discord.RichEmbed()
                .setTitle(`${msg.author.username} lets out a cute nyan~`)
                .setColor("#808080")
                .setImage(result.url)

            msg.channel.sendEmbed(embed)
        }).catch((error) => {
            console.log(error.toString());
        })
    },
    args: '<mention>',
    help: 'Nyaaaaaaaan~'
};
