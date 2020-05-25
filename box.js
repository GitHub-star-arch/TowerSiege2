class Box {
    constructor(x,y,width,height) {

      this.body = Bodies.rectangle(x,y,width,height);
      this.width = width;
      this.height = height;
      this.Visiblity = 255;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("gray");
      rect(pos.x, pos.y, this.width, this.height);
      if(this.body.speed > 9){
         push();
         this.Visiblity = this.Visiblity - 50;
         tint(255,this.Visiblity);
         pop();
      }
    }
  };
