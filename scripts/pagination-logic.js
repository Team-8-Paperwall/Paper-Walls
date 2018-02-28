/* globals $  configuration */

const paginationLogic = (function () {
    const remove = function() {
        configuration.aside.html("");
    };

    const goToPage = function (page) {
        const $currentActive = $(".page-item.active");
        $currentActive.removeClass("active");
        $(`.page-item-${page}`).addClass("active");
        $(".inner-grid-container.active").addClass("hidden").removeClass("active");
        $(`.grid-container-${page}`).removeClass("hidden").addClass("active");
    };

    return {
        remove,
        goToPage
    };
})();