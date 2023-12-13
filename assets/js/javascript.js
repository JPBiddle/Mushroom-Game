//Array of mushrooms with two of each icon//
function newgame() {
    var mushrooms = ["/assets/images/mushroom_001.png", "/assets/images/mushroom_001.png", "/assets/images/mushroom_002.png", "/assets/images/mushroom_002.png",
        "/assets/images/mushroom_003.png", "/assets/images/mushroom_003.png", "/assets/images/mushroom_004.png", "/assets/images/mushroom_004.png", "/assets/images/mushroom_005.png",
        "/assets/images/mushroom_005.png", "/assets/images/mushroom_006.png", "/assets/images/mushroom_006.png", "/assets/images/mushroom_007.png", "/assets/images/mushroom_007.png",
        "/assets/images/mushroom_008.png", "/assets/images/mushroom_008.png"];

    //Randomise array of icons//
    mushrooms.sort(function () { return 0.5 - Math.random(); });

    //Create div to hold images//
    const gamegrid = document.createElement('div');
    gamegrid.className = "gamegrid";
    document.body.appendChild(gamegrid);

    //Push images into body//
    mushrooms.forEach(function (mushroom) {
        const img = document.createElement('img');
        img.src = mushroom;
        img.height = "110";
        img.width = "110";
        img.className = "icon";
        img.addEventListener("click", reveals);
        gamegrid.appendChild(img);
        return;
    });

};


//Remove current array of mushrooms and generates new using newgame function// 
function reset() {
    const icons = document.getElementsByClassName("gamegrid");
    while (icons.length > 0) {
        icons[0].remove();
    };
    newgame();
    return;
}

//Function to change class of icons to reveal them//s
//Thank you tutor Joanne for helping me solve this problem//
function reveals() {
    this.classList.add("revealed");
    this.classList.remove("icon");
    setTimeout(() => {
        this.classList.remove("revealed");
        this.classList.add("icon");
    }, 1000);
}

//Reset if not matched//
// function match() {
//     setTimeout(function () {
//         if (document.getElementsByClassName("revealed").length > 1) {
//             if (document.getElementsByClassName("revealed")[0].innerHTML ==
//                 document.getElementsByClassName("revealed")[1].innerHTML) {
//                 document.getElementsByClassName("revealed")[0].this.classList.remove("icon");
//                 document.getElementsByClassName("revealed")[1].this.classList.remove("icon");
//             };
//         }
//     }, 500);
// }