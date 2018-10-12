function p01kompot(input) {
    let cherryGrams = 0;
    let peachGrams = 0;
    let plumKGrams = 0;
    let rakiyaFruitsGrams = 0;

    input.forEach(element => {
        let [fruit, kg] = element.split(/\s+/gm);

        switch (fruit) {
            case 'cherry': cherryGrams += (Number(kg)) * 1000;
                break;
            case 'peach': peachGrams += (Number(kg)) * 1000;
                break;
            case 'plum': plumKGrams += (Number(kg)) * 1000;
                break;
            default: rakiyaFruitsGrams += (Number(kg)) * 1000;
        }
    });

    let cherryKompots = Math.floor(cherryGrams / (25 * 9));
    let peachKompots = Math.floor(peachGrams / (2.5 * 140));
    let plumKompots = Math.floor(plumKGrams / (10 * 20));

    let rakiyaLiters = rakiyaFruitsGrams / 5000;

    console.log('Cherry kompots: %s', cherryKompots);
    console.log('Peach kompots: %s', peachKompots);
    console.log('Plum kompots: %s', plumKompots);
    console.log('Rakiya liters: %s', rakiyaLiters.toFixed(2));
}
// p01kompot(['cherry 1.2',
//     'peach 2.2',
//     'plum 5.2',
//     'peach 0.1',
//     'cherry 0.2',
//     'cherry 5.0',
//     'plum 10',
//     'cherry 20.0',
//     'papaya 20']);

// p01kompot(['apple 6',
//     'peach 25.158',
//     'strawberry 0.200',
//     'peach 0.1',
//     'banana 1.55',
//     'cherry 20.5',
//     'banana 16.8',
//     'grapes 205.65'
//     , 'watermelon 20.54']);  
