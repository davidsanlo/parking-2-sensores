let plazas = 0
let plaza2 = 0
let plaza1 = 0
let Distancia2 = 0
let Distancia1 = 0
basic.clearScreen()
basic.forever(function () {
    Distancia1 = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    Distancia2 = sonar.ping(
    DigitalPin.P2,
    DigitalPin.P8,
    PingUnit.Centimeters
    )
    if (Distancia1 < 15) {
        plaza1 = 0
    } else {
        plaza1 = 1
    }
    if (Distancia2 < 15) {
        plaza2 = 0
    } else {
        plaza2 = 1
    }
    plazas = plaza1 + plaza2
    basic.showNumber(plazas)
})
