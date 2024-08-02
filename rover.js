const Command = require("./command");
const Message = require("./message");

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

// const commands1 = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('MOVE', 1111111)];
// const commands2 = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
// const commands3 = [new Command("MOVE", ), new Command("STATUS_CHECK")];
// const message = new Message("Hi I'm the test message", commands2)
// const testRover = new Rover(98382)
// const roverReceiveMessage = testRover.receiveMessage(message)
// const roverStatus = roverReceiveMessage.results

// console.log(message)
// console.log(roverReceiveMessage)
// console.log(roverStatus.results)
// console.log('im the results', testRover.output)

module.exports = Rover;