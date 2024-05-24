const RExcuse = document.getElementById('randombtn');
const excuseContainer = document.getElementById('excuseContainer');

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