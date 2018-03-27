function Snake() {
    this.x = randomX();
    this.y = randomY();
    this.xspeed = 0;
    this.yspeed = 0;
    this.length = 0;
    this.tail = [];
  
    this.render = function() {
      this.updateLocation();
    
      fill(0);
      for (var i = 0; i < this.length; i++) {
        rect(this.tail[i].x, this.tail[i].y, blockSize, blockSize);
      }
      rect(this.x, this.y, blockSize, blockSize);
      
    };
  
    this.updateLocation = function() {
      var dx = this.xspeed * blockSize;
      var dy = this.yspeed * blockSize;
  
      for (var i = this.length; i > 0; i--) {
        this.tail[i] = this.tail[i-1];
      }
      this.tail[0] = createVector(this.x, this.y);
  
      this.x = this.x + dx;
      this.y = this.y + dy;
      
      this.x = constrain(this.x, 0, width - blockSize);
      this.y = constrain(this.y, 0, height - blockSize);
    };
  
    this.digestFood = function() {
      console.log("YUM!");
      this.length++;
    };
  
    this.up = function() {
      this.yspeed = -1;
      this.xspeed = 0;
    };
  
    this.down = function() {
      this.yspeed = 1;
      this.xspeed = 0;
    };
  
    this.left = function() {
      this.yspeed = 0;
      this.xspeed = -1;
    };
  
    this.right = function() {
      this.yspeed = 0;
      this.xspeed = 1;
    };
  }