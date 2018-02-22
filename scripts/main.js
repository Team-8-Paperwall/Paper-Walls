/* globals $ console database displayGrid*/

(function () {
    $("#main-content").html(displayGrid());

    var all = database.getAll();
})();
