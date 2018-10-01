// Robotarm bibliotheek inladen
var canvas = document.getElementById("canvas");
var robotArm = new RobotArm(canvas);

// Het level inladen
robotArm.randomLevel("1");

// Jou instructies volgen hier
robotArm.speed *= 10;


// De door jou opgegeven instructies uitvoeren
robotArm.run();