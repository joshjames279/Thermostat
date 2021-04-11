import {Thermostat} from "./src/thermostat.js";

var mykey = config.MY_KEY

window.onload = function(){

const thermostat = new Thermostat();

const thermoTemp = $("#Temp")[0];
const upB = $("#up")[0];
const downB = $("#down")[0];
const resetB = $("#reset")[0];
const onB = $("#on")[0];
const psm = $("#psm")[0];
const offB = $("#off")[0];
const submitButton = $("#SubmitButton")[0];
const cityName = $("#CityName")[0];
const cityTemp2 = $("#CityTemp2")[0];

$(submitButton).ajaxError(function() {
    alert("an error has occured");   
});

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

$(submitButton).click( function() {
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${mykey}&units=metric`;
    $.get(url)
    .then(data => {
    $(cityTemp2).html(`${data.name},${data.sys.country} : ${Math.round(data.main.temp)}°C`)
    },
    rejection => {
        $(cityTemp2).html('Invalid city, please try again')
    })
});

};