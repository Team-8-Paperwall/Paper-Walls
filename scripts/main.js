/* globals $ database htmlLoader configuration*/

(function () {
    database.getAll().then((all) => {
        $(configuration.main).html(htmlLoader.loadGrid(all)).hide();
        $(configuration.main).show("drop", {}, 1000);
    });

    $("#our-team").on("click", function () {
        $(configuration.main).html(htmlLoader.loadAboutUs());
    });

    $("#home").on("click", function () {
        database.getAll().then((all) => {
            $(configuration.main).html(htmlLoader.loadGrid(all)).hide();
            $(configuration.main).show("drop", {}, 1000);
        });
    });
})();