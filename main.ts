input.onPinPressed(TouchPin.P0, function () {
	
})
input.onPinPressed(TouchPin.P1, function () {
	
})
basic.showLeds(`
    . # . . .
    . # . . .
    . # . . .
    . # . . .
    . # . . .
    `)
basic.forever(function () {
	
})
basic.forever(function () {
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
    basic.showLeds(`
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        `)
})
