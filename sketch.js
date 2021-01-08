const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 

var engine,world;
var ground,box1,box2,box3,box4,pig1,pig2,log1,log2;




function setup() {
  createCanvas(1200,400);
  engine = Engine.create()
  world = engine.world

  
ground = new Ground(600,390,1200,20);

  
 

  box1 = new Box(700,320,50,50);
  box2 = new Box(920,320,50,50);
  box3 = new Box(700,240,50,50);
  box4 = new Box(920,240,50,50);

  pig1 = new Pig(810,350);
  pig2 = new Pig(810,220)

  log1 = new Logs(810,260,300,PI/2)
  log2 = new Logs(810,180,300,PI/2);






  
}

function draw() {
  background(0);
  Engine.update(engine);  

  box1.display();
  box2.display();
  box3.display();
  box4.display();

  ground.display();

  pig1.display(); 
  pig2.display();

  log1.display();
  log2.display();

  
}