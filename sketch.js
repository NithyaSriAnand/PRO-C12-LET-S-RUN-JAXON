var ground, invisibleGround, groundImage;
var surfer, surfer_running, surfer_collided;
var left_boundary,right_boundary;

function preload()
{
  //pre-load images
  groundImage = loadImage("path.png")
  surfer_running = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){

  createCanvas(400,400);

  // Create a ground sprite
  ground = createSprite(200,200);
  ground.addImage("ground",groundImage);
  ground.velocityY = 4;
  ground.scale = 1.2;
  
  //create a surfer sprite
  surfer = createSprite(250,250,50,170);
  surfer.addAnimation("running", surfer_running);
  surfer.scale = 0.05;

  //define boundaries
  left_boundary=createSprite(0,300,100,600);
  right_boundary=createSprite(390,300,80,600);
  left_boundary.visible=false;
  right_boundary.visible=false;
}

function draw() {
  background(0);
  surfer.x=World.mouseX;
 
  if (ground.y > 400)
  {
   ground.y=height/2;
  }
  surfer.collide(left_boundary);
  surfer.collide(right_boundary);
  drawSprites();
}
