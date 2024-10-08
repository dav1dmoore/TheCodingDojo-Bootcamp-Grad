var monster = {
    id: 1,
    name: "Bulbasaur",
    types: ["poison", "grass"]
};

// Access the name by: monster.name
// Access the second type by: monster.types[1]

console.log(monster.name)
console.log(monster.types[1])

var pokemon = [
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
];

for(var i=0; i<pokemon.length; i++) {
    if(pokemon[i].id > 99) {
        console.log(pokemon[i].name);
    }
}

for(var i=0; i<pokemon.length; i++) {
    if(pokemon[i].types.length > 1) {
        console.log(pokemon[i].name);
    }
}

for(var i=0; i<pokemon.length; i++) {
    if(pokemon[i].types.length > 1) {
        console.log(pokemon[i].name);
    }
}

console.log('Poison list BELOW')
for(let each of pokemon){
for(var i=0; i < each.types.length; i++){
    if(each.types[i] == 'poison') {
        console.log(each.name);
    }
}
}

// Bonus Challenge: console.log the reverse of the names of the pokémon whose only type is "poison"
console.log('bonus')
for(let each of pokemon){
    if(each.types.length == 1 && each.types[0] == 'poison'){
        var name = each.name.toLowerCase();
        var newName = name.reverse();
        console.log(newName)
    }
}