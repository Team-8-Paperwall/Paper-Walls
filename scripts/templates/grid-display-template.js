/* globals $ */

const gridTemplate = (function () {

    const gridTemplatePaged = function (wallpapersObj, page) {
        let $gridContainer = $("<div>");
        $gridContainer.addClass("outer-grid-container");

        Object.keys(wallpapersObj).forEach(key => {
            let $innerGridContainer = $("<div>");
            $innerGridContainer.addClass("inner-grid-container").addClass(`grid-container-${key}`).addClass("hidden");
            if (key === page.toString()) {
                $innerGridContainer.removeClass("hidden").addClass("active");
            }

            if (key !== "size") {
                wallpapersObj[key].forEach(wallpaper => {
                    let $img = $("<img>");
                    $img.attr("src", wallpaper.location);
                    $img.addClass("grid-wallpaper");

                    let $imgContainer = $("<div>");
                    $imgContainer.html($img);
                    $imgContainer.addClass("grid-wallpaper-container");
                    $innerGridContainer.append($imgContainer);
                });

                $gridContainer.append($innerGridContainer);
            }
        });

        return $gridContainer;
    };

    const gridPagination = function (pages, current) {
        let html = `
    <div class="pagination-test"> 
        <ul class="pagination">
    `;

        for (let i = 0; i < pages; i++) {
            let pageNum = i + 1;
            if (pageNum === +current) {
                html += `<li class="page-item page-item-${pageNum} active"><a class="page-link" href="#home/` + pageNum + `">` + pageNum + `</a></li>`;
            } else {
            html += `<li class="page-item page-item-${pageNum}"><a class="page-link" href="#home/` + pageNum + `">` + pageNum + `</a></li>`;
            }
        }

        html += `
        </ul>
    </div>`;
        return html;
    };

    return {
        gridTemplatePaged,
        gridPagination
    };
})();