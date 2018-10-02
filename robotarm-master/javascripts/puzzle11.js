// Robotarm bibliotheek inladen
var canvas = document.getElementById("canvas");
var robotArm = new RobotArm(canvas);

// Het level inladen
robotArm.loadLevel("exercise 11");
// Jou instructies volgen hier
robotArm.speed *= 10;
var lastposition = 9;
var currentposition = 0;
var moveback = 0;

for (var i = 0; i < 9; i++){
	robotArm.moveRight();
	currentposition++;
}
for (currentposition = 9; currentposition >= 0; currentposition){
	robotArm.grab();
	if (robotArm.scan() === "red"){
		while (currentposition < lastposition){
			robotArm.moveRight();
			currentposition++;
			moveback++;
		}
		robotArm.drop();
		for (var i = 0; i < moveback; i++){
			robotArm.moveLeft();
			currentposition--;
		}
}
	else{
	robotArm.drop();
	robotArm.moveLeft();
	currentposition -= 1;
	moveback = 0;
}
}
// De door jou opgegeven instructies uitvoeren
robotArm.run();