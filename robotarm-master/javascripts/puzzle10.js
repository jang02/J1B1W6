// Robotarm bibliotheek inladen
var canvas = document.getElementById("canvas");
var robotArm = new RobotArm(canvas);

// Het level inladen
robotArm.loadLevel("exercise 11");
for (i = 0; i < 9; i++){
	robotArm.moveRight();
}
for (i = 0; i < 10; i++){
	robotArm.grab();
	if (robotArm.scan() === "white"){
		robotArm.moveRight();
		robotArm.drop();
		robotArm.moveLeft();
}
robotArm.drop();
robotArm.moveLeft();
}
// Jou instructies volgen hier
robotArm.speed *= 10;

// De door jou opgegeven instructies uitvoeren
robotArm.run();