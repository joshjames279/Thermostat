import {Thermostat} from "./src/thermostat.js";

const thermostat = new Thermostat();
console.log(thermostat)

const thermoTemp = document.getElementById("Temp");
const upB = document.getElementById("up")
const downB = document.getElementById("down")
const resetB = document.getElementById("reset")
const onB = document.getElementById("on")
const psm = document.getElementById("psm")
const offB = document.getElementById("off")

thermoTemp.innerHTML = thermostat.temperature

upB.addEventListener('click', function() {
    thermoTemp.innerHTML = thermostat.up()
})

downB.addEventListener('click', function() {
    thermoTemp.innerHTML = thermostat.down()
})

resetB.addEventListener('click', function() {
    thermoTemp.innerHTML = thermostat.reset()
})

    psm.innerHTML = `PSM:${thermostat.powerSaving}`

offB.addEventListener('click', function() {
    thermostat.powerSaving = 'off'
    psm.innerHTML = `PSM:${thermostat.powerSaving}`
})

onB.addEventListener('click', function() {
    if(thermostat.temperature > 25){
        thermostat.temperature = 25;
    }
    thermostat.powerSaving = 'on'
    psm.innerHTML = `PSM:${thermostat.powerSaving}`
    thermoTemp.innerHTML = thermostat.temperature
})