const download = function(imageSelector,aId){ 
        var source = $(imageSelector).attr("src");
        $(aId).attr("href", source);
        $(aId).attr("download", Math.floor(Math.random() * 10000) + 1);
        $(aId).get(0).click();  
}