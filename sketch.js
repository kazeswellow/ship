var ship, ship_moving, edges;
var seaImage;
var sea;

function preload(){
  ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(600,200);
  
  ship = createSprite(50,160,20,50);
  ship.addAnimation("sailing", ship_moving);
  edges = createEdgeSprites();
  
  ship.scale = 0.5;
  ship.x = 50

  sea=createSprite(300,180,600,5);
  sea.addImage(seaImage);
  sea.velocityX=-3;

}


function draw(){
  background("cyan");
  if(sea.x<0){
    sea.x=sea.width/2;
  }

  console.log(ship.y)
  
  if(keyDown("up")){
    ship.velocityY = -10;
  }
  
  if(keyDown("down")){
    ship.velocityY = 10;
  }
  
  ship.collide(sea)

  drawSprites();
}