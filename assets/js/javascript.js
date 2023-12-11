

//Array of mushrooms with two of each icon//
function newgame() {
    var mushrooms = ["/assets/images/mushroom_001.png", "/assets/images/mushroom_001.png", "/assets/images/mushroom_002.png", "/assets/images/mushroom_002.png",
        "/assets/images/mushroom_003.png", "/assets/images/mushroom_003.png", "/assets/images/mushroom_004.png", "/assets/images/mushroom_004.png", "/assets/images/mushroom_005.png",
        "/assets/images/mushroom_005.png", "/assets/images/mushroom_006.png", "/assets/images/mushroom_006.png", "/assets/images/mushroom_007.png", "/assets/images/mushroom_007.png",
        "/assets/images/mushroom_008.png", "/assets/images/mushroom_008.png"];

    //Randomise array of icons//
    mushrooms.sort(function () { return 0.5 - Math.random(); });

    //Push images into body//
    mushrooms.forEach(function (mushroom) {
        var img = document.createElement('img');
        img.src = mushroom;
        img.height = "100";
        img.width = "100";
        img.className = "icon";
        document.body.appendChild(img);
    });
}


function reset() {
    const icons = document.getElementsByClassName("icon");
    while (icons.length > 0) icons[0].remove();
    newgame();
}
