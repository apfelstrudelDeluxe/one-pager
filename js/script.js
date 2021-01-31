console.log("Hi beautiful!")

// #################################################################
// Höhe berechnen für One-Pager > 800px
// #################################################################

// startet, wenn Dokument geladen wird
$(document).ready(function() {

    responsive_aboutus();
    responsive_business();
    responsive_menue();
    
    // ...und wenn sich die Bildschirmgröße verändert
    $(window).resize(function() {
        responsive_aboutus();
        responsive_business();
        responsive_menue();
    });
    
    
    function responsive_aboutus() {
    
        let HEIGHT = $(window).height();
        let WIDTH = $(window).width();
    
        if (WIDTH > 800) {
            $('.aboutus').css('height', (HEIGHT - ((HEIGHT/100)*5)-240));
        } else {
            $('.aboutus').css('min-height', 400);
            $('.herotext').css('font-size', '35px');
        }
    }
    
    function responsive_business() {
    
        let HEIGHT = $(window).height();
        let WIDTH = $(window).width();
    
        if (WIDTH > 1200) {
            $('.col-4').css('height', (HEIGHT - ((HEIGHT/100)*5)-270));
        } else {
            $('.col-4').css('min-height', 400);
        }
    }


// #################################################################
// Responsive Menü
// #################################################################    

function responsive_menue() {

    let WIDTH = $(window).width();

    if (WIDTH < 992) {
        $('#burgerMenu').show();
        $('header nav').hide();
        $('#burgerMenu').on('click', function() {
            console.log("Menü aufklappen");
            $('header nav').show();

    
        });
        
    } else {
        $('#burgerMenu').hide();
        $('header nav').show();
    }
}

    // globale Variable zum Status




    
    });


