const excuseButtons = [
  { id: 'randombtn', url: 'https://excuser-three.vercel.app/v1/excuse' },
  { id: 'familybtn', url: 'https://excuser-three.vercel.app/v1/excuse/family/' },
  { id: 'officebtn', url: 'https://excuser-three.vercel.app/v1/excuse/office/'},
  { id: 'childrenbtn', url: 'https://excuser-three.vercel.app/v1/excuse/children/'},
  { id: 'collegebtn', url: 'https://excuser-three.vercel.app/v1/excuse/college/'},
  { id: 'partybtn', url: 'https://excuser-three.vercel.app/v1/excuse/party/'},
  { id: 'funnybtn', url: 'https://excuser-three.vercel.app/v1/excuse/funny/'},
  { id: 'unbelievablebtn', url: 'https://excuser-three.vercel.app/v1/excuse/unbelievable/'},
  { id: 'developersbtn', url: 'https://excuser-three.vercel.app/v1/excuse/developers/'},
  { id: 'gamingbtn', url: 'https://excuser-three.vercel.app/v1/excuse/gaming/'},
];

const excuseContainers = {
  'randombtn': document.getElementById('excuseContainer'),
  'familybtn': document.getElementById('family-excuseContainer'),
  'officebtn': document.getElementById('office-excuseContainer'),
  'childrenbtn': document.getElementById('children-excuseContainer'),
  'collegebtn': document.getElementById('college-excuseContainer'),
  'partybtn': document.getElementById('party-excuseContainer'),
  'funnybtn': document.getElementById('funny-excuseContainer'),
  'unbelievablebtn': document.getElementById('unbelievable-excuseContainer'),
  'developersbtn': document.getElementById('developers-excuseContainer'),
  'gamingbtn': document.getElementById('gaming-excuseContainer'),
};

excuseButtons.forEach(button => {
  const btn = document.getElementById(button.id);
  const container = excuseContainers[button.id];
  btn.addEventListener('click', () => fetchExcuse(button.url, container));
});

function fetchExcuse(url, container) {
  fetch(url)
      .then(response => response.json())
      .then(data => {
          const excuseText = data[0].excuse;
          const quotedExcuse = `"${excuseText}"`;
          container.textContent = quotedExcuse;
          localStorage.setItem('quotedExcuse', JSON.stringify(quotedExcuse));
      })
      .catch(error => {
          console.error('Error fetching excuse:', error);
      });
}



// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("modalbtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

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