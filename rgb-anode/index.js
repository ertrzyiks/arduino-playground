var five = require("johnny-five");
var animation = require('animation');
var Animation = animation.Animation;
var easing = require('./easing');

five.Board().on("ready", function() {
    var led = new five.Led.RGB({
        pins: {
            red: 9,
            green: 10,
            blue: 11
        },
        isAnode: true
    });

    var currentColor = [0, 0, 0];

    this.repl.inject({
        led: led
    });

    function doAnimation() {
        var newColor = [
            Math.floor(Math.random() * 255),
            Math.floor(Math.random() * 255),
            Math.floor(Math.random() * 255)
        ];

        animateToColor(led, currentColor, newColor, 500, function () {
            currentColor = newColor;

            setTimeout(doAnimation, 2000);
        });
    }

    led.on();
    led.color(currentColor);

    doAnimation();
});

function animateToColor(led, from, to, time, cb) {
    var animation = new Animation({
        execution: '5ms',
        timeout:   null,
        toggle:    false,
        frame:     '16ms'
    });

    var currentTime = 0;

    animation.on('stop', cb);

    animation.on('tick', function (dt) {
        currentTime += dt;

        var progress = easing.easeInOutCubic(currentTime / time);

        if (progress > 1.0) {
            animation.stop();
            return;
        }

        var col = to
            .map(function (value, index) {
                return value - from[index];
            })
            .map(function (value) {
                return Math.floor(value * progress);
            })
            .map(function (value, index) {
                return from[index] + value;
            });

        led.color(col);
    });

    animation.start();
}
