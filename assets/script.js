const RExcuse = document.getElementById('randombtn');
const excuseContainer = document.getElementById('excuseContainer');
const Ccontent = document.getElementById('displaycontent');

RExcuse.addEventListener('click', myFunction);

function myFunction() {
    fetch('https://excuser-three.vercel.app/v1/excuse')
     // When the response is received, convert it to JSON format
        .then(response => response.json())
    //  After converting to JSON, handle the data
        .then(data => {
            const excuseText = data[0].excuse;
            // Add quotation marks around the excuse text
            const quotedExcuse = `"${excuseText}"`;
            // Update the content of the 'excuseContainer' div with the quoted excuse text
            excuseContainer.textContent = quotedExcuse;

            // Save last random excuse to local storage
            localStorage.setItem('quotedExcuse', JSON.stringify(quotedExcuse));
        })
        .catch(error => {
            console.error('Error fetching excuse:', error);
        });
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("modalbtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Initialize the calendar
function initCalendar() {
  const today = dayjs();
  const calendarDiv = document.getElementById('calendar');
  calendarDiv.innerHTML = '';

  // Display calendar for the current month
  const startOfMonth = today.startOf('month');
  const endOfMonth = today.endOf('month');
  const currentMonth = startOfMonth.month();
  const daysInMonth = endOfMonth.date();
}

// Function to add event
function addEvent() {
  const eventDateInput = document.getElementById('event-date');
  const eventNameInput = document.getElementById('event-name');

  const eventDate = dayjs(eventDateInput.value);
  const eventName = eventNameInput.value;

    //-----------------------------------------------------------------
    // this section is can be change to do what we want with this data
  console.log('Event Date:', eventDate.format('YYYY-MM-DD'));
  console.log('Event Name:', eventName);

  eventDate.textContent = 


  //reinitialize the calendar
  initCalendar();
}

// Initialize the calendar when the page loads
window.onload = initCalendar;