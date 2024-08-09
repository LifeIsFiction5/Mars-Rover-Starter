const Command = require("./command.js");
const Message = require("./message.js");

class Rover {
   constructor(position) {
      this.position = position;
      this.mode = 'NORMAL';
      let generatorWatts = 110;
      this.generatorWatts = generatorWatts;

   }

   receiveMessage(message) {
      let output = {
         'message': message.name,
         'results': []
      }
      for (let i=0; i < message.commands.length; i++) {
         const messageObject = message.commands[i]
            if (messageObject.commandType === 'MOVE' && this.mode === 'NORMAL') {
               this.position = messageObject.value
               output.results.push({completed: true})
            } else { output.results.push({completed: false})
            }
            if (messageObject.commandType === 'STATUS_CHECK') {
               output.results.push(
                  {completed: true,
                   roverStatus: {
                     mode: this.mode,
                     generatorWatts: this.generatorWatts,
                     position: this.position
                  }});
            if (messageObject.commandType === 'MODE_CHANGE') {
               this.mode = messageObject.value;
               output.results.push({completed: true});
            }
            }
      }
      return output;
   }
}

module.exports = Rover;