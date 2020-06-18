var trex,trexrunning,ground, groundpng,invsground;

function preload (){
trexrunning= loadAnimation("trex1.png","trex3.png","trex4.png")
groundpng= loadImage("ground2.png")

}

function setup() {
  createCanvas(400, 400);
 trex=createSprite(100,340,20,20);
 trex.addAnimation("animation",trexrunning);
 trex.scale=0.5;
  
  invsground=createSprite(200,380,400,20);
  
  
  ground=createSprite(200,360,400,20);
  ground.addImage("visual",groundpng);
  ground.velocityX=-6;
  
}


function draw() {
  background(220);
  drawSprites();
trex.collide(invsground);
  if (ground.x <0) {
  
  ground.x=ground.width/2;
      
}

  if(keyDown ("space")) {
  trex.velocityY=-5;
  
}
  
trex.velocityY=trex.velocityY+0.5;

spa

}

function spawnClouds() {
  //write code here to spawn the clouds
  if (World.frameCount % 60 === 0) {
    var cloud = createSprite(400,320,40,10);
    cloud.y = randomNumber(280,320);
    cloud.setAnimation("cloud");
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 134;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    CloudsGroup.add(cloud);
  }
}

