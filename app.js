import {Thermostat} from "./src/thermostat.js";

window.onload = function(){

const thermostat = new Thermostat();

const thermoTemp = document.getElementById("Temp");
const upB = document.getElementById("up")
const downB = document.getElementById("down")
const resetB = document.getElementById("reset")
const onB = document.getElementById("on")
const psm = document.getElementById("psm")
const offB = document.getElementById("off")

thermoTemp.innerHTML = thermostat.temperature
psm.innerHTML = `PSM:${thermostat.powerSaving}`

$(upB).click(function() {
    thermoTemp.innerHTML = thermostat.up()
    if(thermostat.usage() === 'low'){
        $(thermoTemp).css("color", "green")
        } 
    if(thermostat.usage() === 'medium'){
        $(thermoTemp).css("color", "black")
    }     
    if(thermostat.usage() === 'high'){
        $(thermoTemp).css("color", "red")
        } 
})

$(downB).click(function() {
    thermoTemp.innerHTML = thermostat.down()
    if(thermostat.usage() === 'low'){
        $(thermoTemp).css("color", "green")
        } 
    if(thermostat.usage() === 'medium'){
        $(thermoTemp).css("color", "black")
    }   
    if(thermostat.usage() === 'high'){
        $(thermoTemp).css("color", "red")
        }     
})

$(resetB).click(function() {
    thermoTemp.innerHTML = thermostat.reset()
    $(thermoTemp).css("color", "black")
})

$(offB).click(function() {
    thermostat.powerSaving = 'off'
    psm.innerHTML = `PSM:${thermostat.powerSaving}`
})

$(onB).click(function() {
    if(thermostat.temperature > 25){
        thermostat.temperature = 25;
    }
    if(thermostat.usage() === 'low'){
        $(thermoTemp).css("color", "green")
        } 
    if(thermostat.usage() === 'medium'){
        $(thermoTemp).css("color", "black")
    }
    thermostat.powerSaving = 'on'
    psm.innerHTML = `PSM:${thermostat.powerSaving}`
    thermoTemp.innerHTML = thermostat.temperature
})

}