function p04TravelTime(input) {
    let map = new Map();

    input.forEach(element => {
        let splitted = element.split(' > ');
        let country = splitted[0];
        let town = splitted[1][0].toUpperCase() + splitted[1].slice(1);
        let cost = Number(splitted[2]);

        if (map.has(country) === false) {
            map.set(country, new Map());
        }
        if (map.get(country).has(town) === false) {
            map.get(country).set(town, Number.POSITIVE_INFINITY);
        } 

        if (map.get(country).get(town) > cost) {
            map.get(country).set(town, cost);
        }       
    });

    let sortedMap = Array.from(map.keys()).sort((a, b) => {
        return a.toLowerCase().localeCompare(b.toLowerCase())
    });

    // sortedMap.sort(function (a, b) {
    //     let A = a.toLowerCase();
    //     let B = b.toLowerCase();
    //     if (A < B) //sort string ascending
    //         return -1;
    //     if (A > B)
    //         return 1;
    //     return 0; //default return value (no sorting)
    // });

    for (let key of sortedMap) {
        let result = key + ' -> ';

        let sortedInnerMap = Array.from(map.get(key).keys())
            .sort((a, b) => map.get(key).get(a) - map.get(key).get(b));

        for (let town of sortedInnerMap) {
            result += town + ' -> ' + map.get(key).get(town) + ' ';
        }

        console.log(result.trim());
    }
}
// p04TravelTime(["Bulgaria > Sofia > 500",
//     "Bulgaria > Sopot > 800",
//     "France > Paris > 2000",
//     "Albania > Tirana > 1000",
//     "Bulgaria > Sofia > 200"]);

// p04TravelTime(["Bulgaria > Sofia > 25000",
//     "aaa > Sofia > 1",
//     "aa > Orgrimar > 0",
//     "Albania > Tirana > 25000",
//     "zz > Aarna > 25010",
//     "Bulgaria > Lukovit > 10"]);
