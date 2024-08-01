$(document).ready(function() {
    $(".list-group-item-action").click(function() {
        $(".list-group-item-action").removeClass("active");
        $(this).addClass("active");
        closeSidebar(); // Close sidebar on link click
    });

    $("#home-link").click(function() {
        $("#about-content, #portfolio-content").hide().css('opacity', 0); // Hide and reset opacity
        $("#home-content").show().css('opacity', 1); // Show with opacity transition
    });

    $("#about-link").click(function() {
        $("#home-content").hide().css('opacity', 0); // Hide and reset opacity
        $("#portfolio-content").hide().css('opacity', 0); // Hide and reset opacity
        $("#about-content").show().css('opacity', 1); // Show with opacity transition
    });

    $("#portfolio-link").click(function() {
        $("#home-content").hide().css('opacity', 0); // Hide and reset opacity
        $("#about-content").hide().css('opacity', 0); // Hide and reset opacity
        $("#portfolio-content").show().css('opacity', 1); // Show with opacity transition
    });

    function closeSidebar() {
        if ($(window).width() <= 768) {
            $("#sidebar-wrapper").removeClass("active");
        }
    }
});