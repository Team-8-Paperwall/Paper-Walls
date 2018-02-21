$('#for-test-delete-later').on("click", function () {
    let loc = data[0].wallpapers[0].location;
    let img = $('<img>');
    img.attr('src', loc);
    img.appendTo('#main-content');
})