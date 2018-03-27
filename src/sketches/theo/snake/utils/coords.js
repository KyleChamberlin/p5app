var cols = 50;
var rows = 30;
var blockSize = 30;

function scaleToGrid(n) {
  return n * blockSize;
}

function randomX() {
  return scaleToGrid(floor(random(cols)));
}

function randomY() {
  return scaleToGrid(floor(random(rows)));
}
