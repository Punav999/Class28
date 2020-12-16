class Chain{
    constructor(bodyA,bodyB){
    var option={
        bodyA:bodyA,bodyB:bodyB,
        stiffness:0.2,length:10
    }
     this.body=Matter.Constraint.create(option);
     World.add(world,this.body);
}
     display(){
         var Pa= this.body.bodyA.position
         var Pb= this.body.bodyB.position
        push();
         strokeWeight(5)
         stroke("blue")

        line(Pa.x,Pa.y,Pb.x,Pb.y)
        pop();
     }
}
