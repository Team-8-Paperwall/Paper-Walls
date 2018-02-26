/* globals $ window location router*/

$(function () {
    let path = location.hash;

    $(window).on("hashchange", function () {
        path = location.hash;

       router(path);
    });

    if (path === "" || path === "#") {
        location.hash = "#home";
        path = "#home";
    } else {
        router(path);
    }
});