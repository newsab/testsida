function showMenu() {  
        $(".mobileMenu").fadeIn(50);  
        $(".mobileMenuInner").slideDown(1000);    
}

function closeMenu() {  
        $(".mobileMenu").delay(300).fadeOut(300);  
        $(".mobileMenuInner").slideUp(500);    
}

// $(document).ready(function() {
//         var headerTop = $('#header').offset().top;
//         var headerBottom = headerTop + 1; // Sub-menu should appear after this distance from top.
//         $(window).scroll(function () {
//             var scrollTop = $(window).scrollTop(); // Current vertical scroll position from the top
//             if (scrollTop > headerBottom) { // Check to see if we have scrolled more than headerBottom
//                 if (($("#header").is(":visible") === false)) {
//                     $('#header').fadeIn('slow');
//                     $('#bigLogo').hide();
                   
//                 }
//             } else {
//                 if ($("#header").is(":visible")) {
//                     $('#header').fadeOut('slow');
//                     $('#bigLogo').fadeIn('slow');
//                 }
//             }
//         });

        

//     });

  
