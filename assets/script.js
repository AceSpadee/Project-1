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