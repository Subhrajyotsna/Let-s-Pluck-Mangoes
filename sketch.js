
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(1700, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
mango1 = new mango(1150,250,100)
mango2 = new mango(1250,200,100)
mango3= new mango(1050,350,100)
mango4= new mango(1000,210,100)
mango5 = new mango(1350,250,100)
mango6 = new mango(1450,150,100)
mango7 = new mango(1250,80,100)
mango8 = new mango(1500,300,100)
tree1 = new Tree(950,10,700,800)
boy1 = new boy(200,490,300,400)
stone1 = new Stone(50,490,100,50)
joiner = new constr(stone1.body,{x:260,y:600});
Base1 = new Base(850,800,1800,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  background("cyan");
  Base1.display();
  tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  boy1.display();
  stone1.display();
  joiner.display();

  
  
  detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);
  detectCollision(stone1,mango5);
  detectCollision(stone1,mango6);
  detectCollision(stone1,mango7);
  detectCollision(stone1,mango8);
  drawSprites();
 
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    joiner.fly();
}
function detectCollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance<=lmango.r+lstone.width+lstone.height)
  {
    Matter.Body.setStatic(lmango.body,false)
  }
}
function keyPressed() {
  if (keyCode === 32){
    Matter.Body.setPosition(stone1.body,{x:260,y: 600})
    joiner.attach(stone1.body);
  }
}




