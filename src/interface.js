$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').on('click', function() { // event listener
    thermostat.up(); // update model
    updateTemperature(); // update view
  })

  $('#temperature-down').click(function() { // this is an alternate version of .on('click'), with a sprinkle of jQuery syntactic sugar
    thermostat.down();
    updateTemperature();
  })

  $('#temperature-reset').on('click', () => {
    thermostat.resetTemp();
    updateTemperature();
  })

  $("#powersaving-on").on('click', ()=> {
    thermostat.switchOn();
    $('#power-saving-status').text("on");
    updateTemperature();
  })

  $("#powersaving-off").on('click', ()=> {
    thermostat.switchOff();
    $('#power-saving-status').text("off");
    updateTemperature();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  }

})
