// Robotarm bibliotheek inladen
var canvas = document.getElementById("canvas");
var robotArm = new RobotArm(canvas);

// Het level inladen
robotArm.loadLevel("exercise 3");

// Jou instructies volgen hier
robotArm.speed *=10
for (i = 0; i < 4; i++){
	robotArm.grab();
	robotArm.moveRight();
	robotArm.drop();
	robotArm.moveLeft();
}
// De door jou opgegeven instructies uitvoeren
robotArm.run();