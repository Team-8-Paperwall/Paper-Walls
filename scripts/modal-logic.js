/* globals $ configuration htmlLoader download*/

const modalLogic = (function () {
    const displayModal = function () {
        $(".grid-wallpaper-container").on("click", ".grid-wallpaper", function () {
            configuration.aside.append(htmlLoader.loadModal());
            let $modal = $(".modal");
            let $modalImage = $(".modal-content");
            $modal.css("display", "block");
            $modalImage.attr("src", $(this).attr("src"));

            $("#downloadButton").on("click", function () {
                download($modalImage, "#tempLink");
            });

             $(".close").on("click", function () {
                $modal.css("display", "none");
                $modal.remove();
            });
        });
    };

    return {
        displayModal
    };

})();