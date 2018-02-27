/* globals $  configuration htmlLoader*/

const paginationLogic = (function () {

    const create = function (data) {
        $(configuration.footer).html(htmlLoader.loadPagination(data.size));

        $(".pagination").on("click", ".page-item", function () {
            let $this = $(this);
            let $currentActive = $(".page-item.active");
            let currentNum = $currentActive.children("a").text();
            let clickedNum = $this.children("a").text();
            $currentActive.removeClass("active");
            $this.addClass("active");
            $(`.grid-container-${currentNum}`).addClass("hidden");
            $(`.grid-container-${clickedNum}`).removeClass("hidden");
        });
    };

    const remove = function() {
        $(configuration.footer).html("");
    };

    return {
        create,
        remove
    };
})();