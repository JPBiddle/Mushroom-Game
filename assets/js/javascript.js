//test to link js//

document.body.onload = addElement;

function addElement() {
    const newDiv = document.createElement("div");
    const newContent = document.createTextNode("Hello");
    newDiv.appendChild(newContent);
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
}