class polygon{
    constructor(x,y,r){
        var options={
            isStatic:false,
            density:1, 
            friction:0.3
            
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("polygon.png");
        this.body=Bodies.circle(this.x,this.y,(this.r-20)/2,options);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        //pos.x = mouseX;
        //pos.y = mouseY;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        imageMode(CENTER);
        //ellipse(0,0,this.r-20,this.r-20);
        image(this.image,0,0,this.r-20,this.r-20);
        pop();
    }
}