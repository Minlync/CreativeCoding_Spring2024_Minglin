// first scene is in the dark night and a circle mask moving around to makes a effects as the lunar eclipse.

// i also use a moving rect to makea shadow -> the circle mask will arrive later.
// i use the for loop random in the start also frame counter to control the star twinkletiming ans size.
//when you press the  RIGHT_ARROW the scene will move into the next scene. and you will see cherry blossoms. -> I followed the same logic that I used in the snow logic code. I used the translation matrix scale function and also collaborated with frame counter function.


// thrid scene, when you pressed the mouse, you will see a brid flying on the sky. I used the for loop to control the clouds number let it loop over the screen.And i have also use the draw loop to making it moving on the screen. I used mouseX and mouse Y to let user to control the flying bird location.
// also I use the random function at the top of the Bird's wing to make animation effects like flapping its wing.

// speed of mask. i want my circle mask to cover the moon and making a moon sclipse effect. so i use draw loop.


let drawTreeleft, drawRight, stars,snow, cherryblossm;
//declaring objects.
let birdcolor;
let showFirstSet = true; // for mouse presse
let clouds = []; 

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
      
       birdcolor = color (156, 161, 186);
      createCanvas(800, 800);
      bgColor2 = color(37, 33, 71);//bgcolor
      maskColor = color(37, 33, 71);//maskcolor
      
      moon = 
      currentColor = lerpColor(bgColor2, maskColor, 0.5);
      
      drawTreeleft = new DrawTree (0,0, color(111,111,111));
      
      stars = new  DrawStars (20,20,color(255));
      
      
      
       cherryblossm = new  DrawFlower (150,310, color(235, 160, 190));
      
      // for scene2 //
      
      clouds.push({ x: -50, y: height / 4, speed: 2 });
      clouds.push({ x: -150, y: height/3 , speed: 1.5 });
       clouds.push({ x: -250, y: height / 2, speed: 1 });
       clouds.push({ x: -250, y: 100, speed: 1 });
      
      
      // for scene 2
      
      
       snow = new  DrawSnow (150,310, color(255));

  drawRight = new DrawTree(500, 400, color(111,111,111));

      stars = []; // array for stars
  for (let i = 0; i < 100; i++) { // Example: Create 100 stars
    let x = random(width);
    let y = random(height);
    stars.push(new DrawStars(x, y, color(255, 250, 217)));  
  } //end of this
      

      
    }




function draw() {
  // calculate the current scene based on frameCount
  let sceneDuration = 1200; // Duration of each scene in frames (60 seconds)
  let currentScene = Math.floor(frameCount / sceneDuration) % 3; //  3 scenes

  background(bgColor2);

  // changed the scene from time instead of mouse or key
  switch (currentScene) {
    case 0:
      DrawLunareclipse();
      break;
    case 1:
      Drawcherryblossm();
      break;
    case 2:
            
     stars.forEach(star => {
        star.updateStar(); // for twinkling
        star.display(); // star with its current properties
    });
      // end of stars
   
  clouds.forEach(cloud => {
    drawCloud(cloud.x, cloud.y); // draw each cloud 
    
   
    cloud.x += cloud.speed;
    
  
    if (cloud.x > width + 100) { //control the cloud number.
      cloud.x = -200; 
      cloud.y = random(height / 4, height / 2); //randomize y position
    }
  });
    drawBridflying() ;
      break;
  }
}

function setup() {
      
       birdcolor = color (156, 161, 186);
      createCanvas(800, 800);
      bgColor2 = color(37, 33, 71);//bgcolor
      maskColor = color(37, 33, 71);//maskcolor
      
      moon = 
      currentColor = lerpColor(bgColor2, maskColor, 0.5);
      
      drawTreeleft = new DrawTree (0,0, color(111,111,111));
      
      stars = new  DrawStars (20,20,color(255));
      
      
      
       cherryblossm = new  DrawFlower (150,310, color(235, 160, 190));
      
      // for scene2 //
      
      clouds.push({ x: -50, y: height / 4, speed: 2 });
      clouds.push({ x: -150, y: height/3 , speed: 1.5 });
       clouds.push({ x: -250, y: height / 2, speed: 1 });
       clouds.push({ x: -250, y: 100, speed: 1 });
      
      
      // for scene 2
      
      
       snow = new  DrawSnow (150,310, color(255));

  drawRight = new DrawTree(500, 400, color(111,111,111));

      stars = []; // Initialize an array for stars
  for (let i = 0; i < 100; i++) { // Example: Create 100 stars
    let x = random(width);
    let y = random(height);
    stars.push(new DrawStars(x, y, color(255, 250, 217)));  
  } //end of this
      

      
    }

