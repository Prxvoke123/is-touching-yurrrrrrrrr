function setup() {
 
 
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);
  movingrect=createSprite(400, 200, 40, 90);
}

function draw() {
   background('red');  
   movingrect.x=mouseX
   movingrect.y=mouseY
if(abs(movingrect.x-fixedrect.x)<movingrect.width/2+fixedrect.width/2&&
abs(movingrect.y-fixedrect.y)<movingrect.height/2+fixedrect.height/2){
  fixedrect.shapeColor='green'
  movingrect.shapeColor='green'
}else{
  fixedrect.shapeColor='blue'
  movingrect.shapeColor='blue'
}
console.log(movingrect.x)
  drawSprites();
}