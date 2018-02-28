const modalLogic = (function () {
    const displayModal = function () {
        $(".grid-wallpaper-container").on("click", ".grid-wallpaper", function () {
            var $this = $(this);
            configuration.footer.append(htmlLoader.loadModal());
            let $modal = $(".modal");
            let $modalImage = $(".modal-content");
            $(".close").on("click", function () {
                $modal.css("display", "none");
                $modal.remove();
            });
            $modal.css("display", "block");
            $modalImage.attr("src", $this.attr("src"));
            $("#downloadButton").on("click", function(){
      download($modalImage,"#tempLink");
    });
        });
   
   
    };

    return{
        displayModal
    }
})();