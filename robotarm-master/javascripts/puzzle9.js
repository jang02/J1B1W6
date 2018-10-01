// Robotarm bibliotheek inladen
var canvas = document.getElementById("canvas");
var robotArm = new RobotArm(canvas);

// Het level inladen
robotArm.loadLevel("exercise 10");

// Jou instructies volgen hier
robotArm.speed *= 10;
var moves = 9;
for (var i = 0; i < 5; i++){
	robotArm.grab();
	for (var a = 0; a < moves; a++){
		robotArm.moveRight();
}
	robotArm.drop();
	moves = moves - 1;
	for (var b = 0; b < moves; b++){
		robotArm.moveLeft();
}
	moves = moves - 1;
}
// De door jou opgegeven instructies uitvoeren
robotArm.run();