$(document).ready(function() {
  // listen for save button clicks
  $('.saveBtn').on('click', function() {
    // get nearby values
    const value = $(this)
      .siblings('.description')
      .val();
    const time = $(this)
      .parent()
      .attr('id');

    // save in localStorage
    localStorage.setItem(time, value);

    // Show notification that item was saved to localStorage
    $('.notification').addClass('show');

    // Timeout to empty to fade out and empty the notification div
    setTimeout(function() {
      $('.notification').removeClass('show');
    }, 5000);
  });

  function hourUpdater() {
    // get current number of hours
    const currentHour = moment().hours();

    // loop over time blocks
    $('.time-block').each(function() {
      const blockHour = parseInt(
        $(this)
          .attr('id')
          .split('-')[1]
      );

      // check if we've moved past this time
      if (blockHour < currentHour) {
        $(this).addClass('past');
      } else if (blockHour === currentHour) {
        $(this).removeClass('past');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
  }

  hourUpdater();

  // set up interval to check if current time needs to be updated
  const interval = setInterval(hourUpdater, 15000);

  // load any saved data from localStorage
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));

  // display current day on page
  $('#currentDay').text(moment().format('dddd, MMMM Do'));
});
