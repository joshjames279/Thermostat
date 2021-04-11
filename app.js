import {Thermostat} from "./src/thermostat.js";

window.onload = function(){

const thermostat = new Thermostat();

const thermoTemp = $("#Temp")[0];
const upB = $("#up")[0];
const downB = $("#down")[0];
const resetB = $("#reset")[0];
const onB = $("#on")[0];
const psm = $("#psm")[0];
const offB = $("#off")[0];
const cityTemp = $("#CityTemp")[0];
const cityRange = $("#CityRange")[0]

$(thermoTemp).html(`${thermostat.temperature}°C`);
$(psm).html(`PSM:${thermostat.powerSaving}`);

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
});

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
});

$(resetB).click(function() {
    $(thermoTemp).html(thermostat.reset())
    $(thermoTemp).css("color", "black")
});

$(offB).click(function() {
    thermostat.powerSaving = 'off'
    $(psm).html(`PSM:${thermostat.powerSaving}`)
});

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
});

$.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=da74f2d377da060fee93b6ae36a01645&units=metric')
.then(data => {
    $(cityTemp).html(`${data.name},${data.sys.country} : ${Math.round(data.main.temp)}°C`)
    $(cityRange).html(`High:${Math.round(data.main.temp_max)}°C Low:${Math.round(data.main.temp_min)}°C`)
})

};