// Example scene functions
function DrawLunareclipse() {
   //setup class for OOP -> i want a yellowmoon.
 
      // Interpolate background color
      currentColor = lerpColor(maskColor, bgColor2, 0.5);
      background(currentColor);
      

      
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
      
      fill(0,99) // adding shadow
      rect(movingCircleX-600,0,800,800);//moving shadow
      
      

      // speed of mask. 
      movingCircleX += 0.5;
      if (movingCircleX > width + 40) {
        movingCircleX = -40;
      }
    
     
      
    }






/// classs





// 2
function Drawcherryblossm() {
      

      background(200, 226, 227);
      
   
      if (showFirstSet) {
        
        
        
       stars.forEach(star => {
        star.updateStar(); // Update the star's properties for twinkling
        star.display(); // draw the star with its current properties
    });
      // end of stars
      

      fill(255, 216, 138)
      ellipse(moonX, moonY, 200, 200); // moon
      
     
      

      
      drawTreeleft.display(); //call my instance of display
      drawRight.display(); // i want draw the tree on the right
      
      
 cherryblossm.display(); //call the cherryblossm
      
      
 drawBrid() ;
      
      

 
      
      
      
    // end of drawloop.

 } else {
   

   
   
        
//      stars.forEach(star => {
//         star.updateStar(); // for twinkling
//         star.display(); // star with its current properties
//     });
//       // end of stars
   
//   clouds.forEach(cloud => {
//     drawCloud(cloud.x, cloud.y); // draw each cloud 
    
   
//     cloud.x += cloud.speed;
    
  
//     if (cloud.x > width + 100) { //control the cloud number.
//       cloud.x = -200; 
//       cloud.y = random(height / 4, height / 2); //randomize y position
//     }
//   });
//     drawBridflying() ;
}
    }
    

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


function Drawcherryblossm() {
      

      background(200, 226, 227);//day
      
   
         background(bgColor2);//night
        
        
        
       stars.forEach(star => {
        star.updateStar(); // Update the star's properties for twinkling
        star.display(); // draw the star with its current properties
    });
      // end of stars
      

      fill(255, 216, 138)
      ellipse(moonX, moonY, 200, 200); // moon
      
     
      

      
      drawTreeleft.display(); //call my instance of display
      drawRight.display(); // i want draw the tree on the right
      
      
 cherryblossm.display(); //call the cherryblossm
      
      
 drawBrid() ;
      
}

 
      
    

 
class DrawFlower {
      
  
 constructor(x, y, c) {
        this.x = x;
        this.y = y;
        this.c = c;
        this.isVisible = true;
        this.size = 0.2; // initial scaling factor
        this.frameCounter = 0; // 
        this.bloomFrame = 60; // number of frames to wait before blooming
    }

