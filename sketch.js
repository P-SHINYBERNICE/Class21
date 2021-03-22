var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  game1 = createSprite(100,200,80,30);
  game1.shapeColor = "green";
  game1.debug = true; 
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(isTouching(game1,movingRect)){
   movingRect.shapeColor = "red";
   game1.shapeColor = "red";}
  else{
    movingRect.shapeColor = "green";
    game1.shapeColor = "green";  
  }

  drawSprites();
}
