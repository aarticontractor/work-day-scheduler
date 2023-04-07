// Wrap all code that interacts with the DOM in a call to jQuery
const localeSettings = {};
dayjs.locale(localeSettings);


$(function() {
  // Declared variable currentHour to get the current hour of the day using the dayjs library.
  const currentHour = dayjs().format('H');
  console.log(currentHour);
 


  //  Defined hourlyColor function to change the color of each time block based on whether it's in the "past, present, or future" relative to the current hour dynamically.
  function hourlyColor() {
    console.log("Hourly called");
    $('.time-block').each(function() {
      const blockHour = parseInt(this.id.substring(5));
      console.log(blockHour);
      $(this).toggleClass('past', blockHour < currentHour);
      $(this).toggleClass('present', blockHour == currentHour);
      $(this).toggleClass('future', blockHour > currentHour);
    });
  }

  hourlyColor();

  // Added function to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements
  function saveTasks() {
    $('.saveBtn').on('click', function() {
      const idName = $(this).parent().attr('id');
      const textAreaValue = $(this).siblings('.description').val();
      localStorage.setItem(idName, textAreaValue);
    });
  }
  saveTasks();

  
  function loadTasks() {
    $('.saveBtn').each(function() {
      const idName = $(this).parent().attr('id');
      const textAreaValue = localStorage.getItem(idName)
      $(this).siblings('.description').text(textAreaValue);
    });
  }
  loadTasks();

  // TODO: Add code to display the current date in the header of the page.
  function setTime() {
    // Get the current day of the week in human readable format (Monday-Sunday)
    const currentDayOfWeek = dayjs().format('dddd');

    // Get the current month in human readable format (January-December)
    const currentMonth = dayjs().format('MMMM');

    // Get the current date (1-31)
    const currentDate = dayjs().format('DD');

    const dayElement = $('#day');
    const monthElement = $('#month');
    const dateElement = $('#date')

    dayElement.text(currentDayOfWeek);
    monthElement.text(currentMonth);
    dateElement.text(currentDate);
  }

    setTime();

});