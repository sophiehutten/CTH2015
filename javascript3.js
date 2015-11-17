var v = 0;
var ImageArray = [];

var myRequest = new XMLHttpRequest();
var query = "Elvis presley";
var method = "GET";
var url = "http://www.europeana.eu/api/v2/search.json?wskey=AJ4cKiB2K&query=" + query + "&start=1&rows=48&profile=standard";
myRequest.open(method, url);
myRequest.send();
myRequest.onreadystatechange = function() {
    if (myRequest.readyState === 4) {
        var data = myRequest.response;
        var dataParsed = JSON.parse(data);

        for (var v = 0; v < dataParsed.items.length; v++) {


            ImageArray.push(dataParsed.items[v].edmPreview[0])

        }
        document.getElementById('image1').src = ImageArray[logo];
    } else {
        console.log(myRequest.readyState);
    }
}


var guess_image = function() {
    if (rotation !== 0) {
        alert("Try again!");
    } else {
        alert("Excellent!");
    }
}

var rotation = 180;
var rotate_image = function() {
    if (rotation < 270) {
        rotation = rotation + 90;
    } else {
        rotation = 0;
    }
    $('#image1')[0].style.transform = "rotate(" + rotation + "deg)";
}


var logo = 0;
var next_image = function() {

    if (logo < 48) {
        logo = logo + 1;
    } else {
        logo = 0;
    }
    document.getElementById('image1').src = ImageArray[logo];
}
   
   
   
