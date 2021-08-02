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
     $(textEl[i]).addClass("present"); //logic needed to change colors
     console.log(time)
     $(textEl[i]).val(localStorage.getItem(time))

    }

    //localStorage.getItem(time,  )
})

