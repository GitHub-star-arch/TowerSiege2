const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;
var posx;
var posy;
var g1,g2,ball,string;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10;

function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;
    b1= new Box(600,190,20,20);
    b2= new Box(620,190,20,20);
    b3= new Box(640,190,20,20);
    b4= new Box(610,170,20,20);
    b5= new Box(630,170,20,20);
    b6= new Box(600,290,20,20);
    b7= new Box(620,290,20,20);
    b8= new Box(640,290,20,20);
    b9= new Box(610,270,20,20);
    b10= new Box(630,270,20,20);
    /*var options={
        isStatic:true
    }*/
    ball= new Ball(200,400,20,20)
    /*posx = mouseX;
    posy = mouseY;
    var ball= ellipse(posx,posy,20,20);*/
    string = new String(ball.body,{x: 200,y: 400});
    g1= new Ground(650,200,200,10);
    g2= new Ground(650,400,200,10);
}   

function draw(){
    background(0,0,255);
    Engine.update(engine);
    /*rectMode(CENTER);
   rect(200,100,100,20);
    ellipseMode(CENTER);
   ellipse(posx,posy,20,20);*/
   g1.display();
   g2.display();
   string.display();
   ball.display();
   b1.display();
   b2.display();
   b3.display();
   b4.display();
   b5.display();
   b6.display();
   b7.display();
   b8.display();
   b9.display();
   b10.display();
}

function mouseDragged () {
    Matter.Body.setPosition(ball.body,{x: mouseX,y: mouseY});
}

function mouseReleased () {
    string.fly();
}