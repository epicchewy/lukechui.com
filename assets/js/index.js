$(function() {
    console.log('welcome');
    $('a[href*=#]:not([href=#])').click(function() {
        console.log("moving");
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    $(".navbar-toggle").click(function(event) {
        $(".navbar-collapse").toggle('in');
    });

    $('.slideUpPanel').click(function(event){
        var panel_class = $(event.target).attr('class');
        var number = parseInt(panel_class.substr(12, 1));
        var side = ((number % 2 == 0) ? 0 : 1);
        toggleSlideUpPanel(number, side);
    });
});

$(document).ready(function(){
  $(".navbar").hide();
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $('.navbar').fadeIn();
      } else {
        $('.navbar').fadeOut();
      }
    });
  });

});

$(function(){
    $('.hello').typed({
        strings: ["a Web Developer.", "a Hacker.", "an Entrepreneur."],
        typeSpeed: 45,
        startDelay:1000, 
        backDelay: 1000,
        loop: true,
        loopCount: false
    });
});

$(function(){
    $(".project-body").hide();
    $(".project-head").click(function(){
        $(this).next(".project-body").slideToggle(600);
    });
});