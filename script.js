$( document ).ready(function() {
    $(".navButton").click(function (event){
        event.preventDefault();
         $(".hideable").hide ();
        $("#"+$(this).data("target")).show ();
    });
});

