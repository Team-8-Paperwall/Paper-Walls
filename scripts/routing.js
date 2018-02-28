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
                $notFoundContainer.html("");

                if (shouldLoadGridPage) {
                    configuration.main.html(htmlLoader.loadGridPage(data, page));
                    modalLogic.displayModal();
                     
                    shouldLoadGridPage = false;
                } else {
                    paginationLogic.goToPage(page);
                }

                //$(configuration.main).show("drop", {}, 1000);
                if (shouldLoadPagination) {
                    configuration.footer.html(htmlLoader.loadPagination(data.size, page));
                    shouldLoadPagination = false;
                }

            });
        } else if (path === "#our-team") {
            removePagination();
            configuration.main.html(htmlLoader.loadAboutUs());
        } else if (path === "#categories/animals") {
            removePagination();
            database.getAnimals().then((category) => {
                configuration.main.html(htmlLoader.loadCarousel(category));
            });

        } else if (path === "#categories/cars") {
            removePagination();
            database.getCars().then((category) => {
                configuration.main.html(htmlLoader.loadCarousel(category));
            });
        } else if (path === "#categories/cartoons") {
            removePagination();
            database.getCartoons().then((category) => {
                configuration.main.html(htmlLoader.loadCarousel(category));
            });

        } else if (path === "#categories/computers") {
            removePagination();
            database.getComputers().then((category) => {
                configuration.main.html(htmlLoader.loadCarousel(category));
            });
        } else if (path === "#categories/celebrities") {
            removePagination();
            database.getCelebs().then((category) => {
                configuration.main.html(htmlLoader.loadCarousel(category));
            });
        } else if (path === "#categories/landscapes") {
            removePagination();
            database.getLandscapes().then((category) => {
                configuration.main.html(htmlLoader.loadCarousel(category));
            });
        } else if (path === "#categories/futuristic") {
            removePagination();
            database.getFuturistics().then((category) => {
                configuration.main.html(htmlLoader.loadCarousel(category));
            });
        } else if (path === "#categories/sports") {
            removePagination();
            database.getSports().then((category) => {
                configuration.main.html(htmlLoader.loadCarousel(category));
            });
        } else {
            // removePagination();
           loadPageNotFound();
        }
    };

    function removePagination() {
        shouldLoadPagination = true;
        shouldLoadGridPage = true;
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