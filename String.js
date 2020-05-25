class String{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.slingShot = Constraint.create(options);
        World.add(world, this.slingShot);
    }
    fly(){
        this.slingShot.bodyA = null;
    }
    display(){
        if (this.slingShot.bodyA) {
            var pointA = this.slingShot.bodyA.position;
            var pointB = this.slingShot.pointB;
            strokeWeight(4);
            stroke(245,0,0);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}