class constr {
    constructor(bodyA,pointB) {

         var bc = {
             bodyA:bodyA,
             pointB:pointB,
             length:10,
             stiffness:0.03

         }
this.same = Constraint.create(bc)
this.pointB = pointB
World.add(world,this.same)
    }
    fly(){
        this.same.bodyA = null;
    }
    attach(){
        this.same.bodyA = bodyA;
        
    }
    display(){
        strokeWeight(4);
        if(this.same.bodyA){
        line(this.same.bodyA.position.x,this.same.bodyA.position.y,this.pointB.x,this.pointB.y)
            
    }}
    
}