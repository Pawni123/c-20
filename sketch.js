var fixedObject, movingObject;




function setup() {
  createCanvas(800,400);
  fixedObject=createSprite(400, 200, 50, 50);
  fixedObject.shapeColor="green";
  movingObject=createSprite(200,100,20,20);
  movingObject.shapeColor="green";
}

function draw() {
  background(255,255,255);
  fixedObject.y=World.mouseY;
  fixedObject.x=World.mouseX;

  console.log(fixedObject.x-movingObject.x);
  if((fixedObject.x-movingObject.x)<35 && (movingObject.x-fixedObject.x)<35 && (fixedObject.y-movingObject.y)<35 && (movingObject.y-fixedObject.y)<35){
    fixedObject.shapeColor="red";
    movingObject.shapeColor="red";
  }
  else{
    fixedObject.shapeColor="green";
    movingObject.shapeColor="green";
  }

  drawSprites();
}