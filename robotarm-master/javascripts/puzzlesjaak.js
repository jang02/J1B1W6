var canvas = document.getElementById("canvas");
var robotArm = new RobotArm(canvas);

robotArm.loadLevel("exercise 9");

robotArm.grab();
for(var a=0; a<5; a++){
    robotArm.moveRight();
}

robotArm.run();