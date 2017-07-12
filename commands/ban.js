module.exports = {
    main: function(bot, msg) {
        if (msg.member.hasPermission("BAN_MEMBERS") == true) {
            const mention = msg.mentions.users.first()
            var banPerms = msg.guild.member(bot.user).hasPermission('BAN_MEMBERS')
            if (!mention) {
                msg.channel.send('Please mention a user, that you would like to ban.')
            }
            else {
                if (!banPerms) {
                    msg.channel.send("Harmony doesn't have enough permissions to ban any user.")
                }
                else {
                    var bannable = msg.guild.member(mention).bannable
                    if (!bannable) {
                        msg.channel.send(mention + " isn't bannable.")
                    }
                    else {
                        msg.guild.ban(mention)
                        msg.channel.send(mention + ' has been banned.')
                    }
                }
            }
        }
    },
    args: '<mention>',
    help: 'Ban a user'
};
