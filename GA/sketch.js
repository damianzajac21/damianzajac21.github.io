//Create two variables that will store the new objects from the class Circle
let circleArray = []; //declare an array for the top circles
let circleArray2 = []; //declare an array for the bottom circles
let arraySize = 100; //there is 100 circles on each side
var bga = 0; //alpha of the background
let angle = 0; //set angle to 0
let white = 0; //the colour of the first set of bubbles is black
let white2 = 30; //the colour of the second set of bubbles is dark grey

function setup() {
  var canvas = createCanvas(594, 841); //canvas size = 594x841px
  canvas.parent("CanvasContainer");
  //this makes the canvas in the middle based on the code used in html and css file
  for (let i=0; i<arraySize; i++){
    //loop for the top circles, it starts with 0, then adds another until there's 100 of them
    circleArray[i] = new Circle(width/2, height/2, random(-4, 2), random(-5, -1), 3);
    //declare an array and assign it to a new class then place the circles in the middle,
    // and make them move up. the final number is the size of the circles which is 3px
  }
  for (let e=0; e<arraySize; e++) {
    //loop for the bottom circles
    circleArray2[e] = new Circle(width/2, height/2, random(-2, 4), random(1, 6), 3);
    //same as above, except these circles move down
  }
}

function draw() {
  background(0, bga);
  //set background color to black and also use alpha values to make it transparent
  for (let i=0; i<circleArray.length; i++){
    //loop for the top circles and assign them to constructors
    circleArray[i].moveFunction();
    //for the movement
    circleArray[i].displayCircle();
    //for them to be displayed
  }
  for (let e=0; e<circleArray2.length; e++){
    //loop for the bottom circles
    circleArray2[e].moveFunction();
    //movement
    circleArray2[e].displayCircle();
    //display
  }

  angle += 10;
  //the speed of the bubbles

  //Get the sin and cos value from the angle
  let sinValueX = sin(angle);
  //makes the sin angle to start at 0
  let sinValueY = cos(angle);
  //makes the cos angle to start at 0

  let x2 = map(sinValueX, -1, 1, random(-200, 300), width-(random(-400, 300)));
  let y2 = map(sinValueY, -1, 1, random(-200, 300), width-(random(-400, 300)));
  let x3 = map(sinValueX, -1, 1, random(-200, 300), width-(random(-400, 300)));
  let y3 = map(sinValueY, -1, 1, random(-200, 300), width-(random(-400, 300)));
  let x4 = map(sinValueX, -1, 1, random(-200, 300), width-(random(-400, 300)));
  let y4 = map(sinValueY, -1, 1, random(-200, 300), width-(random(-400, 300)));
  //maps the bubble circles to appear at random location on the canvas
  fill(white, 40);
  //sets the fill of the bubbles to black and makes them almost transparent
  noStroke();
  //removes the stroke of the bubbles
  ellipse(30+x2, 50+y2, 50, 50);
  //ellipse is a shape of the bubbles and they are assigned location and size of 50px
  fill(white2, 60);
  //bubbles are dark grey and slightly transparent
  ellipse(30+x3, 50+y3, 50, 50);
  ellipse(30+x4, 50+y4, 50, 50);
  //located at random locations and size of 50px
}

//Definition of the class Circle
class Circle{

  constructor(x, y, speedX, speedY, size){
    //this constructor is assigned to the array of the circles
    //Setup of class' variables
    this.x = x;
    // x coordinate
    this.y = y;
    // y coordinate
    this.speedX = speedX;
    // horizontal speed
    this.speedY = speedY;
    // vertical speed
    this.size = size;
    // size of the circles

    this.rd = random(120, 200);
    //random value of red between 120 and 200
    this.bl = random(120, 200);
    //random value of red between 120 and 200
    this.grn = 0;
    //value of green is at 0, meaning that the green colour will not appear
    this.a = random(120, 255);
    //random value of alpha between 120 and 255

  }

  //Class function that takes care of motion and collision
  moveFunction(){
    //Motion system - current position and speed
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;

    //Based on boundaries collision, reverse direction for x and y
    if (this.x > width || this.x<0){
      this.speedX *= -1;
      //if the circle hits the wall it will reverse its speed
      this.size = random(2, 4);
      //when it hits right or left wall it will change the size to 2, 3 or 4px
      this.y += 10;
      //this makes the circles instantly bounce of 10px when they hit the left
      // or right walls
      this.rd = random(0, 55);
      //changes/decreases the value of red when it hits the walls
    }
    if (this.y > (height) || this.y<0){
      this.speedY *= -1;
      //reverses the speed of the circle after it hits the top or bottom walls
      this.rd = random(120, 200);
      //brings back the original values of red
    }
  }


  //Class function that displays the ellipse
  displayCircle(){
    noStroke();
    //removes the stroke
    this.fillcol = color(this.rd, this.grn, this.bl, this.a)
    //the color of the ellipse
    fill(this.fillcol);
    //the fill of the ellipse, with the help of the above
    ellipse(this.x, this.y, this.size, this.size);
    //the ellipse script that creates the circles
  }
}

function touchStarted(){
  if (bga == 0) {
    bga = 255;
    //if the background is transparent, change the value of the alpha to 255,
    // to erase the lines
    white = 150;
    white2 = 150;
    //makes the bubbles more white
    this.a = 255;
    //increases the alpha value of the circles
  } else {
    bga = 0;
    //if the alpha value of the background is 255, set it back to 0, which makes
    // it transparent again
    white = 0;
    white2 = 30;
    this.a = random(120, 255);
    //changes it back to original values
  }
}
