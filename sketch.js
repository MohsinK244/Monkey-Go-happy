
var monkey , monkey_running;
var bananaGroup,banana ,bananaImage ;
var obstacleGroup,obstacle, obstacleImage;
var SurvivalTime = 0;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;

  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  
  console.log(ground.x);
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw(){
  background('lightblue')
  ground.x=ground.width/2;
  
  if(keyDown("space") && monkey.y >= 110){
    monkey.velocityY = -12;
  }
   monkey.velocityY = monkey.velocityY + 0.8;
   monkey.collide(ground);
  
  
   survivalTime=Math.ceil(frameCount)
   text("Survival Time = "+survivalTime,100,50);
  
  bananaG();
  obstacles();
  
  drawSprites();
}

function bananaG(){
  if(World.frameCount%100===0){
    banana = createSprite(600,315,20,20);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale=0.09;
    banana.velocityX = -4;
    banana.lifetime = 150;
    bananaGroup.add(banana); 
  }
}

function obstacles(){
  if(World.frameCount%120===0){
    obstacle = createSprite(600,310,20,20);
    obstacle.addImage(obstaceImage);
    obstacle.velocityX = -4;
    obstacle.lifetime = 150;
    obstacle.scale =0.2;
    obstacleGroup.add(obstacle);
  }
}
    
  
    






