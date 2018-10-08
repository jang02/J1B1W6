// Robotarm bibliotheek inladen
var canvas = document.getElementById("canvas");
var robotArm = new RobotArm(canvas);

// Het level inladen
robotArm.loadLevel("exercise tower_of_hanoi");

// Jou instructies volgen hier
robotArm.speed *= 10;
var pieces = 8;
var currentPosition = 0;

var disks = [];
for (var i = 0; i < pieces; i++) {
    disks.push(i);
}

var pins = [disks, [], []];
var instructions = hanoi(pieces, 0, 2, 1);

var totalMoves = 0;
var instructionFollowed = 0;

startRobot(pieces, instructions, pins);

function startRobot(n, instructions, pins) {
    if (instructions.length === instructionFollowed) {
        console.log("Completed in " + totalMoves + " moves.");
        return;
    }

    var instruction = instructions[instructionFollowed++];
    var src = instruction[0];
    var dest = instruction[1];


    while (currentPosition !== src) {
        if (currentPosition < src) {
            robotArm.moveRight();
            currentPosition++;
        }
        else {
            robotArm.moveLeft();
            currentPosition--;
        }
    }

    robotArm.grab();

    while (currentPosition !== dest) {
        if (currentPosition < dest) {
            robotArm.moveRight();
            currentPosition++;
        }
        else {
            robotArm.moveLeft();
            currentPosition--;
        }
    }

    robotArm.drop();

    totalMoves++;

    var disk = pins[src].pop();
    pins[dest].push(disk);

    startRobot(n, instructions, pins);
}

function hanoi(n, src, dest, using) {
    if (n === 1) {
        return [[src, dest]];
    }

    var instructions = hanoi(n-1, src, using, dest);
    instructions = instructions.concat(hanoi(1, src, dest, using));
    instructions = instructions.concat(hanoi(n-1, using, dest, src));

    return instructions;
}
// De door jou opgegeven instructies uitvoeren
robotArm.run();