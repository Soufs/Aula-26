class Bird extends BaseClass {
    constructor(x, y) {
      super(x,y,50,50);
      this.image = loadImage("sprites/bird.png");
      this.smokeimg = loadImage("sprites/smoke.png");
      this.trajetoria = [];
    }

    display(){
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      super.display();
      var position = [this.body.position.x, this.body.position.y];
      this.trajetoria.push(position)
      //console.log(this.trajetoria);
      for(var s = 0; s < this.trajetoria.length; s = s + 1){
        image(this.smokeimg, this.trajetoria[s][0], this.trajetoria[s][1]);
      }
    }
  }