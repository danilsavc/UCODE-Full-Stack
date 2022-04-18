function guestList() {
    let list = new WeakMap();

    let guest1 = {}, guest2 = {}, guest3 = {}, guest4 = {}, guest5 = {};

    list.set(guest1, 'Dora Dura');
    list.set(guest2, 'Dora');
    list.set(guest3, 'Dura');
    list.set(guest4, 'Super Dora');
    list.set(guest5, 'Super Dura');

    console.log('Dora in the list?\n' + list.has(guest2));
    console.log(list);
    list.delete(guest3);
    console.log('Dura was deleted');
    console.log(list);
}

function menuList() {
    let list = new Map();

    list.set('\nMenu\nBurger: ', 'Price: 249$');
    list.set('Pizza: ', 'Price:219$');
    list.set('Pants of Dora: ', 'Price: 999$');
    list.set('Milk of Dora: ', 'Price: 1999$');
    list.set('Bread: ', 'Price: 9$');
    for (let [key, value] of list) {
        console.log(key + value);
    }
}

function bankVault() {
    let list = new WeakSet();

    let name1 = {name: 'Dollar'};
    let name2 = {name: 'UAH'};
    let name3 = {name: 'Zl'};
    let name4 = {name: 'Ru'};
    let name5 = {name: 'Yewro'};

    list.add(name1);
    list.add(name2);
    list.add(name3);
    list.add(name4);
    list.add(name5);

    console.log(`\nVauluet:\n${name1.name}\n${name2.name}\n${name3.name}\n${name4.name}\n${name5.name}\n`)
}

function coinCollection() {
    let list = new Set();

    list.add('20 Coins');
    list.add('200 Coins');
    list.add('2000 Coins');
    list.add('20000 Coins');
    list.add('200000 Coins');

    

    for (let item of list) {
        console.log(item);
    }
    list.delete('20 Coins');
    
    for (let item of list) {
        console.log(item);
    }
    console.log(list.size);
}

guestList();
menuList();
bankVault();
coinCollection();