// Robotarm bibliotheek inladen
var canvas = document.getElementById("canvas");
var robotArm = new RobotArm(canvas);

// Het level inladen
robotArm.loadLevel("exercise 4");

// Jou instructies volgen hier
robotArm.speed *=10
for (var i = 0; i < 2; i++){
robotArm.grab();
	for (var a = 0; a < 2; a++){
		robotArm.moveRight();
}
robotArm.drop();
for (var e = 0; e < 2; e++){
	robotArm.moveLeft();
}
}
robotArm.grab();
robotArm.moveRight();
robotArm.drop();
for (var i = 0; i < 2; i++){
	robotArm.moveRight();
	robotArm.grab();
	robotArm.moveLeft();
	robotArm.drop();
}
// De door jou opgegeven instructies uitvoeren
robotArm.run();