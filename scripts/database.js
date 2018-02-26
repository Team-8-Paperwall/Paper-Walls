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
        getAnimals,
        getCategory
    };
})();