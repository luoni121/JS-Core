function p01InsideVolume(input) {
    let number = input.map(Number);

    for (let i = 0; i < input.length; i += 3) {
        let x = input[i];
        let y = input[i + 1];
        let z = input[i + 2];

        if (inVolume(x, y, z)) {
            console.log('inside');
        }
        else {
            console.log('outside');
        }

        function inVolume(x, y, z) {
            let x1 = 10, x2 = 50;
            let y1 = 20, y2 = 80;
            let z1 = 15, z2 = 50;

            if (x >= x1 && x <= x2) {
                if (y >= y1 && y <= y2) {
                    if (z >= z1 && z <= z2) {
                        return true;
                    }
                }

            }
            return false;
        }
    }
}
//p01InsideVolume([8, 20, 22]);
//p01InsideVolume([13.1, 50, 31.5, 50, 80, 50, -5, 18, 43]);

/*******************************************************************
***************************/

function p02RoadRadar(input) {
    let speed = input[0];
    let zone = input[1];
    let limit = getLimit(zone);
    let infraction = getInfraction(speed, limit);

    if (infraction) {
        console.log(infraction);
    }

    function getLimit(zone) {
        switch (zone) {
            case 'motorway':
                return 130;
            case 'interstate':
                return 90;
            case 'city':
                return 50;
            case 'residential':
                return 20;
        }
    }

    function getInfraction(speed, limit) {
        let overSpeed = speed - limit;
        if (overSpeed <= 0) {
            return false
        }
        else {
            if (overSpeed <= 20) {
                return 'speeding';
            } else if (overSpeed <= 40) {
                return 'excessive speeding';
            } else {
                return 'reckless driving';
            }
        }
    }
}
//p02RoadRadar([40, 'city']);
//p02RoadRadar([200, 'motorway']);

/*******************************************************************
***************************/

function p03TemplateFormat(input) {
    let html = '<?xml version="1.0" encoding="UTF-8"?>\n<quiz>\n';

    for (let i = 0; i < input.length; i += 2) {
        let question = input[i];
        let answer = input[i + 1];
        html += ('  <question>\n    ' + question + '\n  </question>\n  <answer>\n    ' + answer + '\n  </answer>\n');
    }
    html += '</quiz>';

    console.log(html);
}

// p03TemplateFormat(["Who was the forty-second president of the U.S.A.?",
//     "William Jefferson Clinton"]);
// p03TemplateFormat(["Dry ice is a frozen form of which gas?",
//     "Carbon Dioxide",
//     "What is the brightest star in the night sky?",
//     "Sirius"]);    

function p04CookingByNumbers(input) {
    let number = Number(input[0]);

    for (let i = 1; i < input.length; i++) {
        let operation = input[i];
        number = activateOperation(operation, number);
        console.log(number);
    }

    function activateOperation(operation, number) {
        switch (operation) {
            case 'chop': return number /= 2;
            case 'dice': return Math.sqrt(number);
            case 'spice': return number += 1;
            case 'bake': return number *= 3;
            case 'fillet': return number *= 0.8;
        }
    }
}

// p04CookingByNumbers(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);

/*******************************************************************
***************************/

function p05ModifyAverage(input) {
    let numberArray = input.toString().split('').map(Number);

    while (modify(numberArray) == false) {
        numberArray.push(9);
        modify(numberArray);
    }
    console.log(modify(numberArray));

    function modify(arr) {
        let average = arr.reduce((a, b) => a + b, 0) / arr.length;

        if (average <= 5) {
            return false;
        }
        else {
            return arr.join('');
        }
    }
}
// p05ModifyAverage(101);
// p05ModifyAverage(5835);

/*******************************************************************
***************************/

function p06ValidityChecker(input) {
    let x1 = input[0];
    let y1 = input[1];
    let x2 = input[2];
    let y2 = input[3];

    let dist1 = Math.sqrt(x1 * x1 + y1 * y1);
    let dist2 = Math.sqrt(x2 * x2 + y2 * y2);
    let dist = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));

    if (Number.isInteger(dist1)) {
        console.log('{%s, %s} to {0, 0} is valid', x1, y1);
    } else {
        console.log('{%s, %s} to {0, 0} is invalid', x1, y1);
    }

    if (Number.isInteger(dist2)) {
        console.log('{%s, %s} to {0, 0} is valid', x2, y2);
    } else {
        console.log('{%s, %s} to {0, 0} is invalid', x2, y2);
    }


    if (Number.isInteger(dist)) {
        console.log('{%s, %s} to {%s, %s} is valid', x1, y1, x2, y2);
    } else {
        console.log('{%s, %s} to {%s, %s} is invalid', x1, y1, x2, y2);
    }
}
// p06ValidityChecker([3, 0, 0, 4]);
// p06ValidityChecker([2, 1, 1, 1]);

/*******************************************************************
***************************/

function p07TreasureLocator(input) {
    let coordinates = input.map(Number);

    for (let i = 0; i < coordinates.length; i += 2) {
        let x = coordinates[i];
        let y = coordinates[i + 1];

        if (x >= 0 && x <= 2 && y >= 6 && y <= 8) {
            console.log('Tonga');
        }
        else if (x >= 4 && x <= 9 && y >= 7 && y <= 8) {
            console.log('Cook');
        }
        else if (x >= 1 && x <= 3 && y >= 1 && y <= 3) {
            console.log('Tuvalu');
        }
        else if (x >= 5 && x <= 7 && y >= 3 && y <= 6) {
            console.log('Samoa');
        }
        else if (x >= 8 && x <= 9 && y >= 0 && y <= 1) {
            console.log('Tokelau');
        }
        else {
            console.log('On the bottom of the ocean');
        }
    }
}
// p07TreasureLocator([4, 2, 1.5, 6.5, 1, 3]);

/*******************************************************************
***************************/

function p08TripLength(input) {
    let [x1, y1, x2, y2, x3, y3] = input.map(Number);

    let a = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    let b = Math.sqrt((x2 - x3) * (x2 - x3) + (y2 - y3) * (y2 - y3));
    let c = Math.sqrt((x1 - x3) * (x1 - x3) + (y1 - y3) * (y1 - y3));

    let ab = a + b;
    let bc = b + c;
    let ca = a + c;

    let shortestDistance = Math.min(ab, bc, ca);

    if (ab === shortestDistance) {
        console.log('1->2->3: ' + ab);
    }
    else if (ca === shortestDistance) {
        console.log("2->1->3: " + ca);
    }
    else {
        console.log("1->3->2: " + bc);
    }
}
// p08TripLength([0, 0, 2, 0, 4, 0]);
// p08TripLength([5, 1, 1, 1, 5, 4]);
// p08TripLength([-1, -2, 3.5, 0, 0, 2]);


