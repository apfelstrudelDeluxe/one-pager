// #################################################################
// Lightbox
// #################################################################

$(document).ready(function() {

    let ACTIVE_IMG;
    let IMG_URL;

    // Lightbox erstellen (wiederverwendbar)
    // #################################################################
   

    FIXME:
    $('#lightbox').append('<div id="lightbox_overlay"><div id="lightbox_content"><div id="lightbox_nav"><span class="icon_left_open"></span><span class="icon_cancel"></span><span class="icon_right_open"></span></div><img /></div></div>');


    // Lightbox öffnen und schließen
    // #################################################################
    $('#lightbox img').on('click', function() {

        // Welches Bild wurde angeklickt & Link zum Bild --> Bamit Lightbox befüllen und anzeigen. Geklickts Bild ist aktives Bild.
        IMG_URL = $(this).attr('src');
        console.log(IMG_URL);
        $('#lightbox_overlay #lightbox_content img').attr('src', IMG_URL);
        $('#lightbox_overlay').fadeIn(500);
        ACTIVE_IMG = $(this);

    });


    // schließen
    // #################################################################
    $('icon_cancel').stop().click(function() {
        $('#lightbox_overlay').fadeOut(500);
    });

    // weiter/ nächstes Bild
    // #################################################################
    $('.icon_right_open').stop().click(function() {
        next_img(ACTIVE_IMG);
    });

    // Funktion mit Übergabeparameter
    function next_img(OBJ) {
        if($(OBJ).next().is('img')) {       // Ist das nächste HTML element ein Bild?
            ACTIVE_IMG = $(OBJ).next();     // das nächste Bild ist das aktive Bild
            IMG_URL = $(OBJ).next('img').attr('src');    // Link vom nächsten Bild holen
            $('#lightbox_overlay #lightbox_content img').attr('src', IMG_URL);   // neuen Link ausführen
        } else {
            // Wenn alle Bilder durch sind, dann von vorne beginnen.
            // Zurück in die Galerie (parent) und dann das erste Kind.
            ACTIVE_IMG = $(OBJ).parent().children('img').first();
            IMG_URL = $(OBJ).parent().children('img').first().attr('src');    
            $('#lightbox_overlay #lightbox_content img').attr('src', IMG_URL);
        }
    }


    // zurück/ vorheriges Bild
    // #################################################################
    $('.icon_left_open').stop().click(function() {
        prev_img(ACTIVE_IMG);
    });

    // Funktion mit Übergabeparameter
    function prev_img(OBJ) {
        if($(OBJ).prev().is('img')) {       // Ist das vorherige HTML element ein Bild?
            ACTIVE_IMG = $(OBJ).next();     // das vorherige Bild ist das aktive Bild
            IMG_URL = $(OBJ).prev('img').attr('src');    // Link vom vorherigen Bild holen
            $('#lightbox_overlay #lightbox_content img').attr('src', IMG_URL);   // neuen Link ausführen
        } else {
            // Wenn alle Bilder durch sind, dann von hinten weiter rückwärts
            // Zurück in die Galerie (parent) und dann das letzte Kind.
            ACTIVE_IMG = $(OBJ).parent().children('img').last();
            IMG_URL = $(OBJ).parent().children('img').last().attr('src');    
            $('#lightbox_overlay #lightbox_content img').attr('src', IMG_URL);
        }
    }

});