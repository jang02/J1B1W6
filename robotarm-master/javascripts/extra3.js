// Robotarm bibliotheek inladen
var canvas = document.getElementById("canvas");
var robotArm = new RobotArm(canvas);

// Het level inladen
robotArm.loadLevel("exercise 11");

// Jou instructies volgen hier
robotArm.speed *= 10;
var totalsteps = 0;

const amount = {red: 0, green: 0, white: 0, blue: 0};
const positions = {red: [], green: [], white: [], blue: []};

robotArm.moveRight();
totalsteps++;
var currentPosition = 1;

// scans every object
for (let i = 0; i < 9; i++) {
    robotArm.grab();
    totalsteps++;
    amount[robotArm.scan()]++;
    totalsteps++;
    positions[robotArm.scan()].push(currentPosition);
    totalsteps++;
    robotArm.drop();
    totalsteps++;
    robotArm.moveRight();
    totalsteps++;
    currentPosition++;
}

var keys = Object.keys(amount);

//determines the order
var order = ["", "", "", ""];
var orderNumbers = ["", "", "", ""];

for (let i = 0; i < keys.length; i++) {
    orderNumbers[i] = amount[keys[i]];
}
orderNumbers.sort(function (a, b) {
    return b-a;
});

for (let i = 0; i < keys.length; i++) {

    if (order[0] === "" && amount[keys[i]] === orderNumbers[0])
        order[0] = keys[i];

    else if (order[1] === "" && amount[keys[i]] === orderNumbers[1])
        order[1] = keys[i];

    else if (order[2] === "" && amount[keys[i]] === orderNumbers[2])
        order[2] = keys[i];

    else
        order[3] = keys[i];
}

//resetting position
while (currentPosition > 0) {
    robotArm.moveLeft();
    currentPosition--;
    totalsteps++;
}


for (let i = 0; i < order.length; i++) {
    if (order[i] === '')
        continue;

    //check for faulty ones
    if (i > 0) {
        while (currentPosition !== i) {
            if (currentPosition < i) {
                robotArm.moveRight();
                currentPosition++;
                totalsteps++;
            }
            else {
                robotArm.moveLeft();
                currentPosition--;
                totalsteps++;
            }
        }
        robotArm.grab();
        if (robotArm.scan() != null && robotArm.scan() !== order[i]) {
            var color = robotArm.scan();
            totalsteps++;
            let faultyPosition = currentPosition;
            robotArm.drop();
            totalsteps++;


            //check for open slot
            let availableSlot = 0;

            //resetting position
            while (currentPosition > 0) {
                robotArm.moveLeft();
                currentPosition--;
                totalsteps++;
            }

            for (let j = 0; j < 9; j++) {
                robotArm.moveRight();
                currentPosition++;
                totalsteps++;

                if (currentPosition > 4) {
                    robotArm.grab();
                    totalsteps++;
                    if (robotArm.scan() == null) {
                        availableSlot = currentPosition;
                        break;
                    }
                    else {
                        robotArm.drop();
                        totalsteps++;
                    }
                }
            }

            while (currentPosition !== faultyPosition) {
                if (currentPosition < faultyPosition) {
                    robotArm.moveRight();
                    currentPosition++;
                    totalsteps++;
                }
                else {
                    robotArm.moveLeft();
                    currentPosition--;
                    totalsteps++;
                }
            }

            robotArm.grab();
            totalsteps++;

            while (currentPosition !== availableSlot) {
                if (currentPosition < availableSlot) {
                    robotArm.moveRight();
                    currentPosition++;
                    totalsteps++;
                }
                else {
                    robotArm.moveLeft();
                    currentPosition--;
                    totalsteps++;
                }
            }

            robotArm.drop();
            totalsteps++;

            //resetting position
            while (currentPosition > 0) {
                robotArm.moveLeft();
                currentPosition--;
                totalsteps++;
            }

            for (let position = 0; position < positions[color].length; position++) {
                if (positions[color][position] === faultyPosition) {
                    positions[color][position] = availableSlot;
                    console.log("Changed faulty position " + faultyPosition + " for key " + color + " to " + availableSlot);
                    break;
                }
            }
        }
    }

    //start sorting process
    console.log("Positions for key " + order[i] + ": " + positions[order[i]]);
    for (let position = 0; position < positions[order[i]].length; position++) {
        while (currentPosition < positions[order[i]][position]) {
            robotArm.moveRight();
            currentPosition++;
            totalsteps++;
        }
        robotArm.grab();
        totalsteps++;

        while (currentPosition > i) {
            robotArm.moveLeft();
            currentPosition--;
            totalsteps++;
        }

        robotArm.drop();
    }

    //reset array
    positions[order[i]] = [0];
}
console.log('Total steps: ' + totalsteps)
// De door jou opgegeven instructies uitvoeren
robotArm.run();