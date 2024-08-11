class Command {
   constructor(commandType, value) {
     this.commandType = commandType;
     if (!commandType) {
       throw Error("Command type required.");
     }
     this.value = value; 
   }
 
 }

const commandTest = new Command("test commandType", "test value");

 module.exports = Command;