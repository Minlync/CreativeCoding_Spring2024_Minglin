let xVals = []; //delcaring an empty array
let yVals = []; 

let num;


function setup(){

creativeCanvas(800,800);
//background(255);
fill(255,102);
num = 50;
noStroke();


}

function draw () {
//for(let i = num - 1)
background(66, 135, 245);
for(let i = num -1; i>0; i--){
 xVals[i] =  xVals[i-1];
 yVals[i] = yVals[i-1];
 print(xVals[i]);
}

xVals[0] = mouseX;
yVals[0] = mouseY;

// utlizing the array;
for (let i = 0; i < num; i++){
    ellipse(xVals[i],yVals[i],num - i/2.0, num - i/2.0 )
}
}