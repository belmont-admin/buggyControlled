radio.onReceivedString(function (receivedString) {
    if (receivedString == "red") {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (receivedString == "blue") {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    } else if (receivedString == "green") {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (receivedString == "orange") {
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    } else if (receivedString == "yellow") {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    } else if (receivedString == "indigo") {
        strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
    } else if (receivedString == "violet") {
        strip.showColor(neopixel.colors(NeoPixelColors.Violet))
    } else if (receivedString == "purple") {
        strip.showColor(neopixel.colors(NeoPixelColors.Purple))
    } else if (receivedString == "white") {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
    } else if (receivedString == "black") {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
    strip.show()
})
input.onButtonPressed(Button.AB, function () {
    if (channel == one) {
        channel = all
        basic.showIcon(IconNames.Yes)
    } else {
        channel = one
        basic.showIcon(IconNames.Heart)
    }
    radio.setGroup(channel)
})
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        kitronik_servo_lite.forward()
    } else if (receivedNumber == 2) {
        kitronik_servo_lite.left()
    } else if (receivedNumber == -2) {
        kitronik_servo_lite.right()
    } else if (receivedNumber == -1) {
        kitronik_servo_lite.backward()
    } else if (receivedNumber == 0) {
        kitronik_servo_lite.stop()
    } else {
        kitronik_servo_lite.stop()
    }
})
let strip: neopixel.Strip = null
let channel = 0
let one = 0
let all = 0
all = 200
one = 1
channel = one
basic.showIcon(IconNames.Heart)
radio.setGroup(channel)
strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
strip.setBrightness(25)
