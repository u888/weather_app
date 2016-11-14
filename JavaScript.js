$("document").ready(function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;
            //var apiurl = 
            
                $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=75b2d6ec47c27f0b9d412ed8f1633dac", function (json) {
                    $("#data").html(JSON.stringify(json));
                });
            });
       
    }
});
