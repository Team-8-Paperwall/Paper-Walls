$('#for-test-delete-later').on("click", function () {
    $.getJSON("../data/data.json", function (data) {
        let loc = data.wallpapers[0].location;
        let $img = $('<img>');
        $img.addClass("testCatPic");
        $img.attr('src', loc);
        $img.appendTo('#main-content');

        let $div = $('<div>');
        $div.addClass("media");

        for (let i = 0; i < data.wallpapers[0].comments.length; i++) {
            const comment = data.wallpapers[0].comments[i];
            const author = comment.author;
            const content = comment.content;

            let $divMC = $('<div>');
            //$divMC.addClass("media-body");

            let $img = $('<img>');
            $img.addClass("img-thumbnail");
            $img.attr('src', "../imgs/logoPW.png");

            let $h5 = $('<h5>');
            $h5.addClass("author");
            $h5.text(author);

            let $p = $('<p>');
            $p.text(content);

            $divMC.append($h5);
            $divMC.append($img);
            $divMC.append($p);

            $div.append($divMC);
        }

        $div.appendTo('#main-content');
    });
})