/* globals $ database paginationLogic configuration htmlLoader */

const router = (function () {
    let shouldLoadPagination = true;
    let shouldLoadGridPage = true;
    const $wrapper = $("#wrapper");
    const $notFoundContainer =  $("#not-found-container");

    const on = function (path) {
        if (path.includes("home")) {
            let pathParams = path.split("/");

            if (pathParams.length > 2) {
                loadPageNotFound();
                return;
            } else if (isNaN(+pathParams[1])) {
                loadPageNotFound();
                return;
            }

            let page = +pathParams[1];

            database.getAllPaged().then((data) => {
                if (data.size < page) {
                    loadPageNotFound();
                    return;
                }

                $wrapper.show();
                $notFoundContainer.hide();

                if (shouldLoadGridPage) {
                    $(configuration.main).html(htmlLoader.loadGridPage(data));
                    shouldLoadGridPage = false;
                }
                
                //$(configuration.main).show("drop", {}, 1000);
                if (shouldLoadPagination) {
                    paginationLogic.create(data);
                    shouldLoadPagination = false;
                }
            });
        } else if (path === "#our-team") {
            paginationRemove();
            $(configuration.main).html(htmlLoader.loadAboutUs);
        } else if (path === "#categories/animals") {
            paginationRemove();
            database.getAnimals().then((category) => {
                $(configuration.main).html(htmlLoader.loadCarousel(category));
            });

        } else if (path === "#categories/cars") {
            paginationRemove();
            database.getCars().then((category) => {
                $(configuration.main).html(htmlLoader.loadCarousel(category));
            });
        } else if (path === "#categories/cartoons") {
            paginationRemove();
            database.getCartoons().then((category) => {
                $(configuration.main).html(htmlLoader.loadCarousel(category));
            });

        } else if (path === "#categories/computers") {
            paginationRemove();
            database.getComputers().then((category) => {
                $(configuration.main).html(htmlLoader.loadCarousel(category));
            });
        } else if (path === "#categories/celebrities") {
            paginationRemove();
            database.getCelebs().then((category) => {
                $(configuration.main).html(htmlLoader.loadCarousel(category));
            });
        } else if (path === "#categories/landscapes") {
            paginationRemove();
            database.getLandscapes().then((category) => {
                $(configuration.main).html(htmlLoader.loadCarousel(category));
            });
        } else if (path === "#categories/futuristic") {
            paginationRemove();
            database.getFuturistics().then((category) => {
                $(configuration.main).html(htmlLoader.loadCarousel(category));
            });
        } else if (path === "#categories/sports") {
            paginationRemove();
            database.getSports().then((category) => {
                $(configuration.main).html(htmlLoader.loadCarousel(category));
            });
        } else {
           loadPageNotFound();
        }
    };

    function paginationRemove() {
        shouldLoadPagination = true;
        paginationLogic.remove();
    };

    function loadPageNotFound() {
        $notFoundContainer.show();
        $notFoundContainer.html(htmlLoader.loadPageNotFound());
        $wrapper.hide();
    };

    return {
        on
    };
})();