/* globals $ database configuration htmlLoader*/

(function () {
    $(".dropdown-menu").on("click", ".list-item", function () {
        var categoryName = $(this).attr("data-name");
        database.getCategory(categoryName).then((category) => {
            var generateCarouselItem = function (imageSrc) {
                return $("<div>")
                    .addClass("item")
                    .append(
                        $("<img>").attr("src", imageSrc)
                    );
            };

            $(configuration.main).html(htmlLoader.loadCarousel());

            for (let i = 0; i < category.length; i++) {
                let el = category[i];
                let div = generateCarouselItem(el.location);

                $(".carousel-inner").append(div);

            }

            $("#dln").on("click", function () {
                var source = $(".active img").attr("src");

                $("#link").attr("href", source);
                $("#link").attr("download", Math.floor(Math.random() * 10000) + 1);

                $("#link").get(0).click();
            });

            $(".item").eq(0).addClass("active");


            $(".carousel").carousel({
                interval: 2000
            });
        });
    });
})();