$("#get-weather").click(function () {
var mistake = 0;
var city = $("#city").val();
var date = $("#datepicker").val();

    if ($("#city").val() == "")
    {
       $("#mistake1").show();
       mistake = 1;
    }
    else{
    	$("#mistake1").hide();
        $("#cite").html(city+" на карте");
    }

     if ($("#datepicker").val() == "")
    {
       $("#mistake2").show();
       mistake = 1;
    }
    else{
    	$("#mistake2").hide();
        $("#weath").html("Погода в "+city+" на "+date);
    }


    var width = 0;
    if (self.screen) {
        width = screen.width
    }
    if (mistake == 0) {
        $.ajax({
        type: "POST",
        url: "http://api.openweathermap.org/data/2.5/forecast?q=" + $("#city").val() + "&appid=e03d0b8deff73f1ffb86a729c496e073&units=metric&lang=ru&cnt=4",
        dataType: "json",
        success: function (result, status, xhr) {
                    console.log(result);

                             $("#myimage").attr("src","http://openweathermap.org/img/w/" + result["list"][0]["weather"][0].icon +".png"); 
                             $("#myimage1").attr("src","http://openweathermap.org/img/w/" + result["list"][0]["weather"][0].icon +".png"); 
                             $("#myimage2").attr("src","http://openweathermap.org/img/w/" + result["list"][0]["weather"][0].icon +".png"); 
                             $("#myimage3").attr("src","http://openweathermap.org/img/w/" + result["list"][0]["weather"][0].icon +".png"); 

                             $("#weather .col-md-3 #temp").html(result["list"][0]["main"].temp + "°C");
                             $("#weather .col-md-3 #temp1").html(result["list"][1]["main"].temp + "°C");
                             $("#weather .col-md-3 #temp2").html(result["list"][2]["main"].temp + "°C");
                             $("#weather .col-md-3 #temp3").html(result["list"][3]["main"].temp + "°C");

                             $("#weather .col-md-3 #descr").html(result["list"][0]["weather"][0].description);
                             $("#weather .col-md-3 #descr1").html(result["list"][1]["weather"][0].description);
                             $("#weather .col-md-3 #descr2").html(result["list"][2]["weather"][0].description);
                             $("#weather .col-md-3 #descr3").html(result["list"][3]["weather"][0].description);

                            $.each($('#weather .col-md-3'), function(i, el){
                            $(el).css({'opacity':0});
                            $(el).css({'display':'block'});
                            setTimeout(function(){
                                $(el).animated("zoomIn", "flipOutX");
                                },200 + ( i * 200 ));});
                    },
                    error: function (xhr, status, error) {
                        alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
                    }
                });     
    }
    else{return;}
});


$(function() {
    $(document).keydown(function(e) {
        switch (e.which) {
            case 13: // up key
                $("#get-weather").click();
                break;
        }
    });
});