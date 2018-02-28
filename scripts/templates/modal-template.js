const modalTemplate = function () {

    return `
  <div id="myModal" class="modal">
        <span class="close">&times;</span>
        <img class="modal-content" id="img01">
        <button id="downloadButton" type="button" class="btn btn-success">Download</button>  
        <a id="tempLink" href="" download="paperWallsWallpaper"></a>      
        <div id="caption"></div>
    </div>    
`;
};