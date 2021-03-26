//const Engine= Matter.Engine;
//const World= Matter.World;
//const Bodies= Matter.Bodies;

//var engine,world;

var backgroundImg;
var ground,groundImg,invsGround;
var sky;
var cage,cageImg;
var hunter,hunterRunning,hunterIdle,hunterDead,hunterImg;
var jules,julesImg;


function preload() {
  backgroundImg=loadImage("png/BG/BG2.png");
  groundImg=loadImage("png/ground/u.png");
  hunterRunning=loadAnimation("templerun/Run__000.png","templerun/Run__001.png","templerun/Run__002.png","templerun/Run__003.png","templerun/Run__004.png","templerun/Run__005.png","templerun/Run__005.png","templerun/Run__006.png","templerun/Run__007.png","templerun/Run__008.png","templerun/Run__009.png");
  //hunterImg= loadImage("templerun/Dead__000.png")
  hunterIdle=loadAnimation("templerun/Idle__000.png","templerun/Idle__001.png","templerun/Idle__002.png","templerun/Idle__003.png","templerun/Idle__004.png","templerun/Idle__005.png","templerun/Idle__006.png","templerun/Idle__007.png","templerun/Idle__008.png","templerun/Idle__009.png");
  julesImg=loadImage("png/jules.png");
  cageImg=loadImage("png/Object/Crate.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);

  //engine= Engine.create();
  //world= engine.world;
  

  invsGround=createSprite(displayWidth/2,displayHeight-10,displayWidth,20);
  invsGround.visible=false;

  sky=createSprite(displayWidth/2,displayHeight/6,displayWidth,20);
  sky.visible=false;
  //sky.debug=true;
  

  //ground = new Ground(displayWidth/2,displayHeight-20,displayWidth,40);

  // ground=createSprite(displayWidth/2,displayHeight-20,displayWidth,40);
  // ground.addImage(groundImg);
  
  cage=createSprite(displayWidth/2,displayHeight/2,20,20);
  cage.addImage(cageImg);
  cage.debug=true;
    
  hunter=createSprite(100,displayHeight-50);
  hunter.addAnimation("idle",hunterIdle);
  hunter.scale=0.3;
  hunter.velocityY=2;
  hunter.collide(invsGround);

  jules=createSprite(100,displayHeight-250);
  jules.addImage(julesImg);
  jules.scale=0.5;
  jules.velocityY=2;
  jules.collide(invsGround);
  jules.collide(cage);

  
  
  jules.debug=true;

  
  
}
function draw() {
  background(backgroundImg);

  push();
  imageMode(CENTER)
  image(groundImg,displayWidth/2,displayHeight-20,displayWidth,40);
  pop();

  //ground.display();

  jules.bounceOff(sky);
  

  if (keyDown("up")){
    jules.velocityY=-5;
  }
  if (keyDown("right")){
    jules.velocityX=5;
  }
  if (keyDown("down")){
    jules.velocityY=5;
  }
  if (keyDown("left")){
    jules.velocityX=-5;
  }
  if (jules.isTouching(cage)){
    console.log("isTouching")
    jules.velocityX=0;
    jules.visible=false;
    
    strokeWeight(5);
    fill("red");
    text("Game Over",displayWidth/2,displayHeight/2-100);
  }


  drawSprites();
}
