/* globals $ window location router*/

$(function () {
    let path = location.hash;

    $(window).on("hashchange", function () {
        path = location.hash;
        router.on(path);
    });

    if (path === "" || path === "#") {
        path = "#all/1";
        location.hash = path;
    }

    router.on(path);
});