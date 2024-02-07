// Javascript Document
// Author : Ian Gierhan
// Date : 2023-04-03
// Program Angry Pig

// Global variables
var canvasElem;
var world;

// When the window loads, initialize everything.
window.onload = initAll;

function movePlayer(e) {
  var player = world.getEntity("player");
  var ySpeed = 0;
  var maxYSpeed = 20;

  switch (e.keyCode) {
    case 32: // spacebar
      player.applyImpulse(500, 90);
      break;
    case 38: // up arrow
      ySpeed = Math.min(player._body.GetLinearVelocity().y + 1, maxYSpeed);
      player.setLinearVelocity(0, ySpeed);
      break;
    case 40: // down arrow
      ySpeed = Math.max(player._body.GetLinearVelocity().y - 1, -maxYSpeed);
      player.setLinearVelocity(0, ySpeed);
      break;
    default:
      break;
  }
}


function initAll()  {
  console.log("initAll has started...");

  canvasElem = document.getElementById("game");
  world = boxbox.createWorld(canvasElem, {
    gravity: {x:0, y:0},
    scale: 15,
    collisionOutlines: false
  });

  world.createEntity({
    name: "player",
    image: "pigfaceround.png",
    radius: 1,
    density: 1,
    height: 7,
    width: 7,
    x: 5,
    y: 15,
    onKeyDown: function(e) {
      if (e.keyCode === 32) {
        // Spacebar
        kick.call(this);
      } else if (e.keyCode === 38) {
        // Arrow up
        this.applyImpulse(300, 45);
      } else if (e.keyCode === 40) {
        // Arrow down
        this.applyImpulse(300, 135);
      }
    }
  });
  

  var block = {
    name: "block",
    image: "pin.png",
    width: "0.5",
    height: "6",
    onImpact: impact
  };

  world.createEntity(block, {x: 50, y: 15});
  world.createEntity(block, {x: 55, y: 18});
  world.createEntity(block, {x: 55, y: 12});
  world.createEntity(block, {x: 60, y: 15});
  world.createEntity(block, {x: 60, y: 22});
  world.createEntity(block, {x: 60, y: 8});
  world.createEntity(block, {x: 65, y: 18});
  world.createEntity(block, {x: 65, y: 12});
  world.createEntity(block, {x: 65, y: 6});
  world.createEntity(block, {x: 65, y: 24});
  world.createEntity(block, {x: 70, y: 15});
  world.createEntity(block, {x: 70, y: 22});
  world.createEntity(block, {x: 70, y: 8});
  world.createEntity(block, {x: 70, y: 2});
  world.createEntity(block, {x: 70, y: 28});
  world.createEntity(block, {x: 75, y: 18});
  world.createEntity(block, {x: 75, y: 12});
  world.createEntity(block, {x: 75, y: 6});
  world.createEntity(block, {x: 75, y: 24});
  world.createEntity(block, {x: 80, y: 15});
  world.createEntity(block, {x: 80, y: 22});
  world.createEntity(block, {x: 80, y: 8});
}

function kick() {
  // Impulse of 300 to 600 would be good.
  // Degree angle of 75 to 85 would be good.
  // 0 degrees is due North. 90 degrees is East.
  var impulse;
  var degree;

  impulse = (Math.random() * 300) + 300;
  degree = (Math.random() * 10) + 78;

  this.applyImpulse(impulse, degree);
}

var score = 0;
var soundPlayed = false;

function impact(entity) {
  if (entity.name() == "player") {

    if (!soundPlayed) {
    var sound = new Audio("strike.mp3");
    sound.play();

    // Set the soundPlayed variable to true so the sound is not played again
    soundPlayed = true;
    }
    score += 1;
    }
    var scoreTextElement = document.getElementById("txtScore");
    scoreTextElement.innerText = "Score: " + score;

  
}

function refreshPage() {
  location.reload();
}

// End of Javascript file.


