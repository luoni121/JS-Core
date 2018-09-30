function p1Hello(input) {
    console.log("Hello, %s, I am JavaScript!", input);
}

/*********************************************
*************/

function p2AreaPerimeter(a, b) {
    let area = a * b;
    let perimeter = a * 2 + b * 2;
    console.log(area);
    console.log(perimeter);
}

/*********************************************
*************/

function p3DistanceOverTime(input) {
    let v1 = input[0];
    let v2 = input[1];
    let time = input[2] / 60 / 60;

    let dist1 = v1 * time;
    let dist2 = v2 * time;
    let delta = Math.abs(dist1 - dist2) * 1000;
    console.log(delta);
}
//p3DistanceOverTime([0, 60, 3600]);

/*********************************************
*************/

function p4DistanceIn3D(input) {
    let x = input[0] - input[3];
    let y = input[1] - input[4];
    let z = input[2] - input[5];

    console.log(Math.sqrt(x * x + y * y + z * z));
}
//p4DistanceIn3D([1, 1, 0, 5, 4, 0]);

/*********************************************
*************/

function p5gradsToRad(input) {
    let grad = Number(input);
    let degree = (grad * 0.9) % 360;

    if (degree < 0) {
        degree += 360;
    }
    console.log(degree);
}
//p5gradsToRad([0]);
//p5gradsToRad([360]);

/*********************************************
*************/

function p6CompoundInterest(input) {
    let principalSum = Number(input[0]);
    let interestRate = Number(input[1]) / 100;
    let period = 12 / Number(input[2]);
    let time = Number(input[3]);

    let total = principalSum * (Math.pow(1 + (interestRate / period), (period * time)));
    console.log(total.toFixed(2));
}
//p6CompoundInterest([1500, 4.3, 3, 6]);

/*********************************************
*************/

function p7Rounding(input) {
    let number = Number(input[0]);
    let percision = Number(input[1]);

    if (percision > 15) {
        percision = 15;
    }
    number = number.toFixed(percision);
    console.log(Number(number));
}
//p7Rounding([3.1415926535897932384626433832795, 2]);

/*********************************************
*************/

function p8ImperialUnts(input) {
    let number = Number(input);
    let foot = Math.floor(number / 12);
    let inches = number % 12;

    console.log("%s'-%s\"", foot, inches);
}
//p8ImperialUnts(36);

/*********************************************
*************/

function p9NowPlaying(input) {
    let song = input[0];
    let singer = input[1];
    let duration = input[2];

    console.log("Now Playing: %s - %s [%s]", singer, song, duration);
}
//p9NowPlaying(['Number One', 'Nelly', '4:09']);

/*********************************************
*************/

function p10ComposeTag(input) {
    let location = String(input[0]);
    let text = String(input[1]);

    console.log("<img src=\"%s\" alt=\"%s\">", location, text);
}
//p10ComposeTag(['smiley.gif', 'Smiley Face']);

/*********************************************
*************/

function p11BinaryToDecimal(input) {

    console.log(parseInt(input, 2));
}
//p11BinaryToDecimal(['00001001']);

/*********************************************
*************/

function p12AssignProperties(input) {
    let register = {};

    for (let i = 0; i < input.length - 1; i++) {
        register[input[i++]] = input[i];
    }

    return register;
}
//console.log(p12AssignProperties(['name', 'Pesho', 'age', '23', 'gender', 'male']));

/*********************************************
*************/

function p13LastMonth(input) {
    let day = Number(input[0]);
    let month = Number(input[1]);
    let year = Number(input[2]);

    let date = new Date(year, month - 1);
    date.setDate(0);
    console.log(date.getDate());
}
//p13LastMonth([17, 3, 2002]);

/*********************************************
*************/

function p14BiggestOf3Numbers(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let num3 = Number(input[2]);

    console.log(Math.max(num1, num2, num3));
}
//p14BiggestOf3Numbers([5,-2,7]);

/*********************************************
*************/

