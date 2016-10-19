var value = 0;
var pg;

function setup() {           // **change** void setup() to function setup()
  createCanvas(windowWidth, windowHeight, WEBGL);    // **change** size() to createCanvas()
  noFill();                  // noFill() is the same
  pg = createGraphics(200, 200);
  pg.textSize(100);
}

function draw() {                         // **change** void draw() to function draw()
  // background(0);                          // background() is the same



	// textSize(100);
	// stroke(value);               // stroke() is the same
	// text("George Henry Rowe", mouseX, mouseY);
  rotateX(frameCount*0.01);
  rotateY(frameCount*0.01);
  rotateZ(mouseX*0.01);
  // pg.background(100,50);
  // pg.text('hello!', 255, 100);
  // texture(pg);  
  // translateZ(frameCount*0.01);
  box(200,200,200);
  
}

function mouseClicked() {
  if (value == 0) {
    value = 255;
  } else {
    value = 0;
  }
}