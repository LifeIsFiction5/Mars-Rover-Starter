const Command = require("./command");

class Message {
   constructor(name, commands) {
      this.name = "";
      this.commands = [];
   }
}

let commands = [new Command('MODE_CHANGE', 'LOW POWER'), new Command('STATUS CHECK')]

let message = new Message('Test message with two commands', commands);

module.exports = Message;