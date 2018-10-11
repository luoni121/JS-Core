function p01TravelPlans(input) {
    let sum = 0;
    let SpecialcustoerCount = 1;
    let ClumsycustoerCount = 1;

    //CREATE ARRAY OF INPUT AS OBJ[job, money]
    let arr = input.map(element => {
        let splitted = element.split(' : ');
        return {
            job: splitted[0],
            money: Number(splitted[1])
        }
    });

    //CHECK IF JOB == SPECIAL, AVERAGE OR CLUMSY
    function chekSkill(string) {
        switch (string) {
            case 'Programming':
            case 'Hardware maintenance':
            case 'Cooking':
            case 'Translating':
            case 'Designing':
                return 'special';
            case 'Driving':
            case 'Managing':
            case 'Fishing':
            case 'Gardening':
                return 'average';
            case 'Singing':
            case 'Accounting':
            case 'Teaching':
            case 'Exam-Making':
            case 'Acting':
            case 'Writing':
            case 'Lecturing':
            case 'Modeling':
            case 'Nursing':
                return 'clumsy';
            default:
                return null;
        }
    }

    //ITERATE ARRAY OF OBJ, CALCULATE TOTAL SUM
    for (let entry of arr) {

        if (chekSkill(entry.job) === 'special' && entry.money >= 200) {
            sum += 0.8 * entry.money;

            if (SpecialcustoerCount % 2 === 0) {
                sum += 200;
            }
            SpecialcustoerCount++;
        }

        else if (chekSkill(entry.job) === 'average') {
            sum += entry.money;
        }

        else if (chekSkill(entry.job) === 'clumsy') {
            if (ClumsycustoerCount % 2 === 0) {
                sum += entry.money * 0.95;
            }
            else if (ClumsycustoerCount % 3 === 0) {
                sum += entry.money * 0.90;
            }
            else {
                sum += entry.money;
            }
            ClumsycustoerCount++;
        }
    }

    //PRINT RESULT
    console.log('Final sum: %s', sum.toFixed(2));

    if (sum >= 1000) {
        console.log('Mariyka earned %s gold more.', (sum - 1000).toFixed(2));
    } else {
        console.log('Mariyka need to earn %s gold more to continue in the next task.', (1000 - sum).toFixed(2));
    }
}
// p01TravelPlans(["Programming : 500", "Driving : 243", "Singing : 100", "Cooking : 199"]);
// p01TravelPlans(["Programming : 500", "Driving : 243.55", "Acting : 200", "Singing : 100", "Cooking : 199",
//     "Hardware maintenance : 800", "Gardening : 700", "Programming : 500"]);
