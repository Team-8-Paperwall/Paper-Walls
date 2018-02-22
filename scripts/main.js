/* globals $ console database displayGrid*/

(function () {
    database.getAll().then((all) => {
        let $gridContainer = $("<div>");
        $gridContainer.addClass("grid-container");

        for (let i = 0; i < all.length; i++) {
            let wallpaper = all[i];

            let $img = $("<img>");
            $img.attr("src", wallpaper.location);

            let $imgContainer = $("<div>");
            $imgContainer.html($img);

            $gridContainer.append($imgContainer);
        }

        $("#main-content").html($gridContainer);
    });
})();