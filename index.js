// let project1N = 1;
// let project2N = 1;

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

function centerCarousel() {
    $('.slides').animate({
        scrollLeft: $('.slides').scrollLeft() + 1
    });
}

// function handleCarousel() {
//     $('.carousel').on('click', 'a', event => {
//         event.preventDefault();
//         const imageHTML = $(event.currentTarget).children().clone();
//         $(event.currentTarget).parent().prev('.js-port-big').html(imageHTML);
//     });
// }

function scrollRight() {
    $('.next').click(event => {
        $(event.currentTarget).siblings('.slides').css('scroll-snap-type', 'none');
        // if ($(event.currentTarget).siblings('.slides').hasClass('js-project1')) {
        //     if (project1N < 4) {
        //         project1N += 1;
        //     }
        //     $(event.currentTarget).siblings('.slides').animate({
        //         scrollLeft: $(event.currentTarget).siblings('.slides').children().eq(`${project1N-1}`).offset().left - $(event.currentTarget).parent().offset().left
        //     }, 'slow', () => {
        //         console.log("callback fire");
        //         $(event.currentTarget).siblings('.slides').css('scroll-snap-type', 'x mandatory');
        //     });
        // }

        // if ($(event.currentTarget).siblings('.slides').hasClass('js-project2')) {
        //     if (project2N < 8) {
        //         project2N += 1;
        //     }

        //     $(event.currentTarget).siblings('.slides').animate({
        //         scrollLeft: $(event.currentTarget).siblings('.slides').children().eq(`${project2N-1}`).offset().left - $(event.currentTarget).parent().offset().left
        //     }, 'slow', () => {
        //         console.log("callback fire");
        //         $(event.currentTarget).siblings('.slides').css('scroll-snap-type', 'x mandatory');
        //     });
        // }
        
        $(event.currentTarget).siblings('.slides').animate({
            scrollLeft: $(event.currentTarget).siblings('.slides').scrollLeft() + $('.slides > img').width()
        }, 'slow', () => {
            $(event.currentTarget).siblings('.slides').css('scroll-snap-type', 'x mandatory');
        });
    });
}

function scrollLeft() {
    $('.previous').click(event => {
        $(event.currentTarget).siblings('.slides').css('scroll-snap-type', 'none');
        // if ($(event.currentTarget).siblings('.slides').hasClass('js-project1')) {
        //     if (project1N > 1) {
        //         project1N -= 1;
        //     }
        //     $(event.currentTarget).siblings('.slides').animate({
        //         scrollLeft: $(event.currentTarget).siblings('.slides').children().eq(`${project1N-1}`).offset().left + $(event.currentTarget).parent().offset().left
        //     }, 'slow', () => {
        //         console.log("callback fire");
        //         $(event.currentTarget).siblings('.slides').css('scroll-snap-type', 'x mandatory');
        //     });
        // }

        // if ($(event.currentTarget).siblings('.slides').hasClass('js-project2')) {
        //     if (project2N > 1) {
        //         project2N -= 1;
        //     }
        //     $(event.currentTarget).siblings('.slides').animate({
        //         scrollLeft: $(event.currentTarget).siblings('.slides').children().eq(`${project2N-1}`).offset().left + $(event.currentTarget).parent().offset().left
        //     }, 'slow', () => {
        //         console.log("callback fire");
        //         $(event.currentTarget).siblings('.slides').css('scroll-snap-type', 'x mandatory');
        //     });
        // }

        $(event.currentTarget).siblings('.slides').animate({
            scrollLeft: $(event.currentTarget).siblings('.slides').scrollLeft() - $('.slides > img').width()
        }, 'slow', () => {
            $(event.currentTarget).siblings('.slides').css('scroll-snap-type', 'x mandatory');
        });
    });
}

$(window).resize(() => {
    checkWindowSize();
    centerCarousel();
});

function loadPage() {
    handleNavBars();
    handleBio();
    handlePortfolio();
    checkWindowSize();
    scrollLeft();
    scrollRight();
    // handleCarousel();
}

$(loadPage);