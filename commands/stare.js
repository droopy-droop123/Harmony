module.exports = {
    main: function(bot, msg) {
        var WolkeHelper = require("wolke-api");
        var WolkeApi = new WolkeHelper({
            version: 1, //current API versions are 1 and 2 
            nsfw: false //a boolean for NSFW switching 
        }); //the constructor arguments are optional 
        const user = message.mentions.users.first();
        WolkeApi.picture("stare").then((result) => {
            if (user) {
                const embed = new Discord.RichEmbed()
                    .setTitle(`${message.author.username} stared at ${user.username}`)
                    .setColor("#808080")
                    .setImage(result.url)
                    .setFooter('©2017 Felix#1330', 'http://orig13.deviantart.net/f7a2/f/2016/343/a/b/isana_yashiro_minimal_icon_by_lol123xb-dar48hx.jpg')

                message.channel.sendEmbed(embed)
            }
            if (!user) {
                const embed = new Discord.RichEmbed()
                    .setTitle(`Tsuda stared at the lonely ${message.author.username}`)
                    .setColor("#808080")
                    .setImage(result.url)
                    .setFooter('©2017 Felix#1330', 'http://orig13.deviantart.net/f7a2/f/2016/343/a/b/isana_yashiro_minimal_icon_by_lol123xb-dar48hx.jpg')

                message.channel.sendEmbed(embed)
            }
        }).catch((error) => {
            console.log(error.toString());
        })
    },
    args: '<mention>',
    help: 'Start a staring contest'
};
