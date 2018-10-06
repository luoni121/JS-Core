function p01SplitStringWithDelimiter(text, delimiter) {
    let arr = text.split(delimiter);

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
//p01SplitStringWithDelimiter('One-Two-Three-Four-Five', '-');

/*******************************************************************
***************************/

function p02RepeatStringNTimes(string, n) {
    console.log(string.repeat(n));
}
//p02RepeatStringNTimes('magic is real', '3');

/*******************************************************************
***************************/

function p03StringStartsWith(text, start) {

    let check = () => {
        let l = start.length;

        if (text.length >= l) {
            if (text.substr(0, l) === start) {
                return true;
            }
        }
        return false;
    }

    console.log(check());
}
// p03StringStartsWith('How have you been?', 'how');

/*******************************************************************
***************************/

function p04StringEndsWith(text, end) {

    let check = () => {
        let l = end.length;

        if (text.length >= l) {
            if (text.slice(-l) === end) {
                return true;
            }
        }
        return false;
    }

    console.log(check());
}
// p04StringEndsWith('This sentence ends with fun?', 'fun?');

/*******************************************************************
***************************/

function p05CapitalizeTheWords(text) {
    let textArr = text.toLowerCase().split(' ');

    let result = textArr.map(e => {
        let start = e.substr(0, 1).toUpperCase();
        return e = start + e.substr(1);
    });

    console.log(result.join(' ').trim());
}
// p05CapitalizeTheWords('Was that Easy? tRY thIs onE for SiZe!');

/*******************************************************************
***************************/

function p06CaptureTheNumbers(input) {
    let regex = /[0-9]+/g;
    let text = '';
    let numbers = [];

    for (let i = 0; i < input.length; i++) {
        text += input[i];
    }

    let match = regex.exec(text);
    while (match) {
        numbers.push(match[0]);
        match = regex.exec(text);
    }

    console.log(numbers.join(' '));
}
// p06CaptureTheNumbers(['The300', 'What is that?',
//     'I think it’s the 3rd movie.', 'Lets watch it at 22:45']);

/*******************************************************************
***************************/

function p07FindVariableNamesInSentances(input) {
    let regex = /\b_[0-9a-zA-Z]+\b/g;
    let matched = input.match(regex);
    let result = matched.map(e => {
        return e.substr(1);
    });

    console.log(result.join(','));
}
// p07FindVariableNamesInSentances(
//     '__invalidVariable _evenMoreInvalidVariable_ _validVariable');

/*******************************************************************
***************************/

function p08FindOccurrencesOFWord(text, word) {
    let regex = new RegExp(`\\b${word}\\b`, `gi`);
    let matched = text.match(regex);

    if (matched !== null) {
        console.log(matched.length);
    } else {
        console.log(0);
    }
}
// p08FindOccurrencesOFWord('The waterfall was so high, that the child couldn’t see its peak.', 'the');

/*******************************************************************
***************************/

function p09ExtractTheLinks(input) {
    let text = input.join(' ');
    let regex = /www\.[0-9a-zA-Z-]+(\.[a-z]+)+/g;
    let matched = text.match(regex);

    if (matched !== null) {
        matched.forEach(e=>{
            console.log(e);
        });
    }
}

// p09ExtractTheLinks(['Join WebStars now for free, at www.web-stars.com',
//     'You can also support our partners:',
//     'Internet - www.internet.com',
//     'WebSpiders - www.webspiders101.com',
//     'Sentinel - www.sentinel.-ko']);








