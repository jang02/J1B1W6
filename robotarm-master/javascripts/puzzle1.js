// Robotarm bibliotheek inladen
var canvas = document.getElementById("canvas");
var robotArm = new RobotArm(canvas);

// Het level inladen
robotArm.loadLevel("exercise 1");

// Jou instructies volgen hier
robotArm.speed *= 10
robotArm.moveRight();
robotArm.grab();
robotArm.moveLeft();
robotArm.drop();
// De door jou opgegeven instructies uitvoeren
robotArm.run();