var ninja,ninjaImg;
var bgImg;
var roof,roofImg;
var back;

function preload(){
ninjaImg=loadImage("ninja.png");
bgImg=loadImage("back.png");
roofImg=loadImage("chineseroof.png");
}

function setup(){
canvas=createCanvas(1200,400);

back=createSprite(-200,150);
back.addImage(bgImg);
back.scale=6.0;
back.velocity.x=back.velocity.x+1*2

ninja=createSprite(130,200);
ninja.addImage(ninjaImg);
ninja.scale=0.5;

ninja.velocityY=-5;

}

function draw(){
background(bgImg);

if (back.x < 600){
    back.x = back.width/2;
  }

 // if (frameCount%40==0){      
//roof=createSprite(1200,200);
//roof.addImage(roofImg);
//roof.velocity.x-3
//roof.scale=1.2;
//roof.y=Math.round(random(30,300));
//  }
 if(keyDown("space")){
     ninja.y=ninja.y+10;
 } 
drawSprites();
}