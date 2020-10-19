// Toggles the drop-down menu when the hamburger button is clicked on mobile
function handleNavBars() {
    $('.js-menu').click(() => {
        $('ul').toggleClass('active');
        $('nav').toggleClass('nav-active');
    });    
}

// Toggles the visibility of the biography section of the site when the "bio" button is clicked
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

// Toggles the visibility of the portfolio section of the site when the "portfolio" button is clicked
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

/* 
    Checks the window size on window resize, and alters whether the short or long 
    version of the bio is displayed on landing, based on window-size
*/
function checkWindowSize() {
    // If the full-size header is displayed, then the full bio should be displayed on landing
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

// When a thumbnail is clicked, loads the full-sized image of that thumbnail into the main image display
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

// Adds event listeners on page load
function loadPage() {
    handleNavBars();
    handleBio();
    handlePortfolio();
    checkWindowSize();
    handleCarousel();
}

$(loadPage);
