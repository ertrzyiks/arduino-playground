var five = require("johnny-five"),
    board = new five.Board();

var led1, led2;

board.on("ready", function() {
    led1 = new five.Led(11);
    led2 = new five.Led(13);

    this.repl.inject({
        led1: led1,
        led2: led2
    });

    led1.off();
    led2.off();
});


var XboxController = require('xbox-controller');
var xbox = new XboxController;

xbox.on('lefttrigger', function(position){
    if (led1) {
        led1.brightness(position);
    }
});

xbox.on('righttrigger', function(position){
    if (led2) {
        led2.brightness(position);
    }
});
