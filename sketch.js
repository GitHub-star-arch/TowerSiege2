const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;
var posx;
var posy;
var g1,g2,ball,string;
var b1,b2,b3,b4,b5,b6;

function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;
    b1 = new Box(300,400,40,40);
    b2 = new Box(340,400,40,40);
    b3 = new Box(380,400,40,40);
    b4 = new Box(320,360,40,40);
    b5 = new Box(360,360,40,40);
    b6 = new Box(340,320,40,40);
    /*var options={
        isStatic:true
    }*/
    ball= new Ball(200,400,40,40)
    /*posx = mouseX;
    posy = mouseY;
    var ball= ellipse(posx,posy,20,20);*/
    string = new String(ball.body,{x: 150,y: 400});
    g1= new Ground(350,550,200,10);
}   

function draw(){
    background(0,0,255);
    Engine.update(engine);
    /*rectMode(CENTER);
   rect(200,100,100,20);
    ellipseMode(CENTER);
   ellipse(posx,posy,20,20);*/
   g1.display();
   string.display();
   ball.display();
   b1.display();
   b2.display();
   b3.display();
   b4.display();
   b5.display();
   b6.display();
}

function mouseDragged () {
    Matter.Body.setPosition(ball.body,{x: mouseX,y: mouseY});
}

function mouseReleased () {
    string.fly();
}