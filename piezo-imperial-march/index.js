var five = require("johnny-five"),
    board = new five.Board();

board.on("ready", function() {
    var piezo = new five.Piezo(3);

    board.repl.inject({
        piezo: piezo
    });

    piezo.play({
        song: [
            ["G5", 1 / 2],
            [null, 1 / 2],
            ["G5", 1 / 2],
            [null, 1 / 2],
            ["G5", 3 / 4],
            [null, 1 / 4],
            ["D#5", 1 / 2],
            [null, 1 / 4],
            ["A#5", 1 / 4],
            ["G5", 1 / 2],
            [null, 1 / 4],
            ["D#5", 1 / 2],
            [null, 1 / 4],
            ["A#5", 1 / 4],
            ["G5", 3 / 4],

            [null, 1],

            ["D6", 3 / 4],
            [null, 1 / 4],
            ["D6", 3 / 4],
            [null, 1 / 4],
            ["D6", 3 / 4],
            [null, 1 / 4],
            ["D#6", 1 / 2],
            [null, 1 / 4],
            ["A#5", 1 / 4],
            ["F#5", 3 / 4],
            [null, 1 / 4],
            ["D#5", 1 / 2],
            [null, 1 / 4],
            ["A#5", 1 / 4],
            ["G5", 1 / 2],

            [null, 1 / 2]
        ],
        tempo: 100
    });

});
