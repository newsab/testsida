$(document).ready(function () {
    $(window).ready(function () {

        $('.swipeInFromTop').each(function (i) {

            $(this).delay(1800).animate({ "bottom": "0px" }, 2000);

        });

        $('.swipeInFromBottom').each(function (i) {

            $(this).delay(1000).animate({ "bottom": "0px" }, 2000);

        });

        $('.fadeIn').each(function (i) {

            $(this).delay(3800).animate({ 'opacity': '1' }, 1000);

        });
        $('.fadeIn2').each(function (i) {

            $(this).delay(4200).animate({ 'opacity': '1' }, 1000);

        });

        $('.swipeInFromTop').each(function (i) {

            $(this).delay(1200).animate({ 'opacity': '1' }, 1000);

        });

        $('.swipeInFromBottom').each(function (i) {

            $(this).delay(2000).animate({ 'opacity': '1' }, 1000);

        });
    });
});

function showInfo1() {  
    $("#info1").delay(500).slideDown(500); 
    $("#info2").slideUp(500); 
    $("#info3").slideUp(500); 
}

function showInfo2() {  
    $("#info2").delay(500).slideDown(500); 
    $("#info1").slideUp(500); 
    $("#info3").slideUp(500); 
}

function showInfo3() {  
    $("#info3").delay(500).slideDown(500); 
    $("#info1").slideUp(500); 
    $("#info2").slideUp(500); 
}

function stopShowInfo() {  
    $("#info1").slideUp(500);  
}