var snake;
var food;

function setup() {
  createCanvas(cols * blockSize, rows * blockSize);
  food = new Food();
  snake = new Snake();
  frameRate(8);
}

function draw() {
  background(150);
  snake.render();
  food.render();

  if (snakeEatsFood()) {
    snake.digestFood();
    food = new Food();
  }
}

function snakeEatsFood() {
    let distanceApart = dist(snake.x, snake.y, food.x, food.y);
    return distanceApart < blockSize;
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.up();
  } else if (keyCode === DOWN_ARROW) {
    snake.down();
  } else if (keyCode === LEFT_ARROW) {
    snake.left();
  } else if (keyCode === RIGHT_ARROW) {
    snake.right();
  }
}
