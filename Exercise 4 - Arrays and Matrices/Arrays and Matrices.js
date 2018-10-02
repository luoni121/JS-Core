function p01PrintArray(input) {
    let delimiter = input[input.length-1];
    // let delimiter = input.pop();
    let result = input.join(delimiter);
    console.log(result.slice(0,-2));
}
//(['One', 'Two', 'Three', 'Four', 'Five', '-']);

/*******************************
********************************************/

function p02PrintEveryNElement(input) {
    let step = Number(input.pop());

    input.filter((e, index) => index % step === 0).forEach(e => {
        console.log(e);
    });

    // for (let i = 0; i < input.length; i += step) {
    //     console.log(input[i]);
    // }
}
//p02PrintEveryNElement(['5', '20', '31', '4', '20', '2']);

/*******************************
********************************************/

function p03AddAndRemoveNElements(input) {
    let arr = [];
    let i = 1;

    input.forEach(element => {
        if (element === 'add') {
            arr.push(i);
        }
        if (element === 'remove') {
            arr.pop();
        }
        i++;
    });

    if (typeof arr != "undefined"
        && arr != null
        && arr.length != null
        && arr.length > 0) {

        console.log(arr.join('\n'));
    } else {
        console.log('Empty');
    }
}
//p03AddAndRemoveNElements(['add', 'add', 'remove', 'add', 'add']);

/*******************************
********************************************/

function p04RotateArray(input) {
    let rounds = Number(input.pop());

    for (let i = 0; i < rounds % input.length; i++) {
        let last = input.pop();
        input.unshift(last);
    }
    console.log(input.join(' '));
}
//p04RotateArray(['1', '2', '3', '4', '2']);
//p04RotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);

/*******************************
********************************************/

function p05ExtractSubsequence(input) {
    let biggest = input[0];
    let arr = input.filter(element => {
        if (element >= biggest) {
            biggest = element;
            return true;
        }
        return false;
    });
    console.log(arr.join('\n'));
}
//p05ExtractSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24, 24]);

/*******************************
********************************************/

function p06SortArrayBy2Criteria(input) {

    let criteria = (e1, e2) => {
        if (e1.length != e2.length) {
            return e1.length - e2.length;
        } else {
            return e1.toUpperCase() > e2.toUpperCase();// ignore upper and lowercase
        }
    }

    console.log(input.sort(criteria).join('\n'));
}
// p06SortArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
// p06SortArrayBy2Criteria(['test', 'Deny', 'omen', 'Default']);

/*******************************
********************************************/
















