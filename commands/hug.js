module.exports = {
    main: function(bot, msg) {
        var WolkeHelper = require("wolke-api");
        var WolkeApi = new WolkeHelper({
            version: 1, //current API versions are 1 and 2 
            nsfw: false //a boolean for NSFW switching 
        }); //the constructor arguments are optional 
        const user = message.mentions.users.first();
        WolkeApi.picture("hug").then((result) => {
            if (user) {
                const embed = new Discord.RichEmbed()
                    .setTitle(`${message.author.username} hugged ${user.username}`)
                    .setColor("#808080")
                    .setImage(result.url)

                message.channel.sendEmbed(embed)
            }
            if (!user) {
                const embed = new Discord.RichEmbed()
                    .setTitle(`Tsuda hugged the lonely ${message.author.username}`)
                    .setColor("#808080")
                    .setImage(result.url)

                message.channel.sendEmbed(embed)
            }
        }).catch((error) => {
            console.log(error.toString());
        })
    },
    args: '<mention>',
    help: 'Hug a user'
};
