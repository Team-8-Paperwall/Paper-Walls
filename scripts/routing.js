/* globals $ database configuration htmlLoader getCarousel alert*/

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

    }
    else if (path === "#categories/cars") {

        database.getCars().then((category) => {
            $(configuration.main).html(htmlLoader.loadCarousel(category));
        });

    }
    else if (path === "#categories/cartoons") {

        database.getCartoons().then((category) => {
            $(configuration.main).html(htmlLoader.loadCarousel(category));
        });

    }
    else if (path === "#categories/computers") {

        database.getComputers().then((category) => {
            $(configuration.main).html(htmlLoader.loadCarousel(category));
        });


    }
    else if (path === "#categories/celebrities") {

        database.getCelebs().then((category) => {
            $(configuration.main).html(htmlLoader.loadCarousel(category));
        });

    }
    else if (path === "#categories/landscapes") {

        database.getLandscapes().then((category) => {
            $(configuration.main).html(htmlLoader.loadCarousel(category));
        });

    }
    else if (path === "#categories/futuristic") {

        database.getFuturistics().then((category) => {
            $(configuration.main).html(htmlLoader.loadCarousel(category));
        });

    }
    else if (path === "#categories/sports") {
        database.getSports().then((category) => {
            $(configuration.main).html(htmlLoader.loadCarousel(category));
        });

    } else {
       alert("TODO: Redirect to 404 page!");
    }
};