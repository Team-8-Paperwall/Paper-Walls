/* globals $ configuration*/

const htmlLoader = (function () {
    function loadGrid(wallpapers) {
        let $gridContainer = $("<div>");
        $gridContainer.addClass("grid-container");

        for (let i = 0; i < wallpapers.length; i++) {
            let wallpaper = wallpapers[i];

            let $img = $("<img>");
            $img.attr("src", wallpaper.location);
            $img.addClass("grid-wallpaper");

            let $imgContainer = $("<div>");
            $imgContainer.html($img);
            $imgContainer.addClass("grid-wallpaper-container");

            $gridContainer.append($imgContainer);
        }

        return $gridContainer;
    };

    return {
        loadGrid
    };
})();