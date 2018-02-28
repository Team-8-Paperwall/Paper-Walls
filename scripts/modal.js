 (function(){
       var modal = $("#myModal");

        var modalImg = $("#img01");
        var captionText = $("#caption");
       $('.grid-wallpaper').click(function () {
            console.log("dsd");
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });

        // Get the <span> element that closes the modal
        var span = $(".close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        };
 })();
