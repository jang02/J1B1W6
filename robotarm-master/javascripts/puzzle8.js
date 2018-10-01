// Robotarm bibliotheek inladen
var canvas = document.getElementById("canvas");
var robotArm = new RobotArm(canvas);

// Het level inladen
robotArm.loadLevel("exercise 9");

// Jou instructies volgen hier
robotArm.speed *= 10;
for (var i = 0; i < 3; i++){
	robotArm.moveRight();
}
for (var o = 0; o < 4; o++){
for (var i = 0; i < 4; i++){
robotArm.grab();
for (var a = 0; a < 5; a++){
	robotArm.moveRight();
}
robotArm.drop();
for (e = 0; e < 5; e++){
	robotArm.moveLeft();
}
}
robotArm.moveLeft();
}
// De door jou opgegeven instructies uitvoeren
robotArm.run();