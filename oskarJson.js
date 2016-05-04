// JavaScript 

// Använd jQuery och AJAX

/*
  Övningar:
  * Lägg till så att en funktin körs vid error
  * Vad händer för olika URL:s?
  * Lägg till i HTML-filen så att man kan mata in två tal, använd sedan dessa för att anropa ditt API på RapidAPI.com från igår!
*/

$('#my-button').click(function() { 
  console.log("Knappen klickades på!") 
  
  // Gör en GET request med AJAX i jQuery
  $.get("https://api.spotify.com/v1/search?q=abba&type=track", function(data, textStatus, jqXHR) {
    // Vilken status?
    console.log(textStatus);
  
    // Visa texten från servern i stycket (<p>) med id:t show-server-text
    $('#show-server-text').text(data);
    console.log(data)
    var objectText = JSON.stringify(data)
    console.log(objectText.tracks.items)
  } )
} 
);
