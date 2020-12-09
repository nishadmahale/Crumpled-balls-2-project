class Dustbin{

    constructor(x,y,width,height){
      var options={
        isStatic:true,
        restitution:0.3,
        friction:0.5,
        density:1.2
      }

      this.body=Bodies.rectangle(x,y,width,height,options);
      this.w = width;
      this.h = height;
      World.add(world,this.body);

      this.image=loadImage("dustbingreen.png");

     }

       display () {
        var pos =this.body.position;
        var angle = this.body.angle;
        
        rectMode(CENTER);
        fill("green");
       image(this.image,pos.x,pos.y,this.w,this.h);
 
    }
  } 