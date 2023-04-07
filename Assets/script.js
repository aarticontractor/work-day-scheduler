// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
const localeSettings = {};
dayjs.locale(localeSettings);

// Wait until the DOM is fully loaded before executing the code inside the function.
$(function() {
  // Declared variable currentHour to get the current hour of the day using the dayjs library.
  const currentHour = dayjs().format('H');
  console.log(currentHour);
  // Defined hourlyColor function to change the color of each time block based on whether it's in the "past, present, or future" relative to the current hour dynamically.
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
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

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  function saveTasks() {
    $('.saveBtn').on('click', function() {
      const idName = $(this).parent().attr('id');
      const textAreaValue = $(this).siblings('.description').val();
      localStorage.setItem(idName, textAreaValue);
    });
  }
  saveTasks();

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
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