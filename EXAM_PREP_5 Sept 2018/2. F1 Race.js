function p02F1Race(input) {
    let pilots = input.shift().split(' ');
    input.forEach(data => {
        let [command, name] = data.split(' ');

        switch (command) {
            case 'Join':
                if (pilots.includes(name) == false) {
                    pilots.push(name);
                }
                break;
            case 'Overtake':
                if (pilots.includes(name)) {
                    let index = pilots.indexOf(name);
                    if (index !== 0) {
                        pilots.splice(index, 1);
                        pilots.splice(index - 1, 0, name);
                    }
                }
                break;
            case 'Pit':
                if (pilots.includes(name)) {
                    let index = pilots.indexOf(name);
                    if (index !== pilots.length - 1) {
                        pilots.splice(index, 1);
                        pilots.splice(index + 1, 0, name);
                    }
                }          
                break;
            case 'Crash':
                if (pilots.includes(name)) {
                    let index = pilots.indexOf(name);
                    pilots.splice(index, 1);
                }
                break;
        }
    });

    console.log(pilots.join(' ~ '));
}
// p02F1Race(["Vetel Hamilton Slavi",
//     "Pit Hamilton",
//     "Overtake Vetel",
//     "Crash Slavi"]);

// p02F1Race(["Vetel Hamilton Raikonnen Botas Slavi",
//     "Pit Hamilton",
//     "Overtake LeClerc",
//     "Join Ricardo",
//     "Crash Botas",
//     "Overtake Ricardo",
//     "Overtake Ricardo",
//     "Overtake Ricardo",
//     "Crash Slavi"]);
