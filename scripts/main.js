$('#for-test-delete-later').on("click", function () {
    $.getJSON("../data/data.json", function (data) {
        let loc = data.wallpapers[0].location;
        let img = $('<img>');
        img.attr('src', loc);
        img.appendTo('#main-content');
    });
})