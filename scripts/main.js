/* globals $ database htmlLoader*/

(function () {
    database.getAll().then((all) => {
        htmlLoader.loadGrid(all);
    });

    $("#our-team").on("click", function(){
       $(configuration.main).html(htmlLoader.loadAboutUs());
    })
})();