    display() {
        this.frameCounter++; // add size

        
        if (this.frameCounter >= this.bloomFrame) {
            this.size += 0.05; // increase size for the bloom effect
           if ( this.size >= 1.5 ) { // reset frame counter to continuously bloom
             // this.size >= 2;
             this.size =2; // max of the size
           }
           this.frameCounter = 0;
        }

        // animation of cherry bloosm blooming-> it will blooming from small to big.
        push(); 
        translate(this.x, this.y); 
        scale(this.size); 

        // reset positions since we've translated to (this.x, this.y) and scaled
        fill(this.c);
        ellipse(0, 0, 30, 30);
       pop();
      
      push();
      translate(this.x, this.y);
       fill(this.c);
        scale(this.size); 
        ellipse(30, -25, 15, 15);
      pop();
      

        push();
      translate(this.x, this.y);
         fill(this.c);
        scale(this.size); 
        ellipse(0, 40, 15, 15);
        pop();

      
          push();
      translate(this.x, this.y);
       fill(this.c);
        scale(this.size);
      //set this location fix .
      let compensatedX = (-60 / this.size-2);
        let compensatedY = (30 / this.size-2);
        ellipse(compensatedX, compensatedY, 10, 10);
      ellipse(compensatedX-20, compensatedY+80, 30, 30);
      pop();

      
      push();
      translate(this.x, this.y);
      fill(this.c);
       scale(this.size);
      
      // flower on the right
      let compensatedX1 = (500 / this.size-2);
      let compensatedY2 = (60 / this.size-2);
      let compensatedX11 = (580 / this.size-1);
      let compensatedY22 = (30 / this.size-2);
      
       let compensatedX111 = (590 / this.size+1);
      
       let compensatedY222 = (80 / this.size-2);
      ellipse(compensatedX1, compensatedY2, 10, 10);
      ellipse(compensatedX11, compensatedY22, 10, 10);
      ellipse(compensatedX111, compensatedY222, 10, 10);
      
      
  
      pop();
      
        //
  }
  
}

function drawBrid() {
  
  push();
  fill( birdcolor);
  translate(150, 110);
  scale(0.5); 
  noStroke();
  
  // draw body

  
  fill( birdcolor);
  noStroke();
  ellipse(200, 220, 100, 100); 
  
  // head of the bird - a smaller circle
  ellipse(240, 180, 50, 50); 
  
  // beak of the bird - a triangle
  fill( birdcolor);
  triangle(260, 170, 280, 180, 260, 190);
  
  // tail of the bird - a triangle
  fill(birdcolor);
  triangle(180, 200, 120, 190, 120, 230);
  
  // wing of the bird - using beginShape() and endShape()
  fill(birdcolor);
  beginShape();
  vertex(160, 170); // Starting point at the center-top of the body
  //wing
  
 // vertex(160, 120); // upper left point of the wing
  vertex(230, 160); // outermost point of the wing
  
 
  endShape(CLOSE);

}

function drawBridflying() {
  
  push();
  fill( birdcolor);
  translate(mouseX, mouseY);
  scale(1); 
  noStroke();
  
  // draw body

  
  fill( birdcolor);
  noStroke();
  ellipse(200, 220, 100, 100); 
  
  // Head of the bird - a smaller circle
  ellipse(240, 180, 50, 50); 
  
  // Beak of the bird - a triangle
  fill( birdcolor);
  triangle(260, 170, 280, 180, 260, 190);
  
  // Tail of the bird - a triangle
  fill(birdcolor);
  triangle(180, 200, 120, 190, 120, 230);
  
  // Wing of the bird - using beginShape() and endShape()
  fill(birdcolor);
  beginShape();
  vertex(160, 170); // starting point at the center-top of the body
  //wing
  
  triangle(230, 245, 158, 205, 196, random(190,100));
  
 
  endShape(CLOSE);

}

function drawCloud(x,y) {
  
   // clouds
   fill (255);
     ellipse(x+50,y+50,60,50);
  ellipse(x+80,y+40,60,50);
  ellipse(x+130,y+50,60,50);
  ellipse(x+70,y+70,60,50);
  ellipse(x+110,y+65,60,50);
  
}


class DrawSnow {
  
 constructor (x,y,c) {
    this.x = x;
    this.y = y;
    this.c = c;
   
    
  }
    
  display() {
  
    
    


// drawing the main snow shape
        push();   
        translate(this.x - 400, this.y - 60);
        rotate(radians(-45));
        fill(this.c);
        ellipse(this.x, this.y, 50, 20);
        ellipse(this.x + 30, this.y - 10, 40, 20);
        ellipse(this.x - 20, this.y - 5, 70, 20);
        ellipse(this.x + 180, this.y + 30, 60, 10);
        ellipse(this.x - 70, this.y + 40, 30, 10);
        pop();
  


       // this part is always executed as part of the display
        fill(this.c); 
        ellipse(this.x + 400, this.y + 280, 40, 5);
    }
}
        
        



