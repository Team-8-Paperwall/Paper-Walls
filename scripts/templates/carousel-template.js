/* globals $ configuration*/

const carouselTemplate = function (category) {
    const html = `
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
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
    <button id="dln" class="btn btn-primary">Download!</button>
    <a id="link" href="" download="paperWallsWallpaper"></a>
    </a>
</div>
      `;

    var generateCarouselItem = function (imageSrc) {
        return $("<div>")
            .addClass("item")
            .append(
                $("<img>").attr("src", imageSrc)
            );
    };

    $(configuration.main).html(html);

    category.forEach(function(el){
        let div = generateCarouselItem(el.location);
        $(".carousel-inner").append(div);       
    });

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
};