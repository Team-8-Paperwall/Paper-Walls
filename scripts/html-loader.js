/* globals gridTemplate aboutUsTemplate carouselTemplate pageNotFoundTemplate*/

const htmlLoader = (function () {
    const loadGridPage = function (wallpapersObj) {
        return gridTemplate.gridTemplatePaged(wallpapersObj);
    };

    const loadPagination = function (pages) {
        return gridTemplate.gridPagination(pages);
    };

    const loadAboutUs = function () {
        return aboutUsTemplate();
    };

    const loadCarousel = function (category) {
       return carouselTemplate(category);
    };

    const loadPageNotFound = function() {
        return pageNotFoundTemplate();
    };

    return {
        loadGridPage,
        loadPagination,
        loadAboutUs,
        loadCarousel,
        loadPageNotFound
    };
})();