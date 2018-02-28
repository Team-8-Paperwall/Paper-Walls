/* globals gridTemplate aboutUsTemplate carouselTemplate pageNotFoundTemplate*/

const htmlLoader = (function () {
    const loadGridPage = function (wallpapersObj, page) {
        return gridTemplate.gridTemplatePaged(wallpapersObj, page);
    };

    const loadPagination = function (pages, current) {
        return gridTemplate.gridPagination(pages, current);
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

    const loadModal = function(){
        return modalTemplate();
    };

    return {
        loadGridPage,
        loadPagination,
        loadAboutUs,
        loadCarousel,
        loadPageNotFound,
        loadModal
    };
})();