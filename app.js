import {Thermostat} from "./src/thermostat.js";

window.onload = function(){

const thermostat = new Thermostat();

const thermoTemp = $("#Temp")[0];
const upB = $("#up")[0]
const downB = $("#down")[0]
const resetB = $("#reset")[0]
const onB = $("#on")[0]
const psm = $("#psm")[0]
const offB = $("#off")[0]

$(thermoTemp).html(thermostat.temperature)
$(psm).html(`PSM:${thermostat.powerSaving}`)

$(upB).click(function() {
    $(thermoTemp).html(thermostat.up())
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
    $(thermoTemp).html(thermostat.down())
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
    $(thermoTemp).html(thermostat.reset())
    $(thermoTemp).css("color", "black")
})

$(offB).click(function() {
    thermostat.powerSaving = 'off'
    $(psm).html(`PSM:${thermostat.powerSaving}`)
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
    $(psm).html(`PSM:${thermostat.powerSaving}`)
    $(thermoTemp).html(thermostat.temperature)
})

}