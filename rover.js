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
      };

      for (let i=0; i < message.commands.length; i++) {
         const messageObject = message.commands[i];
         let result = { completed: false };
         
         if (messageObject.commandType === 'MOVE') {
            if (this.mode === 'NORMAL') {
                this.position = messageObject.value;
                result.completed = true;
            }
        } else if (messageObject.commandType === 'STATUS_CHECK') {
            result = {
                completed: true,
                roverStatus: {
                    mode: this.mode,
                    generatorWatts: this.generatorWatts,
                    position: this.position
                }
            };
        } else if (messageObject.commandType === 'MODE_CHANGE') {
            this.mode = messageObject.value;
            result.completed = true;
        }

        output.results.push(result);
    }

    return output;
}
}

module.exports = Rover;