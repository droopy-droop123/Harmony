module.exports = {
     main: function(bot, msg) {
     var mention = message.mentions.users.array()[0]
	var kickPerms = message.guild.member(bot.user).hasPermission('KICK_MEMBERS')
	if (mention === null) {
		message.channel.send('Please mention a user, that you would like to kick.')
	} else {
		if (!kickPerms) {
			message.channel.send("Harmony doesn't have enough permissions to kick any user.")
		} else {
			var kickable = message.guild.member(mention).kickable
			if (!kickable) {
				message.channel.send(mention + " isn't kickable.")
			} else {
				message.guild.member(mention).kick()
				message.channel.send(mention + ' has been kicked.')
			}
		}
	}
    },
    args: '<mention>'
    help: 'Kick a user'
};
