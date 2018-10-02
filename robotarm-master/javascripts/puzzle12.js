// Robotarm bibliotheek inladen
var canvas = document.getElementById("canvas");
var robotArm = new RobotArm(canvas);

// Het level inladen
robotArm.randomLevel("1");

// Jou instructies volgen hier
robotArm.speed *= 10;
var moves = 0;
var stappen = 0;

robotArm.grab();
stappen++;
while (robotArm.scan() != null) {
	moves++;
	for (var i = 1; i < moves; i++) {
		robotArm.moveRight();
		stappen++;
}
	robotArm.drop();
	stappen++;
	for (var e = 1; e < moves; e++) {
		robotArm.moveLeft();
		stappen++;
}
robotArm.grab();
stappen++;
}
	for (var i = 1; i < moves; i++) {
		robotArm.moveRight();
		stappen++;
}
	robotArm.grab();
	stappen++;
	for (var e = 1; e < moves; e++) {
		robotArm.moveLeft();
		stappen++;
}
robotArm.drop();
stappen++;
console.log('Total steps: ' + stappen)
// De door jou opgegeven instructies uitvoeren
robotArm.run();