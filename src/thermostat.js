class Thermostat {
  constructor() {
    this.DEFAULT_TEMPERATURE = 20;
    this.temperature = this.DEFAULT_TEMPERATURE;
    this.MINIMUM_TEMPERATURE = 10;
    this.isPowerSaving = true;
    this.MAXIMUM_TEMPERATURE_PMS_ON = 25;   
    this.MAXIMUM_TEMPERATURE_PMS_OFF = 32;
    
  }

  up() {
      if (this.isMaximumTemperature()) {
       throw "Maximum temperature raised";
      }
     this.temperature += 1
  }

  down() {
    if (this.temperature > this.MINIMUM_TEMPERATURE) {
      this.temperature -= 1
    }
  }

  switchOn() {
    this.isPowerSaving = true
  }

  switchOff() {
    this.isPowerSaving = false
  }

  isMaximumTemperature() {
    if (this.isPowerSaving === false) {
      return this.temperature === this.MAXIMUM_TEMPERATURE_PMS_OFF;
    }
    return this.temperature === this.MAXIMUM_TEMPERATURE_PMS_ON;
  }

  resetTemp() {
    this.temperature = this.DEFAULT_TEMPERATURE;
  }

  energyUsage() {
    if (this.temperature < 18) {
    return "low-usage"}
    else if (this.temperature > 25) {
    return "high-usage"} else {
    return "medium-usage"}
  }
};


