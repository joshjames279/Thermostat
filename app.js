import {Thermostat} from "./src/thermostat"

let thermostat = new Thermostat()

let thermoTemp = document.getElementById("Temperature")

thermoTemp.innerHTML = thermostat.temperature