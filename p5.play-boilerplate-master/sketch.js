var fixed, moving;

function setup() {
  createCanvas(5000,2000);
 fixed= createSprite(400, 200, 50, 50);
 moving= createSprite(500, 200, 50, 50);
moving.shapeColor ="green";
fixed.shapeColor ="green";
fixed.debug= true;
moving.debug= true;
}

function draw() {
  background(255,255,255);
  moving.y=World.mouseY;  
  moving.x=World.mouseX;  

  if (moving.x-fixed.x< fixed.width/2+ moving.width/2
  && fixed.x-moving.x< fixed.width/2+ moving.width/2
  && moving.y-fixed.y< fixed.height/2+ moving.height/2
  && fixed.y-moving.y< fixed.height/2+ moving.height/2){
    moving.shapeColor = "red";
    fixed.shapeColor = "red";
  }
  else{
    moving.shapeColor = "green";
    fixed.shapeColor = "green";
  }
  drawSprites();
}