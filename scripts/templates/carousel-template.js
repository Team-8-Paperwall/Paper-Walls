/* globals $ configuration*/

const carouselTemplate = function (category) {
    const html = `
    <div class = "row">
    <div id="whole" class = "col-lg-7 col-md-7 col-sm-7 col-xs-7">
    <button id="dln" class="col-lg-7 col-md-7 col-sm-7 col-xs-7 btn btn-primary">Download!</button>
    <a id="link" href="" download="paperWallsWallpaper"></a>
 
    
    <div id="myCarousel" class="col-lg-10 col-md-10 col-sm-10 col-xs-10 carousel slide" data-ride="carousel">
    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 carousel-inner">
  


    </div>
    </div>
    <!-- Left and right controls -->
    <a class="col-lg-7 col-md-7 col-sm-7 col-xs-7 left carousel-control" href="#myCarousel" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="col-lg-7 col-md-7 col-sm-7 col-xs-7 right carousel-control" href="#myCarousel" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right"></span>
        <span class="sr-only">Next</span>
    </a>
  
    <button id="commentBtn" class="col-lg-7 col-md-7 col-sm-7 col-xs-7 btn btn-primary">Add Comment!</button>
</div>
</div>


      `;

    // const commentsTemplate = function (element) {
    //     const htmlCom = `
    //     <div id="commentss" class="container">
    //     <div class="row">
    //     <div class="col-sm-12">a
    //     <h3>User Comment Example</h3>
    //     </div><!-- /col-sm-12 -->
    //     </div><!-- /row -->

    //       `;
    const generateCommentSection = function (content, author, picture) {
        let cont = $("<div>")
            .addClass("container");
        let rowClass1 = $("<div>")
            .addClass("row")
            .appendTo(cont);
        let colClass1 = $("<div>")
            .addClass("col-sm-12")
            .appendTo(rowClass1);

        let rowClass = $("<div>")
            .addClass("row")
            .appendTo(rowClass1);

        let colClass = $("<div>")
            .addClass("col-sm-1")
            .appendTo(rowClass);


        let thumbnail = $("<div>")
            .addClass("thumbnail")
            .append(
                $("<img>").attr("src", picture)
            )
            .appendTo(colClass);

        let colClass2 = $("<div>")
            .addClass("col-sm-5")
            .appendTo(cont);

        let panelDef = $("<div>")
            .addClass("panel panel-default")
            .appendTo(colClass2);

        let panelHead = $("<div>")
            .addClass("panel-heading")
            .text(author)
            .appendTo(panelDef);

        let panelBody = $("<div>")
            .addClass("panel-body")
            .text(content)
            .appendTo(panelDef);
        return cont;
    };

    const generateCarouselItem = function (imageSrc, comments) {
        let car = $("<div>");
        car.addClass("item");
        let imgC = $("<div>");
        imgC.addClass("col-lg-12 col-md-12 col-sm-12 col-xs-12 carouselImage");
        imgC.append($("<img>").attr("src", imageSrc));
        car.append(imgC);
        let commentsDiv = $("<div>");
        commentsDiv.addClass("komentari");
        comments.forEach((com) => {

            commentsDiv.append(generateCommentSection(com.content, com.author, com.picture),

            );

            car.append(commentsDiv);
        });

        return car;


    };


    $(configuration.main).html(html);

    category.forEach(function (el) {
        let div = generateCarouselItem(el.location, el.comments);
        $(".carousel-inner").append(div);
    });

    $("#dln").on("click", function () {
        var source = $(".active img").attr("src");
        $("#link").attr("href", source);
        $("#link").attr("download", Math.floor(Math.random() * 10000) + 1);
        $("#link").get(0).click();

    });
    $("#commentBtn").on("click", function () {
        var person = prompt("Please enter your name: ");

        var contentOfPerson = prompt("Please enter your comment: ");

    })

    $(".item").eq(0).addClass("active");

    $(".carousel").carousel({
        interval: 0
    });
};