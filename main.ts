input.onButtonPressed(Button.A, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.UntilDone)
    how_many_cookies_you_took += 1
    basic.showNumber(how_many_cookies_you_took)
})
let how_many_cookies_you_took = 0
basic.showIcon(IconNames.Square)
basic.showIcon(IconNames.SmallSquare)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.clearScreen()
how_many_cookies_you_took = 0
basic.forever(function () {
    if (how_many_cookies_you_took == 5) {
        for (let index = 0; index < 2; index++) {
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.InBackground)
            basic.showString("  YOU WON" ,50)
how_many_cookies_you_took = 0
        }
        basic.pause(2000)
        basic.clearScreen()
        music.stopAllSounds()
    }
})
basic.forever(function () {
    while (how_many_cookies_you_took > 0) {
        if (input.pinIsPressed(TouchPin.P0)) {
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wawawawaa), music.PlaybackMode.UntilDone)
        }
    }
})
