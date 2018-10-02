// Robotarm bibliotheek inladen
var canvas = document.getElementById("canvas");
var robotArm = new RobotArm(canvas);

// Het level inladen
robotArm.randomLevel("1");

// Jou instructies volgen hier
robotArm.speed *= 10;
var moves = 1;
robotArm.grab();
while (robotArm.scan() != null) {
	for (var i = 1; i < moves; i++) {
		robotArm.moveRight();
}
	robotArm.drop();
	for (var e = 1; e < moves; e++) {
		robotArm.moveLeft();
}
moves++;
robotArm.grab();
}
// De door jou opgegeven instructies uitvoeren
robotArm.run();