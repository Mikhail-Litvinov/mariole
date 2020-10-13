var wow = new WOW({
    "live": true,
    "boxClass": "wow", // Class hiding an element until it should be showed on a display ("wow" by default)
    "offset": 20 // Pixels from the lowest border of a display to the upper border of an element, needed for starting animation (0 by default)
});
wow.init();