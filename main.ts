/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Bain Liao
 * Created on: Oct 2024
 * This program counts down from 4 to 0
*/

//variables
let neopixelStrip: neopixel.Strip = null
let countdown: number = 4

//setup
basic.showIcon(IconNames.Happy)
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()

//countdown from 4
input.onButtonPressed(Button.A, function () {
    //setup
    basic.clearScreen()
    countdown = 4
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    //countdown loop
    while (countdown > 0) {
        basic.showNumber(countdown)
        neopixelStrip.show()
        basic.pause(500)
        neopixelStrip.setPixelColor(countdown, neopixel.colors(NeoPixelColors.Red))
        countdown = countdown - 1
    }
    basic.showIcon(IconNames.Happy)
})