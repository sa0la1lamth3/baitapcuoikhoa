// ----------------menu--------------


$("#clickPizza").click(function() {
    $("#pizza").css('display', 'block');
    $("#salad").css('display', 'none');
    $("#noodle").css('display', 'none');
    
});
$("#clickSalad").click(function() {
    $("#pizza").css('display', 'none');
    $("#salad").css('display', 'block');
    $("#noodle").css('display', 'none');
    
});
$("#clickNoodle").click(function() {
    $("#pizza").css('display', 'none');
    $("#salad").css('display', 'none');
    $("#noodle").css('display', 'block');
    
});



//---------------------------
$("#fullname").click(function() {
    $(this).css({"background-color": "#93fe4a","border": "1px solid #93fe4a"});
  });

$("#email").click(function() {
    $(this).css({"background-color": "#93fe4a","border": "1px solid #93fe4a"});
  });


$("#message").click(function() {
    $(this).css({"background-color": "#93fe4a","border": "1px solid #93fe4a"});
  });









