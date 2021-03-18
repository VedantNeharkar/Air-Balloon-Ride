var balloon , bg , bg_image; 

function setup() {

  createCanvas(800,400);
   airballoon = createSprite(400, 200, 50, 50);
   airballoon = addImage("balloon",balloonimg );
}
function preload(){
  airballoon.loadImage("images/1.png");
}
function draw() {
  background(255,255,255);  
 

if(keyIsDown(RIGHT_ARROW)){
  airballoon.velocityX  = airballoon.X =+ 10;
 
}

if(keyIsDown(LEFT_ARROW)){
  airballoon.velocityX = airballoon.X =- 10;
  
}
if(keyIsDown(UP_ARROW)){
  airballoon.velocityY  = airballoon.Y=- 10;
  airballoon.scale =+2;
}else{
  airballoon.scale = 3;
}

if(keyIsDown(DOWN_ARROW)){
  airballoon.velocityY  = airballoon.Y =+ 10;
  
}


  drawSprites();
}