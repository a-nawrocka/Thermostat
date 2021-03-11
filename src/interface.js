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

  displayWeather("London");

  // $('#current-city').on('change', () => {  //on event "change"
  //   let city = $('#current-city').val();
  //   displayWeather(city);
  // })

  $('#select-city').on('submit', (event) => { //on event "submit"
    event.preventDefault();
    let city = $('#current-city').val();
    displayWeather(city);
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  }

  function displayWeather(city) {
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    let apiKey = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    let units = '&units=metric';
    $.get(url + apiKey + units, function(data) {
      $('#current-temperature').text(data.main.temp);
      $('#feels_like').text(data.main.feels_like);
    })
  }

})
