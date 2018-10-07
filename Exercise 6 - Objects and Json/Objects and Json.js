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






