
var Images = [
     "https://www.seeklogo.net/wp-content/uploads/2013/03/nike-vector-logo-400x400.png",
     "http://logonoid.com/images/mcdonalds-logo.png",
     "https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Starbucks_Coffee_Logo.svg/1024px-Starbucks_Coffee_Logo.svg.png",
     "https://www.seeklogo.net/wp-content/uploads/2013/05/superman-s-vector-logo.png",
     "http://www.ultimatesoftware.com/images/twitter_logo_blue.png",
     "https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png"
     ]
 
 var guess_image = function () {
     if (rotation !== 0) {
         alert("Try again!");
     } else {
         alert("Excellent!");
     }
     }

 var rotation=180;
    var rotate_image = function() {
        if (rotation < 270) {
            rotation = rotation + 90;
        }
        else { 
            rotation = 0;
        }
             $('#image1')[0].style.transform = "rotate("+rotation+"deg)";
    }
         
         
  var logo = 0;       
   var next_image = function () {
       
 if (logo < 5)  {
    logo = logo + 1;
 }
    else {
        logo = 0;
    }   
       document.getElementById('image1').src = Images[logo];
   }      