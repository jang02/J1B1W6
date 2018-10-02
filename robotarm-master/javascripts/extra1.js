// Robotarm bibliotheek inladen
var canvas = document.getElementById("canvas");
var robotArm = new RobotArm(canvas);

// Het level inladen
robotArm.loadLevel("exercise 3");

// Jou instructies volgen hier
robotArm.speed *= 10;
var moves = 1;

for (var i = 0; i < 4; i++) {
	robotArm.grab();
	moves++;
	for (var e = 0; e < moves; e++){
		robotArm.moveRight();
	}
	robotArm.drop();
	for (var e = 0; e < moves; e++){
		robotArm.moveLeft();
	}
	moves++;
}
// De door jou opgegeven instructies uitvoeren
robotArm.run();