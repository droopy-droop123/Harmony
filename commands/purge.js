module.exports = {
  main: function(bot, msg) {
    var deletePerms = msg.guild.member(bot.user).hasPermission('MANAGE_MESSAGES')
    var args = msg.content.split(' ')
    var amount = parseInt(args[0])
    var mentions = msg.mentions.users.array()

    if (!deletePerms) {
      return msg.channel.send("Harmony doesn't have enough permissions to delete messages.")
    }
    else if (isNaN(amount)) {
      return msg.channel.send('Please provide the amount of messages you would like to delete.')
    }
    else if (amount < 1) {
      return msg.channel.send('Please provide an amount of messages you would like to delete (has to be above 0).')
    }
    else if (mentions.length === 0) {
      msg.delete()
      msg.channel.fetchMessages({
        limit: amount
      }).then(deleteMsgs => msg.channel.bulkDelete(deleteMsgs))
    }
    else {
      msg.delete()
      var deleteMsgs = []
      msg.channel.fetchMessages({
        limit: amount
      }).then(function(value) {
        value = value.array()
        for (var i = 0; i < value.length; i++) {
          if (mentions.includes(value[i].author)) {
            deleteMsgs.push(value[i])
          }
          msg.channel.bulkDelete(deleteMsgs)
        }
      })
    }
  },
  args: '<number> <mention>',
  help: 'Delete an amount of text'
};
