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

document.getElementById('checkButton').addEventListener('click', checkTime);

function checkTime() {
    const selectedTimeStr = document.getElementById('selectedTime').value;
    // Parse the selected time string into a Date object
    const selectedTime = new Date('1970-01-01T' + selectedTimeStr);
    // Convert the Date object to a Day.js object
    const selectedDayjs = dayjs(selectedTime);
    
    const selectedHour = selectedDayjs.hour();
    const selectedMinute = selectedDayjs.minute();

    let interval;
    function checkMatch() {
      const currentTime = dayjs();
      const currentHour = currentTime.hour();
      const currentMinute = currentTime.minute();
  
      if (currentHour === selectedHour && currentMinute === selectedMinute) {
          clearInterval(interval); // Stop the interval immediately
          // Make a fetch request to get the excuse
          fetch('https://excuser-three.vercel.app/v1/excuse')
              .then(response => {
                  console.log('Response status:', response.status);
                  return response.json();
              })
              .then(data => {
                  console.log('Response data:', data); // Log the entire response data
                  const excuse = data[0].excuse; // Extracting the excuse from the first element of the array
                  console.log('Excuse:', excuse); // Logging the excuse to console
                  // Display the excuse into the modal
                  const modalContent = document.querySelector('.modal-content');
                  const excuseMessage = document.createElement('p');
                  excuseMessage.textContent = excuse;
                  modalContent.appendChild(excuseMessage);
              })
              .catch(error => console.error('Error fetching excuse:', error));
      }
  }

    interval = setInterval(checkMatch, 1000);
}