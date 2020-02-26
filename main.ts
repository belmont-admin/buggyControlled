radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        kitronik_servo_lite.forward()
    } else if (receivedNumber == 2) {
        kitronik_servo_lite.left()
    } else if (receivedNumber == 3) {
        kitronik_servo_lite.right()
    } else {
        kitronik_servo_lite.stop()
    }
})
basic.showIcon(IconNames.Heart)
radio.setGroup(13)
