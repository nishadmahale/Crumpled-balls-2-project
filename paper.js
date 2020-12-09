class Paper {

    constructor(x,y,radius){
        this.body=Bodies.circle(x,y,radius,{restitution:0.4, friction:1.2, density:1.0});
        this.r = radius;
        World.add(world,this.body);
        this.image=loadImage("paper.png");
        




    }

    display(){
        
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.r);
      imageMode(RADIUS);
        fill("red");
        image(this.image,0,0,this.r,this.r);
        pop();
            



    
    }
   










}