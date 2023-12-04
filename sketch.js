var squareCount = 0;

function setup() {
  createCanvas(1000, 1000);
  background(255);
}

function draw() {
  let colorValue = map(squareCount, 0, 500, 0, 255);
  fill(colorValue, 100, 150);
  stroke(0);
  strokeWeight(2);

  if (mouseIsPressed) {
    square(mouseX, mouseY, 40);
    squareCount++;
  }
}
