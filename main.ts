let SoinuLimitea = 125
basic.forever(function () {
    if (input.soundLevel() > SoinuLimitea) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.clearScreen()
    }
    basic.pause(500)
})
