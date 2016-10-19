var value = 0;

function setup() {           // **change** void setup() to function setup()
  createCanvas(windowWidth, windowHeight);    // **change** size() to createCanvas()
  noFill();                  // noFill() is the same
}

function draw() {                         // **change** void draw() to function draw()
  // background(0);                          // background() is the same
  // for (var i = 0; i < 200; i += 2) {     // **change** int i to var i
  //   strokeWeight(10);
  //   point(i*0.5,i*2,i*1.5,i*0.2);
  // }
  // push();
	textSize(100);
	stroke(value);               // stroke() is the same
	text("George Henry Rowe", mouseX, mouseY);
  
  // pop();
}

function mouseClicked() {
  if (value == 0) {
    value = 255;
  } else {
    value = 0;
  }
}