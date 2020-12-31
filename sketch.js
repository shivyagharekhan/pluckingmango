
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var treeobj,stoneobj,groundobj,launcherobj
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12
var world,boy
var launchingForce=100
function preload(){
boy=loadImage("images/boy.png")	

}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;
	stoneobj=new Stone(235,420,30)
	mango1=new Mango(1100,100,30)
    mango2=new Mango(1170,130,30)
    mango3=new Mango(1010,140,30)
	mango4=new Mango(1000,70,30)
	mango5=new Mango(900,230,40)
	mango6=new Mango(1140,150,40)
	mango7=new Mango(1100,230,40)
    mango8=new Mango(1200,200,40)
    mango9=new Mango(1120,200,40)
	mango10=new Mango(900,160,40)
	mango11=new Mango(1100,70,30)
	mango12=new Mango(1000,230,30)
	treeobj=new Tree(1050,580)
	groundobj=new Ground(width/2,600,width,20)
    launcherobj=new Launcher(stoneobj.body,{x:235,y:420})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  textSize(25)
  text("press space to get a second chance to play",50,50)
  image(boy,200,340,200,300)
  treeobj.display()
  stoneobj.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  mango9.display()
  mango10.display()
  mango11.display()
  mango12.display()
  groundobj.display()
  launcherobj.display()
  detectCollision(stoneobj,mango1)
  detectCollision(stoneobj,mango2)
  detectCollision(stoneobj,mango3)
  detectCollision(stoneobj,mango4)
  detectCollision(stoneobj,mango5)
  detectCollision(stoneobj,mango6)
  detectCollision(stoneobj,mango7)
  detectCollision(stoneobj,mango8)
  detectCollision(stoneobj,mango9)
  detectCollision(stoneobj,mango10)
  detectCollision(stoneobj,mango11)
  detectCollision(stoneobj,mango12)
 
}
function mouseDragged(){
Matter.Body.setPosition(stoneobj.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	launcherobj.fly()
}
function keyPressed (){
	if(keyCode===32){
	Matter.Body.setPosition(stoneobj.body,{x:235,y:420})
	launcherobj.attach(stoneobj.body)
	}
}
function detectCollision(lstone,lmango){
  mangoBodyPosition=lmango.body.positiion
  stoneBodyPosition=lstone.body.positiion
  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance<=lmango.r+lstone.r){
 Matter.Body.setStatic(lmango.body,false)
  }

}
