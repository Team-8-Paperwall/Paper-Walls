/* globals $ database configuration htmlLoader alert*/

const router = function (path) {
    if (path === "#home") {
        database.getAll().then((all) => {
            $(configuration.main).html(htmlLoader.loadGrid(all)).hide();
            $(configuration.main).show("drop", {}, 1000);
        });
    } else if (path === "#our-team") {
        $(configuration.main).html(htmlLoader.loadAboutUs());
    } else if (path === "#categories/animals") { // TODO: add other categories
        database.getAnimals().then((category) => {
            $(configuration.main).html(htmlLoader.loadCarousel(category));
        });
    } else {
        alert("TODO: Redirect to 404 page!");
    }
};