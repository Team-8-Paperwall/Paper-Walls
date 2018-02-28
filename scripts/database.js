/* globals $ Promise */

const database = (function () {
    const cachedPaged = {};

    function getAllPaged() {
        return new Promise((res, rej) => {
            if (cachedPaged.hasOwnProperty("cache")) {
                res(cachedPaged["cache"]);
            } else {
                $.getJSON("../data/data.json", function (data) {
                    let wallpapers = {};
                    var page = 1;
                    let wallpapersPerPage = [];
    
                    for (const category of data.categories) {
                        for (const wallpaper of category.wallpapers) {
                            if (wallpapersPerPage.length === 9) {
                                wallpapers[page] = wallpapersPerPage;
                                page += 1;
                                wallpapersPerPage = [];
                            } else {
                                wallpapersPerPage.push(wallpaper);
                            }
                        }
                    }
    
                    if (wallpapersPerPage.length > 0) {
                        wallpapers[page] = wallpapersPerPage;
                    }
    
                    wallpapers.size = (+page - 1);
                    cachedPaged["cache"] = wallpapers;
                    res(wallpapers);
                });
            }
        });
    };

    function getAnimals() {
        return getCategory("animals");
    }
    function getCars() {
        return getCategory("cars");
    }
    function getCartoons() {
        return getCategory("cartoons");
    }
    function getCelebs() {
        return getCategory("celebs");
    }
    function getComputers() {
        return getCategory("computers");
    }
    function getFuturistics() {
        return getCategory("futuristic");
    }
    function getLandscapes() {
        return getCategory("landscapes");
    }
    function getSports() {
        return getCategory("sports");
    }

    function getCategory(name) {
        return new Promise((res, rej) => {
            $.getJSON("../data/data.json", function (data) {
                data.categories.forEach(function(category){
                        if (category.name === name) {
                        res(category.wallpapers);
                    }
                });
            });
        });
    }
   
    // Expose API
    return {
        getAllPaged,
        getAnimals,
        getCars,
        getCartoons,
        getComputers,
        getCelebs,
        getFuturistics,
        getLandscapes,
        getSports,
        getCategory
    };
})();