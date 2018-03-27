function Food() {
    this.x = randomX();
    this.y = randomY();
  
    this.render = function() {
      fill(255, 0, 0);
      noStroke();
      rect(this.x, this.y, blockSize, blockSize);
    };
  }