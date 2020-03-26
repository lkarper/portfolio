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
            $('.bio').toggleClass('hidden')    
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
        }
        if (!$('.bio').hasClass('hidden')) {
            $('.bio').toggleClass('hidden');    
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
    $('.carousel').on('click', 'img', event => {
        const imageHTML = $(event.currentTarget).clone();
        $('.js-port-big').html(imageHTML);
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