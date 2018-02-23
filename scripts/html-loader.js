/* globals $ configuration*/

const htmlLoader = (function () {
    function loadGrid(wallpapers) {
        let $gridContainer = $("<div>");
        $gridContainer.addClass("grid-container");

        for (let i = 0; i < wallpapers.length; i++) {
            let wallpaper = wallpapers[i];

            let $img = $("<img>");
            $img.attr("src", wallpaper.location);

            let $imgContainer = $("<div>");
            $imgContainer.html($img);

            $gridContainer.append($imgContainer);
        }

        $(configuration.main).html($gridContainer);
    };

    return {
        loadGrid
    };
})();
