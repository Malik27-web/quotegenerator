var circle= document.querySelector('.circle');
var quote =document.querySelector('.quote');



var number = 0; // Declare the variable outside the function

function showquote() {
    var limit = 9;
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/quotes?limit=' + limit,
        headers: { 'X-Api-Key': 'DIpCdSInjMMx49Y6LQeSDg==HrAZorIoVSWN88B2' },
        contentType: 'application/json',
        success: function(result) {
            var numberElement = document.querySelector('.number');
            var quoteElement = document.querySelector('.quote');
    
            // Assuming the API response is an array of quotes
            if (result && result.length > 0) {
                var randomIndex = Math.floor(Math.random() * result.length); // Get a random index
                var quote = result[randomIndex].quote; // Extract the quote text
    
                number = number + 1;
                // Display the quote in the <p> tag with the class "quote"
                quoteElement.textContent = quote;
                numberElement.textContent = number;
            } else {
                // Handle case where no quotes are returned
                quoteElement.textContent = 'No quotes available.';
            }
        },
        error: function(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
}


circle.addEventListener('click', showquote);

