/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Oct 2024
 * This program counts down when you press the A Button
*/

//variables
let neopixelStrip: neopixel.Strip = null
let numberCountdown: number = 0

//setup
basic.showIcon(IconNames.Happy)
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()

//countdown
input.onButtonPressed(Button.A, function () {
    while (numberCountdown < 4) {
        basic.clearScreen()
        numberCountdown = 0

        while (numberCountdown <= 5) {
            basic.pause(500)
            numberCountdown = numberCountdown + 1
        }

        basic.showIcon(IconNames.Happy)
    }

// press "B" button
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    numberCountdown = 5

    while (numberCountdown >= -1) {
        basic.pause(500)

        numberCountdown = numberCountdown - 1
    }

    basic.showIcon(IconNames.Happy)
})}
)