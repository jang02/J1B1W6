// Robotarm bibliotheek inladen
var canvas = document.getElementById("canvas");
var robotArm = new RobotArm(canvas);

// Het level inladen
robotArm.loadLevel("exercise 6");

// Jou instructies volgen hier
robotArm.speed *= 10;

for (var i = 0; i < 4; i++){
	robotArm.moveRight();
}
robotArm.grab();
robotArm.moveLeft();
robotArm.drop();
for (var i = 0; i < 2; i++){
	robotArm.moveRight();
}
robotArm.grab();
for (var i = 0; i < 4; i++){
	robotArm.moveLeft();
}
robotArm.drop();
for (var i = 0; i < 5; i++){
	robotArm.moveRight();
}
robotArm.grab();
for (var i = 0; i < 6; i++){
	robotArm.moveLeft();
}
robotArm.drop();
for (var i = 0; i < 7; i++){
	robotArm.moveRight();
}
robotArm.grab();
for (var i = 0; i < 5; i++){
	robotArm.moveLeft();
}
robotArm.drop();
// De door jou opgegeven instructies uitvoeren
robotArm.run();