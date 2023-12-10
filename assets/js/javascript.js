//Array of mushrooms with two of each icon//

const mushrooms = ["/assets/images/mushroom_001.png", "/assets/images/mushroom_001.png", "/assets/images/mushroom_002.png", "/assets/images/mushroom_002.png",
    "/assets/images/mushroom_003.png", "/assets/images/mushroom_003.png", "/assets/images/mushroom_004.png", "/assets/images/mushroom_004.png", "/assets/images/mushroom_005.png",
    "/assets/images/mushroom_005.png", "/assets/images/mushroom_006.png", "/assets/images/mushroom_006.png", "/assets/images/mushroom_007.png", "/assets/images/mushroom_007.png",
    "/assets/images/mushroom_008.png", "/assets/images/mushroom_008.png"];

mushrooms.sort(function () { return 0.5 - Math.random(); });


mushrooms.forEach(function (image) {
    var img = document.createElement('img');
    img.src = image;
    img.height = "100";
    img.width = "100";
    document.body.appendChild(img);
});

// let random_shroom = mushrooms.sort(() => (math.random() > .5) ? 2 : -1);

// for (var i = 0; i < mushrooms.length; i++) {
// }



// function shuffleArray(mushrooms) {
//     const newArray = [...mushrooms];

//     for (let i = newArray.length - 1; i > 0; --i) {
//         const j = Math.floor(Math.random() * i);
//         const temp = newArray[i];
//         newArray[i] = newArray[j];
//         newArray[j] = temp;
//     }

//     return newArray;
// }
var random_shroom = mushrooms.sort(() => (math.random() > .5) ? 2 : -1);

for (var i = 0; i < mushrooms.length; i++) {
}
// let grid = document.createElement('div');
// grid.className = 'shroom';
// grid.innerHTML = random_shroom[i];
// document.querySelector('.game-grid').appendChild(grid);
