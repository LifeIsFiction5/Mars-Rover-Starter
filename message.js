const Command = require("./command");

class Message {
   constructor(name, commands) {
      if (!name) {
         throw Error ("Name required.")
      };
      this.name = name;
      this.commands = commands;
   }
}

let messageTest = new Message("test name", ['MODE_CHANGE', 'LOW POWER']);



module.exports = Message;