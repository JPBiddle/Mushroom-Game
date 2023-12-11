

//Array of mushrooms with two of each icon//
function newgame() {
    var mushrooms = ["/assets/images/mushroom_001.png", "/assets/images/mushroom_001.png", "/assets/images/mushroom_002.png", "/assets/images/mushroom_002.png",
        "/assets/images/mushroom_003.png", "/assets/images/mushroom_003.png", "/assets/images/mushroom_004.png", "/assets/images/mushroom_004.png", "/assets/images/mushroom_005.png",
        "/assets/images/mushroom_005.png", "/assets/images/mushroom_006.png", "/assets/images/mushroom_006.png", "/assets/images/mushroom_007.png", "/assets/images/mushroom_007.png",
        "/assets/images/mushroom_008.png", "/assets/images/mushroom_008.png"];

    //Randomise array of icons//
    mushrooms.sort(function () { return 0.5 - Math.random(); });

    const gamegrid = document.createElement('div');
    gamegrid.className = "gamegrid";
    document.body.appendChild(gamegrid);

    //Push images into body//
    mushrooms.forEach(function (mushroom) {
        const img = document.createElement('img');
        img.src = mushroom;
        img.height = "100";
        img.width = "100";
        img.className = "icon";
        gamegrid.appendChild(img);
    });
    
}

//Remove current array of mushrooms and generates new using newgame function// 
function reset() {
    const icons = document.getElementsByClassName("gamegrid");
    while (icons.length > 0) icons[0].remove();
    newgame();
}
