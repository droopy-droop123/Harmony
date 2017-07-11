module.exports = {
     main: function(bot, msg) {
     const mention = message.mentions.users.first()
	var banPerms = message.guild.member(bot.user).hasPermission('BAN_MEMBERS')
	if (!mention) {
		message.channel.send('Please mention a user, that you would like to ban.')
	} else {
		if (!banPerms) {
			message.channel.send("Harmony doesn't have enough permissions to ban any user.")
		} else {
			var bannable = message.guild.member(mention).bannable
			if (!bannable) {
				message.channel.send(mention + " isn't bannable.")
			} else {
				message.guild.ban(mention)
				message.channel.send(mention + ' has been banned.')
			}
		}
    },
    args: '<mention>'
    help: 'Ban a user'
};
