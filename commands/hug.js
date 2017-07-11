module.exports = {
     main: function(bot, msg) {
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
