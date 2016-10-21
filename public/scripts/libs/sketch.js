var pg;
var rects = [];
var numRects = 80;
var lives = 0;
var score = 0;
var rateChange;
var soundArray = [5];
var playSoundNumber = 0;
var randomX;

function preload() {
	drums = loadSound('../public/sounds/break.mp3');
	noise0 = loadSound('../public/sounds/pad_flute_select.mp3');
	noise1 = loadSound('../public/sounds/pad_glow_chord.mp3');
	noise2 = loadSound('../public/sounds/pad_glow_welcome2.mp3');
	noise3 = loadSound('../public/sounds/pad_hi_note.mp3');
	noise4 = loadSound('../public/sounds/pad_up.mp3');
	noise5 = loadSound('../public/sounds/pad_space_select_01.mp3');
	noise6 = loadSound('../public/sounds/pad_space_fade_01.mp3');
	noise7 = loadSound('../public/sounds/pad_glow_welcome2.mp3');
	noise8 = loadSound('../public/sounds/pad_glow_power_off_01.mp3');
}

function setup() { // **change** void setup() to function setup()
	// **change** size() to createCanvas()

	if (!!$('#sketch-holder').length) {
		var canvas = createCanvas(windowWidth, windowHeight);
		canvas.parent('sketch-holder');
	}

	drums.loop();

	for (var i = 0; i < soundArray.length; i++) {
		soundArray[0] = noise0;
		soundArray[1] = noise1;
		soundArray[2] = noise2;
		soundArray[3] = noise3;
		soundArray[4] = noise4;
		soundArray[5] = noise5;
		soundArray[6] = noise6;
		soundArray[7] = noise7;
		soundArray[8] = noise8;
	}

	amplitude = new p5.Amplitude();

	for (i = 0; i < numRects; i++) {
		r = new rectObj(random(width), random(height), random(10, 100), random(10, 100)) // generate a rectObj
		rects.push(r); //add it to the array.
	}

	cir = new circleObj(50); // create a new circle object

}


function draw() {

	var level = amplitude.getLevel();
	var levelChange = map(level, 0, 0.5, 0, 300);

	var speed = map(mouseY, 0.1, height, 0.75, 1.5);
	// speed = constrain(speed, 1, 1.5);
	for (var i = 0; i < soundArray.length; i++) {
		soundArray[i].rate(speed);
	}

	background(levelChange);
	//   console.log(mySound.rate);

	score = ceil(score + 0.01);

	for (i = 0; i < numRects; i++) {
		rects[i].disp();
		rects[i].collide(cir); //collide against the circle object
	}

	cir.disp(mouseX, mouseY); //pass the x,y pos in to the circle.

	textSize(25);
	text("Sound: " + playSoundNumber, 100, 100);
	text("Pitch: " + nfc(speed, 2), 100, 140);

	// textSize(100);
	// text(score,100,100);


	// textSize(25);
	// if (score < 200) {
	// 	text("Hit the blocks for fun", 100, 150);
	// }

	// if (score > 1000 && score < 1200) {
	// 	text("Well done! Keep going!", 100, 150);
	// }

	// if (score > 3000) {
	// 	text("Sorry, I haven't done an end yet. Might as well enter the site.", 100, 150);
	// }

	// if (lives <= 0) {
	// 	textSize(200);
	// 	// background(0);
	// 	text("GAME OVER",100,windowHeight/2);
	// 	noLoop();
	// 	}
}

function rectObj(x, y, w, h) {
	this.x = x
	this.y = y
	this.w = w
	this.h = h
	this.color = color(random(102, 255), random(102, 255), random(102, 255))
	this.hit = false;
	this.isCollisioning = false;

	this.collide = function (obj) {

		this.hit = collideRectCircle(this.x, this.y, this.w, this.h, obj.x, obj.y, obj.dia); //collide the cir object into this rectangle object.

		if (this.hit && !this.isCollisioning) {
			this.color = color(0) //set this rectangle to be black if it gets hit
			lives++
			soundArray[playSoundNumber].play()
			playSoundNumber++
			this.isCollisioning = true
			console.log(this.isCollisioning)
			if (playSoundNumber > 8) {
				playSoundNumber = 0;
			}
		}

	}

	var randomX = random(1, 5);

	this.disp = function () {
		noStroke();
		fill(this.color);
		this.x += randomX //move to the right!
		if (this.x > width) { //loop to the left!
			this.x = -this.w;
		}
		rect(this.x, this.y, this.w, this.h);

	}

}

function circleObj(dia) {
	this.dia = dia;
	this.color = color(random(255), random(255), random(255))
	this.x;
	this.y;

	this.disp = function (x, y) {
		this.x = x;
		this.y = y;
		noStroke();
		fill(this.color);
		ellipse(this.x, this.y, this.dia, this.dia);
	}

}
