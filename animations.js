

$("h1").click(function() {
    $(this).text("Aaaarrrggghhh!!! You got me!");
    // $(this).removeClass("startFly");    
    $(this).css("animation-play-state","paused");
});

