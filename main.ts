let leitura = 0
basic.forever(function () {
    leitura = pins.analogReadPin(AnalogPin.P0)
    if (leitura < 500) {
        basic.showIcon(IconNames.No)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(2000)
        basic.showNumber(leitura)
        basic.pause(2000)
    } else {
        basic.showIcon(IconNames.Yes)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(2000)
        basic.showNumber(leitura)
        basic.pause(2000)
    }
})
