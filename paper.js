class Paper {
    constructor(x,y, radius) {
        var options = {
            'isStatic': false,
            'restitution': 0.3,
            'friction': 0.5,
            'density': 2.5
        }
        this.x = x;
        this.y = y;
     
        this.radius = radius; 
        this.body =Bodies.circle(this.x,this.y,(this.radius -20)/2,options);
        this.image = loadImage("paper.png");
        World.add(world, this.body);


        
    }
    display(){
        var angle =this.body.angle;
        
        push();
        translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.image, 0,0, this.radius, this.radius);
        pop ();
    }
   
}
