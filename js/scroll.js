console.log("Hi scroll!")

// #################################################################
// Scrolling-Effekt für One-Pager
// #################################################################


$(function(){

    // Überprüfen, ob ein href mit # beginnt-
    $("[href^='#']").stop().click(function() {
        console.log("test");
        // Überprüfen des Links, ob man von einem anderen Ausgangspunkt kommt oder nicht.
        if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {

            var HASH = this.hash;           // nur "#Abschnitt2" --> String
            var TARGET = $(this.hash);      // html-Obkejt

            // Wann soll Animation ausgeführt werden? Position der ID´s messen mit offset und in Variable speichern.
            if (TARGET.length) {
                var TOP = TARGET.offset();
                console.log(TOP);

                // Animation für das Scrollen
                $('html, body').animate({
                    scrollTop: TOP.top
                }, 800, function(){

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = HASH;
                });
                return false;
            }
        }
    })

});


// #################################################################
// Highlight von Menü
// #################################################################

// erst, wenn Seite komplett geladen wurde
$(document).ready(function() {

    var MENUE_ELEMENTS = $('header nav ul li a');   // Array mit allen Menüpunkten
    console.log(MENUE_ELEMENTS);

    var CURRENT = 0;
    var OBJECT_TOP;

    // Der erste Link soll gleich mal aktiv sein.
    var OBJECT = $(MENUE_ELEMENTS[0]);
    OBJECT.addClass('menue_active');
    console.log(OBJECT[0]); 

    // Wenn das Fenster gescrollt wird, dann soll eine Funktion ausgelöst werden.
    $(window).scroll(function() {

        // Alle Menü-Elemente durchgehen und abfragen, wie weit sie von oderer linken Ecke entfert sind.
        for(var i = 0; i < MENUE_ELEMENTS.length; i++) {

            FIXME:
            // Menü-Elemente und richtige Abschnitte zusammenfinden &  IDs ansprechen
            // Ergebnis z.B. #business
            var LINK = $(MENUE_ELEMENTS[i].attr('href'));
            console.log(LINK);
            console.log(MENUE_ELEMENTS[i]);

            // Zu Beginn: Hat die Variable LINK ein Ziel und eine Länge? --> true. Wie weit von oben entfernt? WO SEKTIONEN SICH BEFINDEN.
            if($(LINK).length) {
                OBJECT_TOP = $(LINK).offset().top;
                console.log(OBJECT_TOP);
            }

            // Wert, wo sich das Browserfenster gerade befindet. WO WIR UNS BEFINDEN.
            var SCROLL_TOP = $(window).scrollTop();
            console.log(SCROLL_TOP);
            
            // Abstand zum Browserfenster zu unserer Position
            var DIF = Math.abs(SCROLL_TOP  - OBJECT_TOP);
            console.log(DIF);

            // Vergleich: Welche Sektion ist an nächsten?
            if(i === 0) {   // erste Scheifenrunde
                CURRENT = DIF;
                OBJECT = $(MENUE_ELEMENTS[i]);                          // i ist aktuelles OBJECT
                $('header na ul li a').removeClass('menue_active');     // alle Klasssen entfernen und aktive Klasse drauf
                OBJECT.addClass('menue_active');    
            } else {
                if(DIF < CURRENT || DIF === CURRENT) {                  // DIF wir bei jedem scrol neu berechnet. Wenn kleiner oder gleich als CURRENT, dann Klasse ändern.
                    CURRENT = DIF;
                    OBJECT = $(MENUE_ELEMENTS[i]);
                    $('header na ul li a').removeClass('menue_active');
                    OBJECT.addClass('menue_active');
                }
            }
            console.log(CURRENT + " - " + OBJECT_TOP);          
        }
    });
});















// #################################################################
// Höhe berechnen für One-Pager > 800px
// #################################################################

// startet, wenn Dokument geladen wird
$(document).ready(function() {

responsive_aboutus();
responsive_business();

// ...und wenn sich die Bildschirmgröße verändert
$(window).resize(function() {
    responsive_aboutus();
    responsive_business();
});


function responsive_aboutus() {

    var HEIGHT = $(window).height();
    var WIDTH = $(window).width();

    if (WIDTH > 800) {
        $('.aboutus').css('height', (HEIGHT - ((HEIGHT/100)*5)-240));
    } else {
        $('.aboutus').css('min-height', 400);
        $('.herotext').css('font-size', '35px');
    }
}

function responsive_business() {

    var HEIGHT = $(window).height();
    var WIDTH = $(window).width();

    if (WIDTH > 1200) {
        $('.col-4').css('height', (HEIGHT - ((HEIGHT/100)*5)-270));
    } else {
        $('.col-4').css('min-height', 400);
    }
}





});