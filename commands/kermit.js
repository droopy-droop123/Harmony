module.exports = {
    main: function(bot, msg) {
        var Discord = require('discord.js')
        var WolkeHelper = require("wolke-api");
        var WolkeApi = new WolkeHelper({
            version: 1, //current API versions are 1 and 2 
            nsfw: false //a boolean for NSFW switching 
        }); //the constructor arguments are optional 
        WolkeApi.picture("kermit").then((result) => {
            const embed = new Discord.RichEmbed()
                .setColor("#808080")
                .setImage(result.url)
                .setFooter('©2017 Felix#1330', 'http://orig13.deviantart.net/f7a2/f/2016/343/a/b/isana_yashiro_minimal_icon_by_lol123xb-dar48hx.jpg')

            msg.channel.sendEmbed(embed)
        }).catch((error) => {
            console.log(error.toString());
        })
    },
    args: '<mention>',
    help: 'Kermit the green frog'
};
