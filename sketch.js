var iss,issImg,space,spaceImg,spacecraft,scimg;

var hasDocked;


function preload (){
  issImg=loadImage("Docking-undocking/iss.png")
  spaceImg=loadImage("Docking-undocking/spacebg.jpg")
  scimg = loadImage("Docking-undocking/spacecraft1.png"); scimg1 = loadImage("Docking-undocking/spacecraft2.png"); scimg2= loadImage("Docking-undocking/spacecraft3.png"); scimg3= loadImage("Docking-undocking/spacecraft4.png");

}
function setup(){
  createCanvas(800,400);
  iss=createSprite(400, 200, 50, 50);
  iss.addImage("issImg",issImg)
  spacecraft=createSprite(250,350,50,50)
  spacecraft.addImage("spaceC",scimg)
  spacecraft.scale=0.2
}

function draw() {
  background(spaceImg);  
  if(!hasDocked){
    if(keyDown("left")){
      spacecraft.x-=2
      spacecraft.addImage(scimg1)
    }
    if(keyDown("right")){
      spacecraft.x+=2
      spacecraft.addImage(scimg2)
    }
    if(keyDown("down")){
      spacecraft.y+=2
      spacecraft.addImage(scimg3)
    }
    if(keyDown("up")){
      spacecraft.y-=2
      spacecraft.addImage(scimg3)
    }
  }
  text("docking succcessfull",500,380)
  

  drawSprites();
}