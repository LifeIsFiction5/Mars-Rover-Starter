const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

  // TEST 7

  it("constructor sets position and default values for mode and generatorWatts", function () {
    let rover = new Rover('test generator watts');
    expect(rover.generatorWatts).toEqual(110);
  });

  // TEST 8
  it("responsse returned by receiveMessage contains the name of the message", function () {
    
  });

  // TEST 9

  // TEST 10

  // TEST 11

  // TEST 12

  // TEST 13

  // TEST 14
});
