/* globals gridTemplate aboutUsTemplate carouselTemplate*/

const htmlLoader = (function () {
    const loadGrid = function (wallpapers) {
<<<<<<< HEAD
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
=======
        return gridTemplate(wallpapers);
>>>>>>> f7247f35f3259e104742868b34e3e5c3069db368
    };

    const loadAboutUs = function () {
        return aboutUsTemplate();
    };

    const loadCarousel = function (category) {
       return carouselTemplate(category);
    };

    return {
        loadGrid,
        loadAboutUs,
        loadCarousel
    };
})();