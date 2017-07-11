module.exports = {
    main: function(bot, msg) {
        var WolkeHelper = require("wolke-api");
        var WolkeApi = new WolkeHelper({
            version: 1, //current API versions are 1 and 2 
            nsfw: false //a boolean for NSFW switching 
        }); //the constructor arguments are optional 
        const user = msg.mentions.users.first();
        WolkeApi.picture("nom").then((result) => {
            if (user) {
                const embed = new Discord.RichEmbed()
                    .setTitle(`${msg.author.username} fed ${user.username} some good noms`)
                    .setColor("#808080")
                    .setImage(result.url)

                msg.channel.sendEmbed(embed)
            }
            if (!user) {
                const embed = new Discord.RichEmbed()
                    .setTitle(`Harmony fed the lonely ${msg.author.username} some sad noms`)
                    .setColor("#808080")
                    .setImage(result.url)

                msg.channel.sendEmbed(embed)
            }
        }).catch((error) => {
            console.log(error.toString());
        })
    },
    args: '<mention>',
    help: 'Give food to someone plox'
};
