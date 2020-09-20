var car1,car2,car3,car4,wall1,wall2,wall3,wall4;
var speed1, weight1,speed2, weight2,speed3, weight3,speed4, weight4;
var line1,line2,line3;
function setup() {
  createCanvas(900,400);

speed1=random(55,90)
weight1=random(400,1500)
speed2=random(55,90)
weight2=random(400,1500)
speed3=random(55,90)
weight3=random(400,1500)
speed4=random(55,90)
weight4=random(400,1500)

wall1=createSprite(780, 50, 50, 50);
car1=createSprite(50,50,30,20);
wall2=createSprite(780, 150, 50, 50);
car2=createSprite(50,150,30,20);
wall3=createSprite(780, 250, 50, 50);
car3=createSprite(50,250,30,20);
wall4=createSprite(780, 350, 50, 50);
car4=createSprite(50,350,30,20);
line1=createSprite(400,100,800,10);
line2=createSprite(400,200,800,10);
line3=createSprite(400,300,800,10);

car1.velocityX=speed1;
car2.velocityX=speed2;
car3.velocityX=speed3;
car4.velocityX=speed4;
}

function draw() {
  background("black");  
 

car1.shapeColor="white"
car2.shapeColor="white"
car3.shapeColor="white"
car4.shapeColor="white"
wall1.shapeColor=color(80,80,80)
wall2.shapeColor=color(80,80,80)
wall3.shapeColor=color(80,80,80)
wall4.shapeColor=color(80,80,80)
line1.shapeColor="white"
line2.shapeColor="white"
line3.shapeColor="white"

if(wall1.x-car1.x<(car1.width+wall1.width)/2){
car1.velocityX=0;
var deformation=0.5 * weight1 * speed1 * speed1/22500
if(deformation>180){
  car1.shapeColor=color(255,0,0)
}
if(deformation<180 && deformation>100){
  car1.shapeColor=color(230,230,0)
}
if(deformation<100){
  car1.shapeColor=color(0,250,0)
}
}
if(wall2.x-car2.x<(car2.width+wall2.width)/2){
  car2.velocityX=0;
  var deformation=0.5 * weight2 * speed2 * speed2/22500
  if(deformation>180){
    car2.shapeColor=color(255,0,0)
  }
  if(deformation<180 && deformation>100){
    car2.shapeColor=color(230,230,0)
  }
  if(deformation<100){
    car2.shapeColor=color(0,250,0)
  }
  }if(wall3.x-car3.x<(car3.width+wall3.width)/2){
    car3.velocityX=0;
    var deformation=0.5 * weight3 * speed3 * speed3/22500
    if(deformation>180){
      car3.shapeColor=color(255,0,0)
    }
    if(deformation<180 && deformation>100){
      car3.shapeColor=color(230,230,0)
    }
    if(deformation<100){
      car3.shapeColor=color(0,250,0)
    }
    }if(wall4.x-car4.x<(car4.width+wall4.width)/2){
      car4.velocityX=0;
      var deformation=0.5 * weight4 * speed4 * speed4/22500
      if(deformation>180){
        car4.shapeColor=color(255,0,0)
      }
      if(deformation<180 && deformation>100){
        car4.shapeColor=color(230,230,0)
      }
      if(deformation<100){
        car4.shapeColor=color(0,250,0)
      }
      }
drawSprites();
}