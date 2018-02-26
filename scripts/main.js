/* globals $ window location router*/

$(function () {
    let path = location.hash;

    $(window).on("hashchange", function () {
        path = location.hash;

       router(path);
    });

    if (path === "" || path === "#") {
        path = "#home";
        location.hash = path;
        router(path);
    } else {
        router(path);
    }
});