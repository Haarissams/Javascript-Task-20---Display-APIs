// Function to fetch and display a random dog image
function fetchDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('dog-image').src = data.message;
            document.getElementById('dog-loading').style.display = 'none';
        })
        .catch(error => {
            console.error('Error fetching dog image:', error);
        });
}

fetchDogImage();