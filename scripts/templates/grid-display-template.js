/* globals $ */

const gridTemplate = function (wallpapers) {
    let $gridContainer = $("<div>");
    $gridContainer.addClass("grid-container");

    for (let i = 0; i < wallpapers.length; i++) {
        let wallpaper = wallpapers[i];

        let $img = $("<img>");
        $img.attr("src", wallpaper.location);
        $img.addClass("grid-wallpaper");

        let $imgContainer = $("<div>");
        $imgContainer.html($img);
        $imgContainer.addClass("grid-wallpaper-container");

        $gridContainer.append($imgContainer);
    }

    return $gridContainer;
};

const gridTemplatePaged = function (wallpapersObj, page) {
    let $gridContainer = $("<div>");
    $gridContainer.addClass("grid-container");

    for (let i = 0; i < wallpapersObj[page].length; i++) {
        let wallpaper = wallpapersObj[page][i];

        let $img = $("<img>");
        $img.attr("src", wallpaper.location);
        $img.addClass("grid-wallpaper");

        let $imgContainer = $("<div>");
        $imgContainer.html($img);
        $imgContainer.addClass("grid-wallpaper-container");

        $gridContainer.append($imgContainer);
    }

    return $gridContainer;
};

const gridPagination = function (pages) {
    let html = `
    <div class="pagination-test"> 
        <ul class="pagination">
    `;

    let first = true;

    for (let i = 0; i < pages; i++) {
        let pageNum = i + 1;

        if (first) {
            html += `<li class="page-item active"><a class="page-link" href="#home/` + pageNum + `"><span class="page-link">` + pageNum + `<span class="sr-only">(current)</span></span></a></li>`;
            first = false;
        } else {
            html += `<li class="page-item"><a class="page-link" href="#home/` + pageNum + `">` + pageNum + `</a></li>`;
        }
    }

    html += `
        </ul>
    </div>`;
    return html;
};