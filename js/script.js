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
        $.each($('#weather .col-md-3'), function(i, el){
            $(el).css({'opacity':0});
            $(el).css({'display':'block'});
            setTimeout(function(){
                $(el).animated("zoomIn", "flipOutX");
                },200 + ( i * 200 ));});
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