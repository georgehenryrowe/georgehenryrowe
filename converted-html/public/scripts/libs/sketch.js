var value = 0;
var pg;
var rects = [];
var numRects = 40;
var score = 0;
var timer = 0;
var rateChange;

function preload() {
  drums = loadSound('../public/sounds/break.mp3');
  noise1 = loadSound('../public/sounds/noise1.mp3');

}

function setup() {           // **change** void setup() to function setup()
  var canvas = createCanvas(windowWidth, windowHeight);    // **change** size() to createCanvas()
  canvas.parent('sketch-holder');
  noise1.setVolume(0.2);

  drums.loop();
  amplitude = new p5.Amplitude();

  for(i=0;i<numRects;i++){
		r = new rectObj(random(width),random(height), random(10,100), random(10,100) ) // generate a rectObj
		rects.push(r); //add it to the array.
	}

	cir = new circleObj(50);// create a new circle object

}


function draw() {
  
	var level = amplitude.getLevel();
	var levelChange = map(level,0,0.5,0,300);

	var speed = map(mouseY, 0.1, height, 1, 2);
	speed = constrain(speed, 1, 1.5);
	noise1.rate(speed);

	background(levelChange);
	//   console.log(mySound.rate);

	timer = ceil(timer + 0.01);

  for(i=0;i<numRects;i++){
		rects[i].disp();
		rects[i].collide( cir ); //collide against the circle object
	}

	cir.disp(mouseX,mouseY); //pass the x,y pos in to the circle.

  textSize(100);
  text(timer,100,100);

textSize(25);
  if (timer < 200) {
	text("Try and avoid the blocks",100,150);
  }

if (timer > 1000 && timer < 1200) {
	text("Well done! Keep going!",100,150);
  }

if (timer > 3000) {
	text("Sorry, I haven't done and end yet. Might as well enter the site.",100,150);
  }
}

function rectObj(x,y,w,h){
	this.x = x
	this.y = y
	this.w = w
	this.h = h
	this.color = color(random(102,255),random(102,255),random(102,255))
	this.hit = false;

	this.collide = function(obj){

		this.hit = collideRectCircle(this.x, this.y, this.w, this.h, obj.x, obj.y, obj.dia); //collide the cir object into this rectangle object.

		if(this.hit){
			this.color = color(0) //set this rectangle to be black if it gets hit
			score += 1
			noise1.play()
		}

	}

  var randomX = random(1,5);

	this.disp = function(){
		noStroke();
		fill(this.color);
		this.x += randomX //move to the right!
		if(this.x > width){ //loop to the left!
			this.x = -this.w;
		}
		rect(this.x,this.y,this.w,this.h);

	}

}

function circleObj(dia){
	this.dia = dia;
	this.color = color(random(255),random(255),random(255))
	this.x;
	this.y;

	this.disp = function(x,y){
		this.x = x;
		this.y = y;
		noStroke();
		fill(this.color);
		ellipse(this.x,this.y,this.dia,this.dia);
	}

}
  



