/* globals gridTemplatePaged gridTemplate aboutUsTemplate carouselTemplate*/

const htmlLoader = (function () {
    const loadGridPage = function (wallpapersObj, page) {
        return gridTemplatePaged(wallpapersObj, page);
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

    const loadPageNotFound= function(){
        return pageNotFoundTemplate();
    };

    return {
        loadGridPage,
        loadGrid,
        loadAboutUs,
        loadCarousel,
        loadPageNotFound
    };
})();