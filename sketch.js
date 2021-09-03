const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;

var arrow;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerbase = new PlayerBase(150, 500, 160, 310);
  computerbase = new ComputerBase(1000, 500, 160, 310);
  player = new Player(1000, 250, 160, 310);
  computer = new Computer(150,250,160,310)
 
  //Create Player Archer Object


  
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
 

  //Display arrow();
 
}



