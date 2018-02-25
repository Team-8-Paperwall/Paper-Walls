/* globals $ database configuration htmlLoader*/

(function () {
    $(".dropdown-menu").on("click", ".list-item", function () {
        var categoryName = $(this).attr("data-name");
        console.log(categoryName);
        database.getCategory(categoryName).then((category) => {
            var generateCarouselItem = function (imageSrc) {
                return $("<div>")
                    .addClass("item")
                    .append(
                        $("<img>").attr("src", imageSrc)
                    );
            };

            $(configuration.main).load(htmlLoader.loadCarousel(), function () {
                for (let i = 0; i < category.length; i++) {
                    let el = category[i];
                    let div = generateCarouselItem(el.location);
                    $(".carousel-inner").append(div);
                }

                $(".item").eq(0).addClass("active");
                $(".carousel").carousel({
                    interval: 2000
                });
            });
        });
    });
})();