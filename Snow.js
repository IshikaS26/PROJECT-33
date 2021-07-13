class Snow {

    constructor (x,y,r){
        var options = {
            restitution:0.4 
        }
        this.r = r ;
        this.body = Bodies.circle(x,y,r,options);
        World.add(world, this.body);
        this.image = loadImage("snow4.webp");
        
    }
    display(){
        push();
    var pos=this.body.position;
   translate(pos.x,pos.y) ;
   rotate(this.body.angle);
   imageMode(CENTER);
   image(this.image,0,0,this.r,this.r);
pop();
}
}