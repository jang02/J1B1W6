// Robotarm bibliotheek inladen
var canvas = document.getElementById("canvas");
var robotArm = new RobotArm(canvas);

// Het level inladen
robotArm.loadLevel("exercise 7");

// Jou instructies volgen hier
robotArm.speed *= 10;
robotArm.moveRight();
for (var e = 0; e < 5; e++){
	for (var i = 0; i < 6; i++){
		robotArm.grab();
		robotArm.moveLeft();
		robotArm.drop();
		robotArm.moveRight();
}
robotArm.moveRight();
robotArm.moveRight();
}
// De door jou opgegeven instructies uitvoeren
robotArm.run();