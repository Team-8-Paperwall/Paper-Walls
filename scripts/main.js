/* globals $ database htmlLoader*/

(function () {
    database.getAll().then((all) => {
        htmlLoader.loadGrid(all);
    });
})();