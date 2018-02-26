const paginationLogic = (function () {

    const create = function (data) {
        $(configuration.footer).html(gridPagination(data.size));

        $(".pagination").on("click", ".page-item", function () {
            let currentActive = $(".page-item.active");
            currentActive.removeClass("active");
            $(this).addClass("active");
        });
    }

    const remove = function() {
        $(configuration.footer).html("");
    };    

    return {
        create,
        remove
    };  
})();