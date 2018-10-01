// Robotarm bibliotheek inladen
var canvas = document.getElementById("canvas");
var robotArm = new RobotArm(canvas);

// Het level inladen
robotArm.loadLevel("exercise 2");

// Jou instructies volgen hier
robotArm.speed *= 10
robotArm.grab();
for (var i = 0; i < 9; i++){
	robotArm.moveRight();
}
robotArm.drop();
for (var i = 0; i < 5; i++){
	robotArm.moveLeft();
}
robotArm.grab();
for (var i = 0; i < 5; i++){
	robotArm.moveRight();
}
robotArm.drop();
for (var i = 0; i < 2; i++){
	robotArm.moveLeft();
}
robotArm.grab();
for (var i = 0; i < 2; i++){
	robotArm.moveRight();
}
robotArm.drop();
// De door jou opgegeven instructies uitvoeren
robotArm.run();