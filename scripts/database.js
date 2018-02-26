/* globals $ Promise*/

const database = (function () {

    // Inner logic
    function getAll() {
        return new Promise((res, rej) => {
            $.getJSON("../data/data.json", function (data) {
                const wallpapers = [];
                for (const category of data.categories) {
                    for (const wallpaper of category.wallpapers) {
                        wallpapers.push(wallpaper);
                    }
                }
                res(wallpapers);
            });
        });
    };

    function getAllPaged() {
        return new Promise((res, rej) => {
            $.getJSON("../data/data.json", function (data) {
                let wallpapers = {};
                var page = 1;
                let wallpapersPerPage = [];

                for (const category of data.categories) {
                    for (const wallpaper of category.wallpapers) {
                        if (wallpapersPerPage.length === 8) {
                            wallpapers[page] = wallpapersPerPage;
                            page += 1;
                            wallpapersPerPage = [];
                        } else {
                            wallpapersPerPage.push(wallpaper);
                        }
                    }
                }
                wallpapers[page] = wallpapersPerPage;
                res(wallpapers);
            });
        });
    };

    function getAnimals() {
        return getCategory("animals");
    }

    // TODO: add functions to get all other categories

    function getCategory(name) {
        return new Promise((res, rej) => {
            $.getJSON("../data/data.json", function (data) {
                for (const category of data.categories) {
                    if (category.name === name) {
                        res(category.wallpapers);
                    }
                }
            });
        });
    }

    // Expose API
    return {
        getAll,
        getAllPaged,
        getAnimals,
        getCategory
    };
})();