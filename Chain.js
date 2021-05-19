class Chain{
    constructor(bodyA,bodyB){
var options = {
    bodyA : bodyA,
    bodyB :bodyB,
    stiffness : 0.05,
    length :100
}
this.chain = Constraint.create(options);
World.add(world,this.chain);

    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        push();
        strokeWeight(7);
        stroke("red");
        line(pointA.x,pointA.y,pointB.x,pointB.y);
pop();
    }
}