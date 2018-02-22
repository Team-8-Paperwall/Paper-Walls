/* globals $ */

var database = (function() {

    // Inner logic
    function getAll () {
        var wallpapers = [];

        $.getJSON("../data/data.json", function (data) {
            for (const category of data.categories) {
                    for (const wallpaper of category.wallpapers) {
                        wallpapers.push(wallpaper);
                    }
            }
       });

      return wallpapers;
    };

    function getAnimals() {
        return _getCategory("animals");
    };

    function getCars() {
        return _getCategory("cars");
    }

    function _getCategory (name) {
        var wallpapers = [];

        $.getJSON("../data/data.json", function (data) {
            for (const category of data.categories) {
                    if (category.name === name) {
                        for (const wallpaper of category.wallpapers) {
                            wallpapers.push(wallpaper);
                        }

                        break;
                    }
            }

        });

        return wallpapers;
    }

    // Expose API
    return {
        getAll,
        getAnimals,
        getCars
    };
})();
