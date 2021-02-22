window.addEventListener('load', function () {
  // Grab the existing history from local storage
  var existingHistory = JSON.parse(localStorage.getItem('history'));
  var historyItems = [];

  // Function to get the forecast, loop through only the days of the week and render data to the page
  function getForecast(searchValue) {
    var endpoint = `http://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&appid=d91f911bcf2c0f925fb6535547a5ddc9&units=imperial`;
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        // Select our forecast element and add a header to it
        var forecastEl = document.querySelector('#forecast');
        forecastEl.innerHTML = '<h4 class="mt-3">5-Day Forecast:</h4>';

        // Create a div and give it a class of row
        forecastRowEl = document.createElement('div');
        forecastRowEl.className = '"row"';

        // Loop over all forecasts (by 3-hour increments)
        for (var i = 0; i < data.list.length; i++) {
          // Only look at forecasts around 3:00pm
          if (data.list[i].dt_txt.indexOf('15:00:00') !== -1) {
            // Create HTML elements for a bootstrap card
            var colEl = document.createElement('div');
            colEl.classList.add('col-md-2');
            var cardEl = document.createElement('div');
            cardEl.classList.add('card', 'bg-primary', 'text-white');
            var windEl = document.createElement('p');
            windEl.classList.add('card-text');
            windEl.textContent = `Wind Speed: ${data.list[i].wind.speed} MPH`;
            var humidityEl = document.createElement('p');
            humidityEl.classList.add('card-text');
            humidityEl.textContent = `Humidity : ${data.list[i].main.humidity} %`;
            var bodyEl = document.createElement('div');
            bodyEl.classList.add('card-body', 'p-2');
            var titleEl = document.createElement('h5');
            titleEl.classList.add('card-title');
            titleEl.textContent = new Date(
              data.list[i].dt_txt
            ).toLocaleDateString();
            var imgEl = document.createElement('img');
            imgEl.setAttribute(
              'src',
              `http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png`
            );
            var p1El = document.createElement('p');
            p1El.classList.add('card-text');
            p1El.textContent = `Temp: ${data.list[i].main.temp_max} °F`;
            var p2El = document.createElement('p');
            p2El.classList.add('card-text');
            p2El.textContent = `Humidity: ${data.list[i].main.humidity}%`;

            // Merge together and put on page
            colEl.appendChild(cardEl);
            bodyEl.appendChild(titleEl);
            bodyEl.appendChild(imgEl);
            bodyEl.appendChild(windEl);
            bodyEl.appendChild(humidityEl);
            bodyEl.appendChild(p1El);
            bodyEl.appendChild(p2El);
            cardEl.appendChild(bodyEl);
            forecastEl.appendChild(colEl);
          }
        }
      });
  }

  // Helper function to fetch and display the UV index
  function getUVIndex(lat, lon) {
    fetch(
      `http://api.openweathermap.org/data/2.5/uvi?appid=d91f911bcf2c0f925fb6535547a5ddc9&lat=${lat}&lon=${lon}`
    )
      .then((res) => res.json())
      .then((data) => {
        var bodyEl = document.querySelector('.card-body');
        var uvEl = document.createElement('p');
        uvEl.id = 'uv';
        uvEl.textContent = 'UV Index: ';
        var buttonEl = document.createElement('span');
        buttonEl.classList.add('btn', 'btn-sm');
        buttonEl.innerHTML = data.value;

        switch (data.value) {
          case data.value < 3:
            buttonEl.classList.add('btn-success');
            break;
          case data.value < 7:
            buttonEl.classList.add('btn-warning');
            break;
          default:
            buttonEl.classList.add('btn-danger');
        }

        bodyEl.appendChild(uvEl);
        uvEl.appendChild(buttonEl);
      });
  }

  const handleHistory = (term) => {
    if (existingHistory && existingHistory.length > 0) {
      var existingEntries = JSON.parse(localStorage.getItem('history'));
      var newHistory = [...existingEntries, term];
      localStorage.setItem('history', JSON.stringify(newHistory));
      // If there is no history, create one with the searchValue and save it localStorage
    } else {
      historyItems.push(term);
      localStorage.setItem('history', JSON.stringify(historyItems));
    }
  };

  // Function that preforms the actual API request and creates elements to render to the page
  function searchWeather(searchValue) {
    var endpoint = `http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=d91f911bcf2c0f925fb6535547a5ddc9&units=imperial`;
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        // Invoke our history method
        handleHistory(searchValue);
        // Clear any old content
        todayEl = document.querySelector('#today');
        todayEl.textContent = ' ';

        // Create html content for current weather
        var titleEl = document.createElement('h3');
        titleEl.classList.add('card-title');
        titleEl.textContent = `${
          data.name
        } (${new Date().toLocaleDateString()})`;
        var cardEl = document.createElement('div');
        cardEl.classList.add('card');
        var windEl = document.createElement('p');
        windEl.classList.add('card-text');
        var humidEl = document.createElement('p');
        humidEl.classList.add('card-text');
        var tempEl = document.createElement('p');
        tempEl.classList.add('card-text');
        humidEl.textContent = `Humidity: ${data.main.humidity} %`;
        tempEl.textContent = `Temperature: ${data.main.temp} °F`;
        var cardBodyEl = document.createElement('div');
        cardBodyEl.classList.add('card-body');
        var imgEl = document.createElement('img');
        imgEl.setAttribute(
          'src',
          `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
        );

        // Append all the content that we created
        titleEl.appendChild(imgEl);
        cardBodyEl.appendChild(titleEl);
        cardBodyEl.appendChild(tempEl);
        cardBodyEl.appendChild(humidEl);
        cardBodyEl.appendChild(windEl);
        cardEl.appendChild(cardBodyEl);
        todayEl.appendChild(cardEl);

        // Invoke our forecast and UV functions
        getForecast(searchValue);
        getUVIndex(data.coord.lat, data.coord.lon);
      });
  }

  // Helper function to create a new row
  function makeRow(searchValue) {
    // Create a new `li` element and add classes/text to it
    var liEl = document.createElement('li');
    liEl.classList.add('list-group-item', 'list-group-item-action');
    liEl.id = searchValue;
    var text = searchValue;
    liEl.textContent = text;

    // Select the history element and add an event to it
    liEl.addEventListener('click', (e) => {
      if (e.target.tagName === 'LI') {
        searchWeather(e.target.textContent);
      }
    });
    document.getElementById('history').appendChild(liEl);
  }

  // Render existing history to the page.
  if (existingHistory && existingHistory.length > 0) {
    existingHistory.forEach((item) => makeRow(item));
  }

  // Helper function to get a search value.
  function getSearchVal() {
    var searchValue = document.querySelector('#search-value').value;
    searchWeather(searchValue);
    makeRow(searchValue);
  }

  // Attach our getSearchVal function to the search button
  document
    .querySelector('#search-button')
    .addEventListener('click', getSearchVal);
});
