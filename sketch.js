// first scene is in the dark night and a circle mask moving around to makes a effects as the lunar eclipse.
//when you pressed the mouse the snow on the tree will drop.


let drawTreeleft, drawRight, stars,snzow; //declaring objects.



// here is the setup of the moon.
let moonX = 400; // moonXvalue.
    let moonY = 400; // the moon  Y value
    let movingCircleX = 100; //making mask move.
    let movingCircleY = 400; //moving mask y value. 
    let maskColor; //maskcolor
    let bgColor2;
    let currentColor;

   let shadowX = 0; //shadowX 
   let shadowY = 0; //shadowY

    function setup() {
      createCanvas(800, 800);
      bgColor2 = color(37, 33, 71);//bgcolor
      maskColor = color(37, 33, 71);//maskcolor
      
      moon = 
      currentColor = lerpColor(bgColor2, maskColor, 0.5);
      
      drawTreeleft = new DrawTree (0,0, color(111,111,111));
      
      stars = new  DrawStars (20,20,color(255));
      
      snow = new  DrawSnow (150,310, color(255));
      
      
      // i am trying to rotate this one. and tried, i cannot roatate this class.
  //    push();
  // translate(0, 0);
  // rotate(radians(95));
  drawRight = new DrawTree(500, 400, color(111,111,111));
   // pop();
    
      stars = []; // Initialize an array for stars
  for (let i = 0; i < 100; i++) { // Example: Create 100 stars
    let x = random(width);
    let y = random(height);
    stars.push(new DrawStars(x, y, color(255, 250, 217)));  
  } //end of this
      
  //for snow
   //end of snow
      
    }
    

   function draw() {
      DrawLunareclipse();
      
    }

  // scene 1 snow and stars

    function DrawLunareclipse() {
      
      //setup class for OOP -> i want a yellowmoon.
 
      // Interpolate background color
      currentColor = lerpColor(maskColor, bgColor2, 0.5);
      background(currentColor);
      
      //stars
      
  //     for (let star of stars) {
  //   star.display(); // call the display method for each star
  // }
      
       stars.forEach(star => {
        star.updateStar(); // Update the star's properties for twinkling
        star.display(); // Draw the star with its current properties
    });
      // end of stars
      
      // draw moon
      fill(255, 250, 214); //mooncolor
      ellipse(moonX, moonY, 200, 200); // moon
      
      // moving circle
      fill(37, 33, 71);//mask
      ellipse(movingCircleX, movingCircleY, 200, 200);
      

      
      drawTreeleft.display(); //call my instance of display
      drawRight.display(); // i want draw the tree on the right
      
      snow.display(); //call the snow
      
      fill(0,50) // adding shadow
      rect(movingCircleX-200,0,600,800);//moving shadow
      
      

      // speed of mask. i want my circle mask to cover the moon and making a moon sclipse effect. so i use draw loop.
      movingCircleX += 0.1;
      if (movingCircleX > width + 40) {
        movingCircleX = -40;
      }
      
      
      
    } // end of drawloop.



    


// new class - > for drawing tree

  class DrawTree {
    constructor (dx,dy,dc){
      this.x = dx;
      this.y = dy;
      this.c = dc;
      
    }
    
    display() {
      //treetrunk
     fill(this.c);
    beginShape();
    vertex(this.x + 0, this.y + 407);
    vertex(this.x + 317, this.y + 191);
    vertex(this.x + 340, this.y + 220); // Right bottom
    vertex(this.x + 0, this.y + 556);
    endShape(CLOSE);
      
    //tree trunk2
    fill(this.c);
    noStroke();
	beginShape(); /*()inside should be empty*/
	vertex(this.x+34,  this.y+188);
	vertex(this.x+67,  this.y+188);
	vertex(this.x+138,  this.y+320); /*right bottom8*/
	vertex(this.x+90,  this.y+355);
	endShape();
      
        //tree trunk3
    fill(this.c);
    noStroke();
	beginShape(); /*()inside should be empty*/
	vertex(this.x+729,  this.y+332);
	vertex(this.x+746,  this.y+338);
	vertex(this.x+680,  this.y+800); 
	vertex(this.x+630,  this.y+800);
	endShape();
      
              //tree trunk4
    fill(this.c);
    noStroke();
	beginShape(); /*()inside should be empty*/
	vertex(this.x+587,  this.y+323);
	vertex(this.x+593,  this.y+323);
	vertex(this.x+714,  this.y+414); 
	vertex(this.x+711,  this.y+433);
	endShape();
    
      
    }
    
  }
    
      

class DrawSnow {
  
 constructor (x,y,c) {
    this.x = x;
    this.y = y;
    this.c = c;
    this.isVisible = true; 
    
  }
    
  display() {
  if (!this.isVisible) {
    return; 
    fill(125, 143, 120)
    ellipse(this.x-20, this.y-5, 70, 20);
    
  }else {

  push();   
  translate(this.x - 400,this.y-60);
  rotate(radians(-45));
  fill(this.c)
  ellipse(this.x, this.y, 50, 20);
  ellipse(this.x+30, this.y-10, 40, 20);
  ellipse(this.x-20, this.y-5, 70, 20);
  ellipse(this.x+180, this.y+30, 60, 10);
  ellipse(this.x-70, this.y+40, 30, 10);
    

    
  
  pop();
  }
  

//  push();
// translate(this.x -70,this.y+160);
//  rotate(radians(-35));
  fill(this.c) 
  ellipse(this.x+400, this.y+280, 40, 5);
 // pop();
      
 }
  
shrink() {
    this.scale *= 0.95; // Shrink shapes by reducing scale
  }
  
}
        
        
      

class DrawStars {
  constructor(sx, sy, sc) {
    this.x = sx;
    this.y = sy;
    this.c = sc;
  
    this.brightness = 255;
    this.size = random(0, 5);
    this.updateStar(true); //use it for framecout
     this.twinkleTiming = random(30, 150);
     this.frameCounter = 0;
  }
  
  updateStar() {
    
     this.frameCounter++;
     // if (forceUpdate || frameCount % 70 === 0) {
      
    
    // this.brightness = random(0, 255); //i want to add random color to maks its twinkling.
    // this.size = random(0,5); //i want to adjust the random size in order to makes the stars is lighting.
    if (this.frameCounter >= this.twinkleTiming) {
            // Reset the counter and update the twinkle timing for the next cycle
            this.frameCounter = 0;
            this.twinkleTiming = random(10, 150); // Randomize for variation in twinkling

            // Update properties for the twinkle effect
            this.brightness = random(0, 255); // Random brightness for the twinkle
            this.size = random(0, 5); //
     }
  }

  display() {
    // if (frameCount % 240 === 0) {
    //   this.updateStar();
    // }
 
    fill(this.c, this.brightness);
    noStroke();
    ellipse(this.x, this.y, this.size, this.size); // Draw a small star
  }
}


function mousePressed() {
  
   if (snow) snow.isVisible = !snow.isVisible;

}

