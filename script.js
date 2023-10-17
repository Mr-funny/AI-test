// script.js

// Function to redirect to the generator page based on the country code
function redirectToGenerator(countryCode) {
    // Assuming you have a generator page for each country
    const generatorPageUrl = `${countryCode}-phone-number-generator.html`;
    
    // Redirect to the generator page
    window.location.href = generatorPageUrl;
}

// You can add more JavaScript logic here as needed
