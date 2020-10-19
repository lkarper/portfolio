function handleNavBars() {
    $('.js-menu').click(() => {
        $('ul').toggleClass('active');
        $('nav').toggleClass('nav-active');
    });    
}

function handleBio() {
    $('.js-bio').click(() => {
        if (!$('.js-header').hasClass('hidden')) {
            $('.js-header').toggleClass('hidden');
        }
        if (!$('.portfolio').hasClass('hidden')) {
            $('.portfolio').toggleClass('hidden');
        }
        if ($('.bio').hasClass('hidden')) {
            $('.bio').toggleClass('hidden');
            window.scrollTo(0, 0); 
        }
        if (!$('.bio').hasClass('hidden')) {
            window.scrollTo(0, 0); 
        }
    });
}

function handlePortfolio() {
    $('.js-portfolio').click(() => {
        if (!$('.js-header').hasClass('hidden')) {
            $('.js-header').toggleClass('hidden');
        }
        if ($('.portfolio').hasClass('hidden')) {
            $('.portfolio').toggleClass('hidden');
            window.scrollTo(0, 0);
        }
        if (!$('.bio').hasClass('hidden')) {
            $('.bio').toggleClass('hidden');    
        }
        if (!$('.portfolio').hasClass('hidden')) {
            window.scrollTo(0, 0);
        }
    });
}

function checkWindowSize() {
    if ($('.toggle').is(':hidden') && $('header').is(':visible')) {
        if ($('.bio').hasClass('hidden')) {
            $('.bio').toggleClass('hidden');    
        }
    }
    else if ($('.toggle').is(':visible') && $('header').is(':visible')) {
        if (!$('.bio').hasClass('hidden')) {
            $('.bio').toggleClass('hidden');    
        }
    }
}

function handleCarousel() {
    $('.carousel').on('click', 'a', event => {
        event.preventDefault();
        const imageHTML = $(event.currentTarget).children().clone();
        if ($(event.currentTarget).hasClass('js-rr')) {
            $(event.currentTarget).parent().parent().prev('.js-port-big').html(imageHTML);
        } else {
            $(event.currentTarget).parent().prev('.js-port-big').html(imageHTML);
        }
    });
}

$(window).resize(() => {
    checkWindowSize();
});

function loadPage() {
    handleNavBars();
    handleBio();
    handlePortfolio();
    checkWindowSize();
    handleCarousel();
}

$(loadPage);
