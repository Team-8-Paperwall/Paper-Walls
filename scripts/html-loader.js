/* globals $ configuration*/

const htmlLoader = (function () {
    const loadGrid = function (wallpapers) {
        let $gridContainer = $("<div>");
        $gridContainer.addClass("grid-container");

        for (let i = 0; i < wallpapers.length; i++) {
            let wallpaper = wallpapers[i];

            let $img = $("<img>");
            $img.attr("src", wallpaper.location);
            $img.addClass("grid-wallpaper");

            let $imgContainer = $("<div>");
            $imgContainer.html($img);
            $imgContainer.addClass("grid-wallpaper-container");

            $gridContainer.append($imgContainer);
        }

        return $gridContainer;
    };

    const loadAboutUs = function () {
        return `  <!-- Page Content -->
    <div class="container-fluid team">

      <!-- Introduction Row -->
      <h1 class="my-10 about-us">About us</h1>
      <p class = "about-us">Team 8, Telerik Academy Alpha, .NET Track</p>

      <!-- Team Members Row -->
      <div class="row about-row" >
       <div class="col-lg-3 col-sm-6 text-center mb-4 team-member">
          <img class="rounded img-fluid" src="../imgs/team pictures/plamen.jpg" alt="">  
          <h4 class = "member-name">Plamen Atanasov</h>
          <h5 class = "company-position">CTO</h5>
          <p class = "member-description">dura bura dura bura dura bura</p>
        </div>
       <div class="col-lg-3 col-sm-6 text-center mb-4 team-member">
          <img class="rounded img-fluid" src="../imgs/team pictures/iskra.jpg" alt="">  
          <h4 class = "member-name">Iskra Lumbeva</h4>
          <h5 class = "company-position">CEO</h5>
          <p class = "member-description">dura bura dura bura dura bura</p>
        </div>
        <div class="col-lg-3 col-sm-6 text-center mb-4 team-member">
          <img class="rounded img-fluid" src="../imgs/team pictures/stefan.jpg" alt="">  
          <h4 class = "member-name">Stefan Zhekov</h4>
          <h5 class = "company-position">Intern</h5>
          <p class = "member-description">dura bura dura bura dura bura</p>
        </div>     
      </div>
    </div>`;
    };

    return {
        loadGrid,
        loadAboutUs
    };
})();