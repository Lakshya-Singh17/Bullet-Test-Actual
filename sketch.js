var bullet1,bullet2,bullet3;
var damage;
var speed,weight,thickness;
var wall1,wall2,wall3;

function setup() {
  createCanvas(1000,400);

  thickness = random(5,20);
  speed = random(4,10);
  weight = random(10,50);

  damage = Math.round((0.5 * speed * weight) / thickness);
  
  bullet1= createSprite(50, 100, 20, 10);
  bullet2 = createSprite(50, 200, 20,10);
  bullet3 = createSprite(50, 300, 20, 10);  

  bullet1.velocityX = speed;
  bullet2.velocityX = speed;
  bullet3.velocityX = speed;

  wall1 = createSprite(950,100,thickness,80);
  wall2 = createSprite(950,200,thickness,80);
  wall3 = createSprite(950,300,thickness,80);
  
  console.log(damage);
}

function draw() {
  background(0,0,0);

  bullet1.collide(wall1);
  bullet2.collide(wall2);
  bullet3.collide(wall3);

  if(bullet1.collide(wall1) && bullet2.collide(wall2) && bullet3.collide(wall3)){
    if(damage >= 1 && damage <= 10){
      wall1.shapeColor = "green";
      wall2.shapeColor = "green";
      wall3.shapeColor = "green";
    }else{
      wall1.shapeColor = "red";
      wall2.shapeColor = "red";
      wall3.shapeColor = "red";

    }
  }

  console.log(damage);

  drawSprites();
}