function p02TravelInvestigation(input) {
    let delimiter = input[1];
    let companies = input[0].split(delimiter);
    let sentances = input.map(e => e.toLowerCase()).slice(2, input.length + 1);

    let validArr = [];
    let invalidArr = [];
  
    for (let sentance of sentances) {
        let isValid = true;
        companies.forEach(company => {
            if (sentance.includes(company) === false) {
                isValid = false;
            }
        });
        if (isValid) {
            validArr.push(sentance);
        } else {
            invalidArr.push(sentance);
        }
    }

    if (validArr.length > 0) {
        console.log('ValidSentences');
        let num = 1;
        for (let i = 0; i < validArr.length; i++) {
            console.log(num++ + '. ' + validArr[i]);
        }
    }
    if (validArr.length > 0 && invalidArr.length > 0) {
        console.log('='.repeat(30));
    }

    if (invalidArr.length > 0) {
        console.log('InvalidSentences');
        let num = 1;
        for (let i = 0; i < invalidArr.length; i++) {
            console.log(num++ + '. ' + invalidArr[i]);
        }
    }
}

// p02TravelInvestigation(["bulgariatour@, minkatrans@, koftipochivkaltd",
//     "@,",
//     "Mincho e KoftiPochivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
//     "dqdo mraz some text but is KoftiPochivkaLTD MinkaTrans",
//     "someone continues as no "]);
// p02TravelInvestigation(["bulgariatour@, minkatrans@, koftipochivkaltd",
//     "@,",
//     "Mincho  e KoftiPockivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
//     "We will koftipochivkaLTD travel e expenses no MinkaTrans mu e BulgariaTour",
//     "dqdo BuLGariaTOUR mraz some text but is KoftiPochivkaLTD minkaTRANS"]
// );
