/* globals $ */

const htmlLoader = (function () {
    const loadGrid = function (wallpapers) {
        let $gridContainer = $("<div>");
        $gridContainer.addClass("grid-container");

        for (let i = 0; i < wallpapers.length; i++) {
            let wallpaper = wallpapers[i];

            let $img = $("<img>");
            $img.attr("src", wallpaper.location);
            $img.addClass("grid-wallpaper");

            let $imgContainer = $("<div>");
            $imgContainer.html($img);
            $imgContainer.addClass("grid-wallpaper-container");

            $gridContainer.append($imgContainer);
        }

        return $gridContainer;
    };

    const loadAboutUs = function () {
        return "../views/about-us-layout.html";
    };

    const loadCarousel = function () {
       return "../views/carousel-layout.html";
    };

    return {
        loadGrid,
        loadAboutUs,
        loadCarousel
    };
})();