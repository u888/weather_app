$("document").ready(function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;

            $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=metric&appid=75b2d6ec47c27f0b9d412ed8f1633dac", function (json) {

                var jsonString = JSON.stringify(json);
                var weath = JSON.parse(jsonString);

                $("#name").html(weath.name + "  " + weath.sys.country);
                $("#temp").html(weath.main.temp);
                var C = weath.main.temp;
                var F = weath.main.temp * (9 / 5) + 32;
                $("#sky").html(weath.weather[0].description);
                $("#wind").html(weath.wind.speed);
                $("#image").attr("src", "http://openweathermap.org/img/w/" + weath.weather[0].icon + ".png");

                $(".btn").click(function () {
                    if ($("#temp").html() == C) {
                        $("#temp").html(F);
                        $(".btn").html("ºF");
                    }
                    else {
                        $("#temp").html(C);
                        $(".btn").html("ºC");
                    };
                           
                        
                    });
            });
        });
       
    };
    
});