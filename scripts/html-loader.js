/* globals gridTemplate aboutUsTemplate carouselTemplate*/

const htmlLoader = (function () {
    const loadGridPage = function () {

    };

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
        loadGridPage,
        loadGrid,
        loadAboutUs,
        loadCarousel
    };
})();