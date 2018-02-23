/* globals $ database htmlLoader configuration*/

(function () {
    database.getAll().then((all) => {
        $(configuration.main).html(htmlLoader.loadGrid(all)).hide();
        $(configuration.main).show("drop", {}, 1000);
    });

<<<<<<< HEAD
    $("#our-team").on("click", function(){
       $(configuration.main).html(htmlLoader.loadAboutUs());
    })
})();

=======
})();
>>>>>>> 265f8242d060a0cc07a790c2cabb871a7f77446e
