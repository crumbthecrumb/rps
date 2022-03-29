radio.onReceivedNumber(function (receivedNumber) {
    svar_2 = receivedNumber
})
function restart () {
    go = 0
    svar = 0
    svar_2 = 0
    basic.clearScreen()
}
input.onButtonPressed(Button.A, function () {
    if (go == 0) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        svar = 1
        radio.sendNumber(1)
        basic.showLeds(`
            . . . . .
            . # # . .
            # # # # #
            # # # # #
            . # # # .
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (go == 0) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        svar = 3
        radio.sendNumber(3)
        basic.showLeds(`
            . # . . .
            # # . . #
            # . . . #
            # . . . #
            . # # # .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    if (go == 0) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        svar = 2
        radio.sendNumber(2)
        basic.showIcon(IconNames.Scissors)
    }
})
let svar = 0
let go = 0
let svar_2 = 0
radio.setGroup(88)
radio.setTransmitPower(1)
restart()
basic.forever(function () {
    if (svar_2 > 0 && svar > 0) {
        radio.sendNumber(svar)
        go = 1
        basic.pause(500)
        basic.clearScreen()
        if (svar == 1) {
            led.plot(0, 2)
            led.plot(0, 1)
            led.plot(1, 2)
            led.plot(1, 1)
        } else if (svar == 2) {
            led.plot(0, 2)
            led.plot(1, 1)
        } else {
            led.plot(0, 2)
            led.plot(0, 1)
            led.plot(1, 2)
        }
        if (svar_2 == 1) {
            led.plot(3, 2)
            led.plot(3, 1)
            led.plot(4, 2)
            led.plot(4, 1)
        } else if (svar_2 == 2) {
            led.plot(4, 2)
            led.plot(3, 1)
        } else {
            led.plot(3, 2)
            led.plot(4, 1)
            led.plot(4, 2)
        }
        music.playMelody("C C5 - - - - - - ", 360)
        basic.pause(2000)
        if (svar == svar_2) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                # # # # #
                . . . . .
                `)
            music.playMelody("E B C5 A B G A G ", 360)
        } else if (svar == 1 && svar_2 == 2 || svar == 2 && svar_2 == 3 || svar == 3 && svar_2 == 1) {
            basic.showIcon(IconNames.Happy)
            music.playMelody("G B A G C5 B A C5 ", 360)
        } else {
            basic.showIcon(IconNames.Sad)
            music.playMelody("G F G A - F E D ", 360)
        }
        basic.pause(2000)
        restart()
    }
})
