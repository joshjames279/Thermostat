export class Thermostat{
  constructor(ps = 'activated', temperature = 20, min = 10){
    this.temperature = temperature;
    this.minimum = min;
    this.powerSaving = ps;
  }
  powerSav(){
    if(this.powerSaving === 'activated'){
      this.max = 25;
      return this.max;
    }
    else if(this.powerSaving === 'deactivated'){
      this.max = 32;
      return this.max;
    }
  }
  up(){
    this.powerSav();

    if(this.temperature < this.max){
      this.temperature++;
    }
    return this.temperature;
  }
  down(){
    if(this.temperature > this.minimum){
      this.temperature--;
    }
    return this.temperature;
  }
  reset(){
    this.temperature = 20;
    return this.temperature;
  }
  usage(){
    if(this.temperature < 18){
      return 'low';
    }
    else if(this.temperature > 25){
      return 'high';
    }
    else if(18 <= this.temperature <= 25 ){
      return 'medium';
    }
  }
}