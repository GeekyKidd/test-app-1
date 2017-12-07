var p;
var upress = false;
var dpress = false;
var rpress = false;
var lpress = false;
var roadv = 0;
var roadh = 0;
var scl
var u;
var d;
var l;
var r;
var a;
console.log('roads neutral');

function setup() {
  createCanvas(600, 600); 
  p = new Player();
  begin();
}

function draw() {
  background(51);
  road();
  p.scroll();
  p.update();
  p.show();
  //marks();
}

function begin() {
  if (confirm("Would you like to begin the game?") === true) {
    p.name = prompt("What's your name?", "Type name here...");
      return;
  } else {
    begin();
  }
}

function road() {
  if (roadv === 0 && roadh === 0) {
    a = line(width/2, 0, width/2 + 40, 0);
    fill(138, 43, 226);
    rect((width/2) - 40, 0, 80, 600);
    noStroke();
    rect(0, (height/2) - 40, 600, 80);
  } else if (roadv === 1 && roadh === 0) {
    rect((width/2) - 40, 0, 80, 600);
  } else if (roadh === 1) {
    rect(0, (height/2) - 40, 600, 80);
  }
}












function keyPressed() {
  if (keyCode === UP_ARROW) {
    p.dir(0, -0.2);
    upress = true;
  } else if (keyCode === DOWN_ARROW) {
    p.dir(0, 0.2);
    dpress = true;
  } else if (keyCode === RIGHT_ARROW) {
    p.dir(0.2, 0);
    rpress = true;
  } else if (keyCode === LEFT_ARROW) {
    p.dir(-0.2, 0);
    lpress = true;
  }
}

function keyReleased() {
  if (keyCode === UP_ARROW) {
    upress = false;
  } else if (keyCode === DOWN_ARROW) {
    dpress = false;
  } else if (keyCode === RIGHT_ARROW) {
    rpress = false;
  } else if (keyCode === LEFT_ARROW) {
    lpress = false;
  }
  if (upress === true) {
    p.dir(0, -0.2);
  } else if (dpress === true) {
    p.dir(0, 0.2);
  } else if (rpress === true) {
    p.dir(0.2, 0);
  } else if (lpress === true) {
    p.dir(-0.2, 0);
  } else {
    p.dir(0, 0);
  }
}

////all of this is unnecessary now, but I used it for testing stuff
//function marks() {
//  line(300, 600, 300, 590); //bottom
////  line(300, 0, 300, 10); //top
////  line(0, 300, 10, 300); //left
////  line(600, 300, 590, 300); //right
//}

//function mousePressed(){
// console.log(p.x, p.y, dist(p.x, 0, 0, 300)); 
//}