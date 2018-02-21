$('#for-test-delete-later').on("click", function () {
    $.getJSON("../data/data.json", function (data) {
        for (let i = 0; i < data.categories[0].animals.length; i++) {
            let loc = data.categories[0].animals[i].location;
            let $img = $('<img>');
            $img.addClass("testCatPic");
            $img.attr('src', loc);
            $img.appendTo('#main-content');

            let $div = $("<div>");
            $div.addClass("media");

            for (let j = 0; j < data.categories[0].animals[i].comments.length; j++) {
                const comment = data.categories[0].animals[i].comments[j];
                const author = comment.author;
                const content = comment.content;

                let $divMC = $('<div>');
                //$divMC.addClass("media-body");

                let $img = $('<img>');
                $img.addClass("img-thumbnail");
                $img.attr('src', "../imgs/logoPW.png");

                let $h5 = $("<h5>");
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
        }

    });

})