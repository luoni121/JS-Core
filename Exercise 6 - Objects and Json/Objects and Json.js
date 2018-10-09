function p01HeroicInventory(input) {
    let obj = input.map(e => {
        let tokens = e.split(' / ');

        let itemsArr = [];
        if (tokens.length > 2) {
            itemsArr = tokens.pop().split(', ');
        }

        return {
            name: tokens.shift(),
            level: Number(tokens.shift()),
            items: itemsArr
        }
    });
    console.log(JSON.stringify(obj));
}
// p01HeroicInventory(['Isacc / 25 / Apple, GravityGun',
//     'Derek / 12 / BarrelVest, DestructionSword',
//     'Hes / 1 / Desolator, Sentinel, Antara']);

/*******************************************************************
***************************/

function p02JSONtable(input) {
    let html = '<table>\n';

    for(let row of input){
        let item = JSON.parse(row)
        html += '  <tr>\n'
        html += '     <td>' + item.name + '</td>\n'
        html += '     <td>' + item.position + '</td>\n'
        html += '     <td>' + item.salary + '</td>\n'
        html += '  <tr>\n'
    }
    html += '</table>'
    
    console.log(html);
}
// p02JSONtable(['{"name":"Pesho","position":"Promenliva","salary":100000}',
//     '{"name":"Teo","position":"Lecturer","salary":1000}',
//     '{"name":"Georgi","position":"Lecturer","salary":1000}']);

/*******************************************************************
***************************/

function p03CappyJuice(input) {
    let juices = input.map(e => {
        let temp = e.split(' => ');

        return {
            juice: temp[0],
            quantity: Number(temp[1])
        }
    });

    let map = new Map();
    juices.forEach(item => {
        if (map.has(item.juice) == false) {
            map.set(item.juice, 0);
        }
        let totalQuantity = map.get(item.juice) + item.quantity;

        if (map.get(item.juice) < 1000) {
            map.delete(item.juice);
            map.set(item.juice, 0);
        }
        map.set(item.juice, totalQuantity);
    });

    for (var [key, value] of map.entries()) {
        let bottles = Math.floor(value / 1000);
        console.log(key + ' => ' + bottles);
    }
}
// p03CappyJuice(['Kiwi => 234',
//     'Pear => 2345',
//     'Watermelon => 3456',
//     'Kiwi => 4567',
//     'Pear => 5678',
//     'Watermelon => 6789']);

/*******************************************************************
***************************/

function p04StoreCatalogue(input) {

    let products = input.map(element => {
        let temp = element.split(' : ');
        return {
            product: temp[0],
            price: Number(temp[1])
        }
    });

    let set = new Set();

    products.forEach(item => {
        let letter = item.product[0];
        set.add(letter);
    });

    Array.from(set).sort().forEach(letter => {
        console.log(letter);

        for (obj of products.sort((a, b) => compare(a.product, b.product))) {
            if (letter === obj.product[0]) {
                console.log('  ' + obj.product + ': ' + obj.price);
            }
        }
    });

    function compare(a, b) {

        let comparison = 0;
        if (a > b) {
            comparison = 1;
        } else if (a < b) {
            comparison = -1;
        }
        return comparison;
    }
}
// p04StoreCatalogue(['Appricot : 20.4',
//     'Fridge : 1500',
//     'TV : 1499',
//     'Deodorant : 10',
//     'Boiler : 300',
//     'Apple : 1.25',
//     'Anti-Bug Spray : 15',
//     'T-Shirt : 10']);

/*******************************************************************
***************************/

function p05AutoEngineering(input) {
    let map = new Map();

    input.forEach(element => {
        let splitted = element.split(' | ');
        let brand = splitted[0];
        let model = splitted[1];
        let producedNumber = Number(splitted[2]);

        if (map.has(brand) === false) {
            map.set(brand, new Map());
        }

        if (map.get(brand).has(model) === false) {
            map.get(brand).set(model, 0);
        }
        let currentProducedNumber = map.get(brand).get(model);
        map.get(brand).set(model, currentProducedNumber + producedNumber);
    });

    for (var [key, value] of map.entries()) {
        console.log(key);

        for (var [key, value1] of value) {
            console.log('###%s -> %s', key, value1);
        }
    }
}
// p05AutoEngineering(['Audi | Q7 | 1000',
//     'Audi | Q6 | 100',
//     'BMW | X5 | 1000',
//     'BMW | X6 | 100',
//     'Citroen | C4 | 123',
//     'Volga | GAZ-24 | 1000000',
//     'Lada | Niva | 1000000',
//     'Lada | Jigula | 1000000',
//     'Citroen | C4 | 22',
//     'Citroen | C5 | 10']);

/*******************************************************************
***************************/

function p06SystemComponents(input) {
    let map = new Map();

    input.forEach(element => {
        let [system, component, subComponent] = element.split(' | ');

        if (!map.has(system)) {
            map.set(system, new Map());
        }

        if (!map.get(system).has(component)) {
            map.get(system).set(component, []);
        }
        map.get(system).get(component).push(subComponent);
    });

    let sortedSystems = Array.from(map.keys())
        .sort((a, b) => map.get(b).size - map.get(a).size);

    for (let key of sortedSystems) {
        console.log(key);

        let sortedComponents = Array.from(map.get(key).keys())
            .sort((a, b) => map.get(key).get(b).length - map.get(key).get(a).length);

        for (let item of sortedComponents) {
            console.log('|||%s', item);

            for (let subComp of map.get(key).get(item)) {
                console.log('||||||%s', subComp);
            }
        }
    }
}
// p06SystemComponents(['SULS | Main Site | Home Page',
//     'SULS | Main Site | Login Page',
//     'SULS | Main Site | Register Page',
//     'SULS | Judge Site | Login Page',
//     'SULS | Judge Site | Submittion Page',
//     'Lambda | CoreA | A23',
//     'SULS | Digital Site | Login Page',
//     'Lambda | CoreB | B24',
//     'Lambda | CoreA | A24',
//     'Lambda | CoreA | A25',
//     'Lambda | CoreC | C4',
//     'Indice | Session | Default Storage',
//     'Indice | Session | Default Security']);

/*******************************************************************
***************************/

function p06SystemComponents(input) {
    let set = new Set();

    input.forEach(element => set.add(element));

    let sortedArr = Array.from(set)
        .sort((a, b) => a.length - b.length || a.localeCompare(b));

    console.log(sortedArr.join('\n'));
}
// p06SystemComponents(['Denise',
//     'Ignatius',
//     'Iris',
//     'Isacc',
//     'Indie',
//     'Dean',
//     'Donatello',
//     'Enfuego',
//     'Benjamin',
//     'Biser',
//     'Bounty',
//     'Renard',
//     'Rot']);

/*******************************************************************
***************************/





