const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var comp, playerBase, player, computer;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  computerBase = new ComputerBase(windowWidth - windowWidth/6, windowHeight/2, 100, 100);
  playerBase = new PlayerBase(0 + windowWidth/6, windowHeight/2, 100, 100);
  computer = new Player(windowWidth - windowWidth/6, windowHeight/2 + 23, 80, 120);
  player = new Player(0 + windowWidth/6, windowHeight/2 + 23, 80, 120)
  

 }

function draw() {

  background(180);

  Engine.update(engine);

  //Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);


   //Display Playerbase and computer base 
   computerBase.display();
   playerBase.display();
   player.display();
   computer.display();


   //display Player and computerplayer


}
