var fixedRect,movingRect,gameObject1,gameObject2;

function setup() {
   createCanvas(1200,400);
   fixedRect=createSprite(200,200,50,80);
   fixedRect.shapeColor="green"; 
   movingRect=createSprite(400,200,80,30);
   movingRect.shapeColor="green";
   gameObject1=createSprite(200,300,50,80);
   gameObject2=createSprite(500,300,50,80);

   fixedRect.velocityX = +5;
   movingRect.velocityX = -5;
    } 
    function draw() {
      
      background(0); 
      console.log(fixedRect.width/2+movingRect.width/2); 
      //distance between the center of two rectangles 
      console.log(movingRect.x-fixedRect.x); 
      //Algorithm for collision detection
 
        bounceOff(movingRect,fixedRect);
        
        if(isTouching(gameObject1,gameObject2)){

        gameObject1.shapeColor = "red";
        gameObject1.shapeColor = "red";

        }

        else {

       gameObject1.shapeColor = "orange";
       gameObject2.shapeColor = "orange";

        }

        gameObject1.x = World.mouseX;
        gameObject1.y = World.mouseY;

        drawSprites();

   }