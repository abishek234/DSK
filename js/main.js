(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(9000);

    // Initiate the wowjs
    new WOW().init();

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });
    
    

    function counterUp(element, target) {
        var current = parseInt(element.text().replace(/,/g, ''));
        var targetValue = parseFloat(target.replace(/,/g, ''));
        var suffix = target.replace(/[0-9,]/g, '');
        var multiplier = 1;

        if (suffix === 'k') {
            multiplier = 1000;
        } else if (suffix === 'm') {
            multiplier = 1000000;
        }

        var targetNumber = targetValue * multiplier;
        var increment = (targetNumber - current) / 100;

        element.text(Math.ceil(current + increment) + suffix);

        if (current < targetNumber) {
            setTimeout(function() {
                counterUp(element, target);
            }, 10);
        }
    }

    $('[data-toggle="counter-up"]').each(function() {
        var element = $(this);
        var target = element.text();
        counterUp(element, target);
    });
   

})(jQuery);
