/* globals $ database configuration htmlLoader alert*/

const router = (function () {
    let shouldLoadPagination = true;

    const on = function (path) {
        if (path.includes("home")) {
            let pathParams = path.split("/");

            if (pathParams.length > 2) {
                $("#not-found-container").show();
                $("#not-found-container").html(htmlLoader.loadPageNotFound());
                $("#wrapper").hide();
                return;
            } else if (isNaN(+pathParams[1])) {
                $("#not-found-container").show();
                $("#not-found-container").html(htmlLoader.loadPageNotFound());
                $("#wrapper").hide();
                return;
            }

            let page = +pathParams[1];

            database.getAllPaged().then((data) => {
                if (data.size < page) {
                    $("#not-found-container").show();
                    $("#not-found-container").html(htmlLoader.loadPageNotFound());
                    $("#wrapper").hide();
                    return;
                }

                $("#wrapper").show();
                $("#not-found-container").hide();

                $(configuration.main).html(htmlLoader.loadGridPage(data, page));
                //$(configuration.main).show("drop", {}, 1000);
                if (shouldLoadPagination) {
                    paginationLogic.create(data);
                    shouldLoadPagination = false;
                }
            });
        } else if (path === "#our-team") {
            shouldLoadPagination = true;
            paginationLogic.remove();
            $(configuration.main).html(htmlLoader.loadAboutUs);
        } else if (path === "#categories/animals") {
            shouldLoadPagination = true;
            paginationLogic.remove();
            database.getAnimals().then((category) => {
                $(configuration.main).html(htmlLoader.loadCarousel(category));
            });

        } else if (path === "#categories/cars") {
            shouldLoadPagination = true;
            paginationLogic.remove();
            database.getCars().then((category) => {
                $(configuration.main).html(htmlLoader.loadCarousel(category));
            });
        } else if (path === "#categories/cartoons") {
            shouldLoadPagination = true;
            paginationLogic.remove();
            database.getCartoons().then((category) => {
                $(configuration.main).html(htmlLoader.loadCarousel(category));
            });

        } else if (path === "#categories/computers") {
            shouldLoadPagination = true;
            paginationLogic.remove();
            database.getComputers().then((category) => {
                $(configuration.main).html(htmlLoader.loadCarousel(category));
            });
        } else if (path === "#categories/celebrities") {
            shouldLoadPagination = true;
            paginationLogic.remove();
            database.getCelebs().then((category) => {
                $(configuration.main).html(htmlLoader.loadCarousel(category));
            });
        } else if (path === "#categories/landscapes") {
            shouldLoadPagination = true;
            paginationLogic.remove();
            database.getLandscapes().then((category) => {
                $(configuration.main).html(htmlLoader.loadCarousel(category));
            });
        } else if (path === "#categories/futuristic") {
            shouldLoadPagination = true;
            paginationLogic.remove();
            database.getFuturistics().then((category) => {
                $(configuration.main).html(htmlLoader.loadCarousel(category));
            });
        } else if (path === "#categories/sports") {
            shouldLoadPagination = true;
            paginationLogic.remove();
            database.getSports().then((category) => {
                $(configuration.main).html(htmlLoader.loadCarousel(category));
            });
        } else {
            shouldLoadPagination = true;
            paginationLogic.remove();
            $("#not-found-container").show();
            $("#not-found-container").html(htmlLoader.loadPageNotFound());
            $("#wrapper").hide();
        }
    };

    return {
        on
    };
})();