function p15PointInRectangle(input) {
    let x = input[0];
    let y = input[1];
    let xMin = input[2];
    let xMax = input[3];
    let yMin = input[4];
    let yMax = input[5];

    if (x <= xMax && x >= xMin && y <= yMax && y >= yMin) {
        console.log("inside");
    }
    else {
        console.log("outside");
    }
}
//p15PointInRectangle([8, -1, 2, 12, -3, 3]);

/*********************************************
*************/

function p16OddNumbers1ToN(n) {
    for (let i = 1; i <= n; i += 2) {
        console.log(i);
    }
}
//p16OddNumbers1ToN(5);

/*********************************************
*************/

function p17TriangleOfDollars(n) {

    let line = "";
    for (let i = 0; i < n; i++) {
        line += "$";
        console.log(line);
    }
    //console.log("$".repeat(n));  
}
//p17TriangleOfDollars(3);

/*********************************************
*************/

function p18MoviePrices(input) {

    let title = input[0].toLowerCase();
    let day = input[1].toLowerCase();

    if (title == 'the godfather') {
        switch (day) {
            case 'monday': return 12;
            case 'tuesday': return 10;
            case 'wednesday': return 15;
            case 'thursday': return 12.50;
            case 'friday': return 15;
            case 'saturday': return 25;
            case 'sunday': return 30;
            default: return 'error';
        }
    } else if (title == 'schindler\'s list') {
        switch (day) {
            case 'monday': return 8.50;
            case 'tuesday': return 8.50;
            case 'wednesday': return 8.50;
            case 'thursday': return 8.50;
            case 'friday': return 8.50;
            case 'saturday': return 15;
            case 'sunday': return 15;
            default: return 'error';
        }
    } else if (title == 'casablanca') {
        switch (day) {
            case 'monday': return 8;
            case 'tuesday': return 8;
            case 'wednesday': return 8;
            case 'thursday': return 8;
            case 'friday': return 8;
            case 'saturday': return 10;
            case 'sunday': return 10;
            default: return 'error';
        }
    } else if (title == 'the wizard of oz') {
        switch (day) {
            case 'monday': return 10;
            case 'tuesday': return 10;
            case 'wednesday': return 10;
            case 'thursday': return 10;
            case 'friday': return 10;
            case 'saturday': return 15;
            case 'sunday': return 15;
            default: return 'error';
        }
    } else {
        return 'error';
    }
}

/*********************************************
*************/

function p19QuadraticEquation(a, b, c) {
    let D = b * b - 4 * a * c;
    if (D > 0) {
        let x1 = (- b + Math.sqrt(D)) / (2 * a);
        let x2 = (- b - Math.sqrt(D)) / (2 * a);
        console.log(x2);
        console.log(x1);
    }
    else if (D == 0) {
        let x1 = - b / (2 * a);
        console.log(x1);
    }
    else {
        console.log("No");
    }
}
//p19QuadraticEquation(1, -12, 36);

/*********************************************
*************/

function p20MultiplicationTablen(n) {
    console.log("<table border=\"1\">");

    let line = "<tr><th>x</th>";
    for (let i = 1; i <= n; i++) {
        line += "<th>" + i + "</th>";
    }
    line += "</tr>\n";

    for (let i = 1; i <= n; i++) {
        line += "<tr><th>" + i + "</th>";
        for (let j = 1; j <= n; j++) {
            line += "<td>" + i * j + "</td>";
        }
        line += "</tr>\n";
    }
    console.log(line);
    console.log("</table>");
}
//p20MultiplicationTablen(5);

/*********************************************
*************/

function p21FigureOf4Squares(n) {
    if (n === 2) {
        console.log("+++");
        return;
    }
    let a = parseInt((n - 3) / 2);
    console.log("+" + "-".repeat(n - 2) + "+" + "-".repeat(n - 2) + "+");

    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < a; index++) {
            console.log("|" + " ".repeat(n - 2) + "|" + " ".repeat(n - 2) + "|");
        }
        console.log("+" + "-".repeat(n - 2) + "+" + "-".repeat(n - 2) + "+");
    }
}
//p21FigureOf4Squares(5);
