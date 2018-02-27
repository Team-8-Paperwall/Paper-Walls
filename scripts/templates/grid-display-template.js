/* globals $ */

const gridTemplate = (function () {

    const gridTemplatePaged = function (wallpapersObj) {
        let $gridContainer = $("<div>");
        $gridContainer.addClass("outer-grid-container");

        Object.keys(wallpapersObj).forEach(key => {
            let $innerGridContainer = $("<div>");
            $innerGridContainer.addClass("inner-grid-container").addClass(`grid-container-${key}`);
            if (key !== "1") {
                $innerGridContainer.addClass("hidden");
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

    const gridPagination = function (pages) {
        let html = `
    <div class="pagination-test"> 
        <ul class="pagination">
    `;

        let first = true;

        for (let i = 0; i < pages; i++) {
            let pageNum = i + 1;

            if (first) {
                html += `<li class="page-item active"><a class="page-link" href="#home/` + pageNum + `">` + pageNum + `</a></li>`;
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

    return {
        gridTemplatePaged,
        gridPagination
    };
})();