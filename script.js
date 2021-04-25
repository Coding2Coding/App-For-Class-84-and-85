var canvas = document.getElementById("myCanvas");
var canvasReference = canvas.getContext("2d");
var width = 140;
var height = 70;
var xCoordinate = 200;
var yCoordinate = 200;
var images = ["image2.jpg", "image20.jpg", "image.jpg", "image20000.jpg", "mars.jpg"];
var randomNumber = Math.floor(Math.random()*5);
var backgroundImage = images[randomNumber];
console.log("The background images is"+" "+backgroundImage+".");
var itemImage = "rover.png";
var backgroundImage2;
var itemImage2;
function background() {
    console.log("check");
    backgroundImage2 = new Image();
    backgroundImage2.src = backgroundImage;
    backgroundImage2.onload = uploadBackground;
    itemImage2 = new Image();
    itemImage2.onload = uploadItem;
    itemImage2.src = itemImage;
}

function uploadBackground() {
    canvasReference.drawImage(backgroundImage2, 0, 0, canvas.width, canvas.height);
}

function uploadItem() {
    canvasReference.drawImage(itemImage2, xCoordinate, yCoordinate, width, height);
}

window.addEventListener("keydown", keyDown);

function keyDown(e) {
    var keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == "37") {
        moveleft();
        console.log("move left");
    }
    if(keyPressed == "38") {
        moveup();
        console.log("move up");
    }
    if(keyPressed == "39") {
        moveright();
        console.log("move right");
    }
    if(keyPressed == "40") {
        movedown();
        console.log("move down");
    }
}

function moveup() {
    if(yCoordinate > 0) {
        yCoordinate = yCoordinate - 14;
        console.log("The new y coordinate is"+" "+yCoordinate+".");
        uploadBackground();
        uploadItem();
    }
}

function movedown() {
    if(yCoordinate < 678) {
        yCoordinate = yCoordinate + 14;
        console.log("The new y coordinate is"+" "+yCoordinate+".");
        uploadBackground();
        uploadItem();
    }
}

function moveleft() {
    if(xCoordinate > 0) {
        xCoordinate = xCoordinate - 14;
        console.log("The new x coordinate is"+" "+xCoordinate+".");
        uploadBackground();
        uploadItem();
    }
}

function moveright() {
    if(xCoordinate < 678) {
        xCoordinate = xCoordinate + 14;
        console.log("The new x coordinate is"+" "+xCoordinate+".");
        uploadBackground();
        uploadItem();
    }
}

