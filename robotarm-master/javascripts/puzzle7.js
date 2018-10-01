// Robotarm bibliotheek inladen
var canvas = document.getElementById("canvas");
var robotArm = new RobotArm(canvas);

// Het level inladen
robotArm.loadLevel("exercise 8");

// Jou instructies volgen hier
robotArm.speed *= 10;
robotArm.moveRight();
for (var i = 0; i < 7; i++){
	robotArm.grab();
	for (var e = 0; e < 8; e++){
		robotArm.moveRight();
	}
robotArm.drop();
	for (var r = 0; r < 8; r++){
	robotArm.moveLeft();
}	
}
// De door jou opgegeven instructies uitvoeren
robotArm.run();