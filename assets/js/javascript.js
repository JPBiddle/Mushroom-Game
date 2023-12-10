//Array of mushrooms with two of each icon//

var mushrooms = ["/assets/images/mushroom_001.png", "/assets/images/mushroom_001.png", "/assets/images/mushroom_002.png", "/assets/images/mushroom_002.png",
    "/assets/images/mushroom_003.png", "/assets/images/mushroom_003.png", "/assets/images/mushroom_004.png", "/assets/images/mushroom_004.png", "/assets/images/mushroom_005.png",
    "/assets/images/mushroom_005.png", "/assets/images/mushroom_006.png", "/assets/images/mushroom_006.png", "/assets/images/mushroom_007.png", "/assets/images/mushroom_007.png",
    "/assets/images/mushroom_008.png", "/assets/images/mushroom_008.png"];
mushrooms.forEach(function (image) {
    var img = document.createElement('img');
    img.src = image;
    img.height = "100";
    img.width = "100";
    document.body.appendChild(img);
});