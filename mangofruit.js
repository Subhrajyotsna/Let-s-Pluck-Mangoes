class mango{
    constructor(x,y,r)
    {
        var options = {
            isStatic: true,
            restitution:0,
            friction:1

        }
        this.x = x;
        this.y = y;
        this.r = r;
       
        this.body=Bodies.circle(this.x,this.y,this.r,options)
        World.add(world,this.body)
        this.image= loadImage("mango.png")
       
    }
    display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(2);
			stroke("black");
			fill("#FA86C4");
			image(this.image,0,0,this.r, this.r);
            
			pop()
	}
}