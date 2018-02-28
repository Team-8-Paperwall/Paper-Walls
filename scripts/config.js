/* globals $ */

const configuration = (function() {

    const $main = $("#main-container");
    const $footer = $("#foot-container");
    const $aside = $("#aside-container");

    return {
        main: $main,
        footer: $footer,
        aside: $aside
    };
})();
