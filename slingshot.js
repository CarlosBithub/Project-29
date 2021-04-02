class sling
{
constructor(bodyA,pointB){
    var options={
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.04,
        length:10
    }

this.pointB = pointB
this.slingg = Constraint.create(options);
World.add(world,this.slingg);
}

//attach(body){
    //this.slingg.bodyA=body
//}

throw(){
 this.slingg.bodyA = null
}


display(){
    if(this.slingg.bodyA){
    var pointA = this.slingg.bodyA.position;
    var pointB = this.pointB;
    strokeWeight(4);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}


}