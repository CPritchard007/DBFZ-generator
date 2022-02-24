const CHARACTERS = [
    {
        id: 1, 
        name: "Android 16"},
    {
        id: 2,
        name: "Andeoid 17"},
    {
        id: 3,
        name: "Android 18"},
    {
        id: 4,
        name:"Android 21"},
    {
        id: 5,
        name: "Android 21 (lab coat)"},
    {
        id: 6,
        name: "Bardock"},
    {
        id: 7,
        name: "Beerus"},
    {
        id: 8,
        name: "Broly (Super)"},
    {
        id: 9,
        name: "Broly"},
    {
        id: 10 
        ,name: "Buu"},
    {
        id: 11 
        ,name: "Captain Ginyu"},
    {
        id: 12 
        ,name: "Cell"},
    {
        id: 13 
        ,name: "Cooler"},
    {
        id: 14 
        ,name: "Frieza"},
    {
        id: 15 
        ,name: "Zamasu (Fused)"},
    {
        id: 16 
        ,name: "Gohan (Adult)"},
    {
        id: 17 
        ,name: "Goku (GT)"},
    {
        id: 18 
        ,name: "Goku Black"},
    {
        id: 19 
        ,name: "Goku"},
    {
        id: 20 
        ,name: "Gotenks"},
    {
        id: 21 
        ,name: "Hit"},
    {
        id: 22 
        ,name: "Janemba"},
    {
        id: 23 
        ,name: "Jiren"},
    {
        id: 24 
        ,name: "Kefla"},
    {
        id: 25 
        ,name: "Kid Buu"},
    {
        id: 26 
        ,name: "Krillin"},
    {
        id: 27 
        ,name: "Master Roshi"},
    {
        id: 28 
        ,name: "Nappa"},
    {
        id: 29 
        ,name: "Piccolo"},
    {
        id: 30 
        ,name: "Gogeta (SS4)"},
    {
        id: 31 
        ,name: "Super Baby 2"},
    {
        id: 32 
        ,name: "Gogeta (SSGSS)"},
    {
        id: 33 
        ,name: "Goku (SSGSS)"},
    {
        id: 34 
        ,name: "Vegeta (SSGSS)"},
    {
        id: 35 
        ,name: "Vegito (SSGSS)"},
    {
        id: 36 
        ,name: "Goku (Super Saiyan)"},
    {
        id: 37 
        ,name: "Vegeta (Super Saiyan)"},
    {
        id: 38 
        ,name: "Gohan (Teen)"},
    {
        id: 39 
        ,name: "Tien"},
    {
        id: 40 
        ,name: "Trunks"},
    {
        id: 41 
        ,name: "Goku (Ultra Instinct)"},
    {
        id: 42 
        ,name: "Vegeta"},
    {
        id: 43 
        ,name: "Videl"},
    {
        id: 44 
        ,name: "Yamcha"}
]

let player1 = [];
let player2 = [];
const NUMBER_OF_CHARACTERS = 44;

let generateRandomCharacters = (player) => {
    let roster = [];
    for ( i = 0; i < 3; i++ ) {
        let character;
        if (player instanceof Array) {
            while (true) {
                character = Math.ceil(Math.random() * NUMBER_OF_CHARACTERS); 
                if (roster.includes(character)) continue;
                roster.push(character);
                break;
            }
        }
    }
    console.log(roster);
    player =  roster.map(id => CHARACTERS.find(character => character.id === id));
    console.log(player);
    return player;
}

player1 = generateRandomCharacters(player1);
player2 = generateRandomCharacters(player2);

// console.log(player1, player2);

let displayCharacters = (player, side) => {
    const section = [];
    for ( i = 0; i < 3; i++ ) {
        character = {}
        if (!player instanceof Array) return;
        let char = document.createElement('div');
        let image = document.createElement('div');
        let name = document.createElement('h4');
        image.classList.add('image');
        image.style.backgroundImage = `url(@resources/Characters/${player[i].id}.png)`;
        name.classList.add('name');
        name.innerText = player[i].name;
        char.classList.add('character');
        char.appendChild(image);
        char.appendChild(name);
        section.push(char);

        
        console.log(section);
    }

    switch (side) {
        case 'left':
            document.querySelector('.left').append(...section.map(character => character));
        break;    
        case 'right':
            document.querySelector('.right').append(...section.map(character => character));
        break;
    }
}

let refresh = () => {
    document.querySelector('.left').innerHTML = '';
    document.querySelector('.right').innerHTML = '';
    player1 = generateRandomCharacters(player1);
    player2 = generateRandomCharacters(player2);
    displayCharacters(player1, 'left');
    displayCharacters(player2, 'right');
}

refresh();