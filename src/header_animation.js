
$(document).ready(() => {

    $('.welcome-container').fadeIn(1500);
    // $(".p-name-container").show("slide", { direction: "left" }, 1000);
    
    const pageNavbar = $('.navbar');
    const listElement = $('ul.navbar-nav li.nav-item > a');

    listElement.css({ 'color' : '#FFFFFF' });

    $(window).scroll(() => {
            const yOffset = window.pageYOffset;
            const breakpoint = 60;

            if (yOffset > breakpoint) {
                pageNavbar.css({ 'background-color': '#FFFFFF' });
                pageNavbar.css({ 'box-shadow': '0px 3px 30px 0px #e1e1e1' });
                listElement.css({ 'color': '#0099FF' });
                
            } else {
                pageNavbar.css({ 'background-color': 'transparent' });
                listElement.css({ 'color': '#FFFFFF' });
                pageNavbar.css({ 'box-shadow': 'none' });
            }   
    }); 

});