function p01PrintArray(input) {
    let delimiter = input[input.length-1];
    // let delimiter = input.pop();
    let result = input.join(delimiter);
    console.log(result.slice(0,-2));
}
//(['One', 'Two', 'Three', 'Four', 'Five', '-']);

/*******************************
********************************************/

function p02PrintEveryNElemwnt(input) {
    let step = Number(input.pop());

    input.filter((e, index) => index % step === 0).forEach(e => {
        console.log(e);
    });

    // for (let i = 0; i < input.length; i += step) {
    //     console.log(input[i]);
    // }
}
//p02PrintEveryNElemwnt(['5', '20', '31', '4', '20', '2']);

/*******************************
********************************************/

