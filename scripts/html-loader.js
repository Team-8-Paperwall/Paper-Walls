/* globals gridTemplate aboutUsTemplate carouselTemplate*/

const htmlLoader = (function () {
    const loadGrid = function (wallpapers) {
        return gridTemplate(wallpapers);
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