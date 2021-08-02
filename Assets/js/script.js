$(document).ready(function () {
    function saveFunction() {
        var textValue = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        console.log(time)

        localStorage.setItem( time, textValue)
    }
    var btn = $(".saveBtn")
    btn.on("click", saveFunction); 
    var textEl = $(".description")
    for(var i = 0; i < textEl.length; i++) {
     var time =  $(textEl[i]).parent().attr("id");
     $(textEl[i]).val(localStorage.getItem(time))
     //logic needed to change colors
     if(time < moment()) {
          $(textEl[i]).addClass("past"); //logic needed to change colors
     }
     if(time == moment()) {
        $(textEl[i]).addClass("present");   
     }

     if(time > moment()) {
        $(textEl[i]).addClass("future");   
     }
    }
})

