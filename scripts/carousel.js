/* globals $ database */

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

            $("#main-container").html(
                `  <div id="myCarousel" class="carousel slide" data-ride="carousel">
             
                <ol class="carousel-indicators">
                  <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
                  <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
              
                <div class="carousel-inner">
            
                  </div>
            
                <!-- Left and right controls -->
                <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                  <span class="glyphicon glyphicon-chevron-left"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#myCarousel" data-slide="next">
                  <span class="glyphicon glyphicon-chevron-right"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            `);

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
})();