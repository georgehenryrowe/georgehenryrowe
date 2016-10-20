var value = 0;
var pg;
var rects = [];
var numRects = 50;
var score = numRects;

function setup() {           // **change** void setup() to function setup()
  var canvas = createCanvas(windowWidth, windowHeight);    // **change** size() to createCanvas()
  canvas.parent('sketch-holder');

  for(i=0;i<numRects;i++){
		r = new rectObj(random(width),random(height), random(10,100), random(10,100) ) // generate a rectObj
		rects.push(r); //add it to the array.
	}

	cir = new circleObj(50);// create a new circle object

}


function draw() {                         // **change** void draw() to function draw()
  background(50);
  // fill(0,1);
  // rect(0,0,windowWidth,windowHeight);                          // background() is the same



	// 
	// stroke(value);               // stroke() is the same
	// text("George Henry Rowe", mouseX, mouseY);
    // 
    // push(); 
    //   rotateX(frameCount*0.01);
    //   rotateY(frameCount*0.01);
    //   rotateZ(mouseX*0.005);
    //   rotateZ(accelerationY * 0.01);
    //   // pg.background(100,50);
    //   // pg.text('hello!', 255, 100);
    //   // texture(pg);  
    //   // translateZ(frameCount*0.01);
    //   box(200,200,200);
    // pop();

  for(i=0;i<numRects;i++){
		rects[i].disp();
		rects[i].collide( cir ); //collide against the circle object
	}

	cir.disp(mouseX,mouseY); //pass the x,y pos in to the circle.

  textSize(100);
  text(score,100,100);

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

		if(this.hit && flag){
			this.color = color(0) //set this rectangle to be black if it gets hit
      score -= 1
		}

	}

  var randomX = random(1,10);

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
  



