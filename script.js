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

// Function to fetch Bitcoin price and market value (CoinGecko API)
function fetchBitcoinPrice() {
    const url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const bitcoinData = data.bitcoin;
            const bitcoinPriceText = `
                <strong>Bitcoin Price:</strong> $${bitcoinData.usd} <br>
                <strong>Market Cap:</strong> $${bitcoinData.usd_market_cap.toLocaleString()} <br>
                <strong>24h Volume:</strong> $${bitcoinData.usd_24h_vol.toLocaleString()} <br>
                <strong>24h Change:</strong> ${bitcoinData.usd_24h_change.toFixed(2)}% <br>
            `;
            document.getElementById('bitcoin-price').innerHTML = bitcoinPriceText;
            document.getElementById('bitcoin-loading').style.display = 'none';
        })
        .catch(error => {
            console.error('Error fetching Bitcoin price:', error);
        });
}

// Function to fetch NASA image of the day
function fetchNasaImage() {
    const apiKey = 'MF52O7JdmbefIR91W9aeRhC7tE9OjH2p7hIlJtby';  // Replace with your NASA API key
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('nasa-image').src = data.url;
            document.getElementById('nasa-loading').style.display = 'none';
        })
        .catch(error => {
            console.error('Error fetching NASA image:', error);
        });
}

// Initialize fetch calls
fetchDogImage();
fetchBitcoinPrice();
fetchNasaImage();
