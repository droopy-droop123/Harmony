module.exports = {
    main: function(bot, msg) {
        var WolkeHelper = require("wolke-api");
        var WolkeApi = new WolkeHelper({
            version: 1, //current API versions are 1 and 2 
            nsfw: false //a boolean for NSFW switching 
        }); //the constructor arguments are optional 
        const user = msg.mentions.users.first();
        WolkeApi.picture("tickle").then((result) => {
            if (user) {
                const embed = new Discord.RichEmbed()
                    .setTitle(`${msg.author.username} tickled ${user.username}`)
                    .setColor("#808080")
                    .setImage(result.url)

                msg.channel.sendEmbed(embed)
            }
            if (!user) {
                const embed = new Discord.RichEmbed()
                    .setTitle(`Harmony tickled the sad looking ${msg.author.username}`)
                    .setColor("#808080")
                    .setImage(result.url)

                msg.channel.sendEmbed(embed)
            }
        }).catch((error) => {
            console.log(error.toString());
        })
    },
    args: '<mention>',
    help: 'Tickle someone'
};
