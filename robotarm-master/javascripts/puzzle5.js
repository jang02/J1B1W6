// Robotarm bibliotheek inladen
var canvas = document.getElementById("canvas");
var robotArm = new RobotArm(canvas);

// Het level inladen
robotArm.loadLevel("exercise 6");

// Jou instructies volgen hier
robotArm.speed *= 10;
for (var i = 0; i < 7; i++){
	robotArm.moveRight();
}
robotArm.grab();
for (var i = 0; i < 8; i++){
	robotArm.grab();
	robotArm.moveRight();
	robotArm.drop();
	for (var e = 0; e < 2; e++)
		robotArm.moveLeft();
}
// De door jou opgegeven instructies uitvoeren
robotArm.run();