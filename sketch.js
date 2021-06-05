
/*const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;*/

var backgroundImg;

var bg
var star, starImg
function preload() {
 // getBackgroundImg()
 snowImg=loadImage("snow4.webp")
 snowImg2=loadImage("snow5.webp")
 snowBg1=loadImage("snow1.jpg")
 starImg=loadImage("star.png")
}

function setup() {
  createCanvas(800,400);

    star=createSprite(400,200, 20,20)
    star.addImage(starImg);
    star.scale=0.1

    

}

function draw() {
  background(snowBg1);  
  star.position.x = mouseX
    star.position.y = mouseY

  
  createSnow();
  createSnow2();
  drawSprites();
}

/*async function getBackgroundImg(){

  // write code to fetch time from API
  var response= await fetch("http://worldtimeapi.org/api/timezone/Europe/London")
  console.log(response)
  //change the data in JSON format
  var rj = await response.json()
  console.log(rj)
  var dt = rj.datetime
  console.log(dt)
  // write code slice the datetime
    
   var hr = dt.slice(11,13)
   console.log(hr)

  // add conditions to change the background images from sunrise to sunset
  if(hr>=04 && hr <=06){
      bg="snow1.png"
  }else if(hr>=06 && hr<08){
      bg = "snow2.png"
  }else{
      bg = "snow3.png"
  }

  //load the image in backgroundImg variable here
backgroundImg= loadImage(bg)
}*/
function createSnow() {
  if (World.frameCount % 50 == 0) {
  var snow1 = createSprite(Math.round(random(50, width-50),40, 10, 10));
  snow1.addImage(snowImg);
  snow1.scale=0.12;
  snow1.velocityY = 4;
  snow1.lifetime = 180;
  }
} 

function createSnow2() {
  if (World.frameCount % 70 == 0) {
  var snow2 = createSprite(Math.round(random(50, width-50),40, 10, 10));
  snow2.addImage(snowImg2);
  snow2.scale=0.12;
  snow2.velocityY = 4;
  snow2.lifetime = 180;
  }
}
