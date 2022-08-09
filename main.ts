let step = 0
input.onGesture(Gesture.Shake, function () {
    step = 0
})
basic.forever(function () {
    step = 0
    basic.showNumber(0)
    led.stopAnimation()
})
