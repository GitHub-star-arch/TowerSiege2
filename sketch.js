const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    var options={
        isStatic:true
    }
    object= Bodies.rectangle(200,200,20,20,options)
    World.add(world,object)
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
   rect(this.object.position.x,this.object.position.y,20,20);
}