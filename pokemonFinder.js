// Funciona para Pokemon 1 y 2
function pokemonsStats(tipoDeStat, statId, stat) {
    var ul = document.getElementById(`stats-${statId}`);
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(tipoDeStat));
    li.setAttribute("id", `stat${statId}-${stat}`);
    ul.appendChild(li);
}
function buscarPokemon(pokemonName, myFunction) {

    if (pokemonName.toLowerCase() == "nidoran♀") {
        pokemonName = pokemonName.replace(/[♀]+/g, '-f').toLowerCase();
    }
    else if (pokemonName.toLowerCase() == "nidoran♂") {
        pokemonName = pokemonName.replace(/[♂]+/g, '-m').toLowerCase();
    } else {
        pokemonName = pokemonName.replace(/[♂♀ .]+/g, '-').toLowerCase();
    }
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
        .then((response) => response.json())
        .then((data) => myFunction(data));
}
function compare () {
    console.log({pokemon1Json, pokemon2Json})
    if(pokemon1Json.hp!=0 && pokemon2Json.hp!=0) {
        if (pokemon1Json.hp > pokemon2Json.hp) {
            console.log(name1 + " " + pokemon1Json.hp + " is bigger");
        } else if (pokemon1Json.hp < pokemon2Json.hp) {
            console.log(name2 + " " + pokemon2Json.hp + " is bigger");
        } else { console.log("Son iguales"); }
    }
    if(pokemon1Json.atq!=0 && pokemon2Json.atq!=0) {
        if (pokemon1Json.atq > pokemon2Json.atq) {
            console.log(name1 + " " + pokemon1Json.atq + " is bigger");
        } else if (pokemon1Json.atq < pokemon2Json.atq) {
            console.log(name2 + " " + pokemon2Json.atq + " is bigger");
        } else { console.log("Son iguales"); }
    }
    if(pokemon1Json.sAtq!=0 && pokemon2Json.sAtq!=0) {
        if (pokemon1Json.sAtq > pokemon2Json.sAtq) {
            console.log(name1 + " " + pokemon1Json.sAtq + " is bigger");
        } else if (pokemon1Json.sAtq < pokemon2Json.sAtq) {
            console.log(name2 + " " + pokemon2Json.sAtq + " is bigger");
        } else { console.log("Son iguales"); }
    }
    if(pokemon1Json.def!=0 && pokemon2Json.def!=0) {
        if (pokemon1Json.def > pokemon2Json.def) {
            console.log(name1 + " " + pokemon1Json.def + " is bigger");
        } else if (pokemon1Json.def < pokemon2Json.def) {
            console.log(name2 + " " + pokemon2Json.def + " is bigger");
        } else { console.log("Son iguales"); }
    }
    if(pokemon1Json.sDef!=0 && pokemon2Json.sDef!=0) {
        if (pokemon1Json.sDef > pokemon2Json.sDef) {
            console.log(name1 + " " + pokemon1Json.sDef + " is bigger");
        } else if (pokemon1Json.sDef < pokemon2Json.sDef) {
            console.log(name2 + " " + pokemon2Json.sDef + " is bigger");
        } else { console.log("Son iguales"); }
    }
    if(pokemon1Json.vel!=0 && pokemon2Json.vel!=0) {
        if (pokemon1Json.vel > pokemon2Json.vel) {
            console.log(name1 + " " + pokemon1Json.vel + " is bigger");
        } else if (pokemon1Json.vel < pokemon2Json.vel) {
            console.log(name2 + " " + pokemon2Json.vel + " is bigger");
        } else { console.log("Son iguales"); }
    }
}

$(document).click(function () {
    var isHovered = $('#caja1').filter(function () {
        return $(this).is(":hover");
    });
    var isHovered2 = $('#caja2').filter(function () {
        return $(this).is(":hover");
    });
    let allList = suggBox.querySelectorAll("li");
    let allList2 = suggBox2.querySelectorAll("li");

    if (isHovered.length > 0 && allList.length >= 1) {
        console.log(allList);
        searchWrapper.classList.add('active');
    } else {
        searchWrapper.classList.remove('active');
    }
    if (isHovered2.length > 0 && allList2.length >= 1) {
        console.log(allList);
        searchWrapper2.classList.add('active');
    } else {
        searchWrapper2.classList.remove('active');
    }
})
// Pokemon 1
const searchWrapper = document.getElementById("search-input");
const caja1 = document.getElementById("caja1");
const suggBox = document.getElementById("autocom-box");
const card = document.getElementById("card__inner");
const pokemon1 = document.getElementById("pokemon-1");
let button = document.getElementById("icon");
let img1_default = document.getElementById("pokemon-1-comun");
let img1_shiny = document.getElementById("pokemon-1-shiny");
let name1;
let pokemon1Json = {
    hp: 0,
    atq: 0,
    sAtq: 0,
    def: 0,
    sDef: 0,
    vel: 0,
};
// Sugestion box
caja1.onkeyup = (e) => {
    let userData = e.target.value;
    let emptyArray = [];
    if (userData) {
        emptyArray = pokemons.filter((data) => {
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        })
        emptyArray = emptyArray.map((data) => {
            return data = '<li>' + data + '</li>';
        })

        showSuggestions(emptyArray);

        let allList = suggBox.querySelectorAll("li");

        for (let i = 0; i < allList.length; i++) {
            allList[i].setAttribute("onclick", "select(this)");
        }

        searchWrapper.classList.add('active');
        if (emptyArray.length <= 0) {
            searchWrapper.classList.remove('active');
            while (suggBox.firstChild) {
                suggBox.removeChild(suggBox.firstChild);
            }
        }
    }
    if (caja1.value == '') {
        searchWrapper.classList.remove('active');
        while (suggBox.firstChild) {
            suggBox.removeChild(suggBox.firstChild);
        }
    }
}
function select(element) {
    let selectUserData = element.textContent;
    caja1.value = selectUserData;

    searchWrapper.classList.remove('active');
    pokemon1.classList.add('is-empty');

    let pokemonName = document.getElementById("caja1").value;
    let type1 = document.getElementById("type-pokemon-1-1");
    let type2 = document.getElementById("type-pokemon-1-2");
    let root = document.getElementById("stats-1");

    buscarPokemon(pokemonName, pokemon);
    // Obtener datos de pokemon 1
    function pokemon(dataPokemon) {
        card.classList.remove('is-flipped');
        pokemon1.classList.remove('is-empty');
        img1_default.setAttribute("src", dataPokemon.sprites.front_default);
        img1_shiny.setAttribute("src", dataPokemon.sprites.front_shiny);

        if (dataPokemon.types.length == 2) {
            type1.textContent = dataPokemon.types[0].type.name;
            type2.textContent = dataPokemon.types[1].type.name;
        } else {
            type1.textContent = dataPokemon.types[0].type.name;
            type2.textContent = null;
        }

        pokemonsStats(`Hp: ${dataPokemon.stats[0].base_stat}`, 1, 'hp');
        pokemonsStats(`Atq: ${dataPokemon.stats[1].base_stat}`, 1, 'atq');
        pokemonsStats(`S.Atq: ${dataPokemon.stats[2].base_stat}`, 1, 'sAtq');
        pokemonsStats(`Def: ${dataPokemon.stats[3].base_stat}`, 1, 'def');
        pokemonsStats(`S.Def: ${dataPokemon.stats[4].base_stat}`, 1, 'sDef');
        pokemonsStats(`Spd: ${dataPokemon.stats[5].base_stat}`, 1, 'spd');

        changeBackground(type1);
        changeBackground(type2);

        pokemon1Json.hp = dataPokemon.stats[0].base_stat;
        pokemon1Json.atq = dataPokemon.stats[1].base_stat;
        pokemon1Json.sAtq = dataPokemon.stats[2].base_stat;
        pokemon1Json.def = dataPokemon.stats[3].base_stat;
        pokemon1Json.sDef = dataPokemon.stats[4].base_stat;
        pokemon1Json.vel = dataPokemon.stats[5].base_stat;

        compare();
    }

    name1 = pokemonName;

    while (root.firstChild) {
        root.removeChild(root.firstChild);
    }
    while (suggBox.firstChild) {
        suggBox.removeChild(suggBox.firstChild);
    }
}
function showSuggestions(list) {
    let listData;
    if (!list.length) {
        userValue = caja1.value;
        console.log(userValue);
        console.log(listData);
        listData = '<li>' + userValue + '<li>';
    } else {
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}
// Cambiar entre sprite default y shiny
card.addEventListener("click", () => {
    card.classList.toggle('is-flipped');

    console.log(pokemon1Json);
})
// Modificar la caja de los pokemons con datos
/* button.addEventListener("click", () => {
    pokemon1.classList.add('is-empty');

    let pokemonName = document.getElementById("caja1").value;
    let type1 = document.getElementById("type-pokemon-1-1");
    let type2 = document.getElementById("type-pokemon-1-2");
    let root = document.getElementById("stats-1");

    buscarPokemon(pokemonName, pokemon);
    function pokemon(dataPokemon) {
        img1_default.setAttribute("src", dataPokemon.sprites.front_default);
        img1_shiny.setAttribute("src", dataPokemon.sprites.front_shiny);
        card.classList.remove('is-flipped');
        pokemon1.classList.remove('is-empty');

        if (dataPokemon.types.length == 2) {
            type1.textContent = dataPokemon.types[0].type.name;
            type2.textContent = dataPokemon.types[1].type.name;
        } else {
            type1.textContent = dataPokemon.types[0].type.name;
            type2.textContent = null;
        }

        pokemonsStats(`Hp: ${dataPokemon.stats[0].base_stat}`, 1, 'hp');
        pokemonsStats(`Atq: ${dataPokemon.stats[1].base_stat}`, 1, 'atq');
        pokemonsStats(`S.Atq: ${dataPokemon.stats[2].base_stat}`, 1, 'sAtq');
        pokemonsStats(`Def: ${dataPokemon.stats[3].base_stat}`, 1, 'def');
        pokemonsStats(`S.Def: ${dataPokemon.stats[4].base_stat}`, 1, 'sDef');
        pokemonsStats(`Spd: ${dataPokemon.stats[5].base_stat}`, 1, 'spd');

        changeBackground(type1);
        changeBackground(type2);
    }

    name1 = pokemonName;

    while (root.firstChild) {
        root.removeChild(root.firstChild);
    }
}) */
// --------------------------------------------------------------

// Pokemon 2
const searchWrapper2 = document.getElementById("search-input-2");
const caja2 = document.getElementById("caja2");
const suggBox2 = document.getElementById("autocom-box-2");
const card2 = document.getElementById("card__inner2");
const pokemon2 = document.getElementById("pokemon-2");
let button2 = document.getElementById("icon2");
let img2_default = document.getElementById("pokemon-2-comun");
let img2_shiny = document.getElementById("pokemon-2-shiny");
let name2;
let pokemon2Json = {
    hp: 0,
    atq: 0,
    sAtq: 0,
    def: 0,
    sDef: 0,
    vel: 0,
};

caja2.onkeyup = (e) => {
    let userData = e.target.value;
    let emptyArray = [];
    if (userData) {
        emptyArray = pokemons.filter((data) => {
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        })
        emptyArray = emptyArray.map((data) => {
            return data = '<li>' + data + '</li>';
        })

        showSuggestions2(emptyArray);

        let allList = suggBox2.querySelectorAll("li");

        for (let i = 0; i < allList.length; i++) {
            allList[i].setAttribute("onclick", "select2(this)");
        }

        searchWrapper2.classList.add('active');

        if (emptyArray.length <= 0) {
            searchWrapper2.classList.remove('active');
            while (suggBox2.firstChild) {
                suggBox2.removeChild(suggBox2.firstChild);
            }
        }
    }

    if (caja2.value == '') {
        searchWrapper2.classList.remove('active');
        while (suggBox2.firstChild) {
            suggBox2.removeChild(suggBox2.firstChild);
        }
    }
}

function select2(element) {
    let selectUserData = element.textContent;
    caja2.value = selectUserData;

    searchWrapper2.classList.remove('active');
    card2.classList.remove('is-empty');
    pokemon2.classList.add('is-empty');

    let pokemonName = document.getElementById("caja2").value;
    let type1 = document.getElementById("type-pokemon-2-1");
    let type2 = document.getElementById("type-pokemon-2-2");
    let root = document.getElementById("stats-2");
    // Usar la primera funcion del script para rellenar los datos del pokemon
    buscarPokemon(pokemonName, pokemon);
    function pokemon(dataPokemon) {
        card2.classList.remove('is-flipped');
        pokemon2.classList.remove('is-empty');
        img2_default.setAttribute("src", dataPokemon.sprites.front_default);
        img2_shiny.setAttribute("src", dataPokemon.sprites.front_shiny);

        if (dataPokemon.types.length == 2) {
            type1.textContent = dataPokemon.types[0].type.name;
            type2.textContent = dataPokemon.types[1].type.name;
        } else {
            type1.textContent = dataPokemon.types[0].type.name;
            type2.textContent = null;
        }

        pokemonsStats(`Hp: ${dataPokemon.stats[0].base_stat}`, 2, "hp");
        pokemonsStats(`Atq: ${dataPokemon.stats[1].base_stat}`, 2, "atq");
        pokemonsStats(`S.Atq: ${dataPokemon.stats[2].base_stat}`, 2, "sAtq");
        pokemonsStats(`Def: ${dataPokemon.stats[3].base_stat}`, 2, "def");
        pokemonsStats(`S.Def: ${dataPokemon.stats[4].base_stat}`, 2, "sDef");
        pokemonsStats(`Spd: ${dataPokemon.stats[5].base_stat}`, 2, "spd");

        changeBackground(type1);
        changeBackground(type2);

        pokemon2Json.hp = dataPokemon.stats[0].base_stat;
        pokemon2Json.atq = dataPokemon.stats[1].base_stat;
        pokemon2Json.sAtq = dataPokemon.stats[2].base_stat;
        pokemon2Json.def = dataPokemon.stats[3].base_stat;
        pokemon2Json.sDef = dataPokemon.stats[4].base_stat;
        pokemon2Json.vel = dataPokemon.stats[5].base_stat;

        compare();
    }

    name2 = pokemonName;

    while (root.firstChild) {
        root.removeChild(root.firstChild);
    }
    while (suggBox2.firstChild) {
        suggBox2.removeChild(suggBox2.firstChild);
    }
}

function showSuggestions2(list) {
    let listData;
    if (!list.length) {
        userValue = caja2.value;
        listData = '<li>' + userValue + '<li>';
    } else {
        listData = list.join('');
    }
    suggBox2.innerHTML = listData;
}
// Cambiar entre sprite default y shiny
card2.addEventListener("click", () => {
    card2.classList.toggle('is-flipped');
    console.log(pokemon2Json);

})
// Modificar la caja de los pokemons con datos
/* button2.addEventListener("click", () => {
    card2.classList.remove('is-empty');
    pokemon2.classList.add('is-empty');

    let pokemonName = document.getElementById("caja2").value;
    let type1 = document.getElementById("type-pokemon-2-1");
    let type2 = document.getElementById("type-pokemon-2-2");
    let root = document.getElementById("stats-2");
    // Usar la primera funcion del script para rellenar los datos del pokemon
    buscarPokemon(pokemonName, pokemon);
    function pokemon(dataPokemon) {
        card2.classList.remove('is-flipped');
        pokemon2.classList.remove('is-empty');
        img2_default.setAttribute("src", dataPokemon.sprites.front_default);
        img2_shiny.setAttribute("src", dataPokemon.sprites.front_shiny);

        if (dataPokemon.types.length == 2) {
            type1.textContent = dataPokemon.types[0].type.name;
            type2.textContent = dataPokemon.types[1].type.name;
        } else {
            type1.textContent = dataPokemon.types[0].type.name;
            type2.textContent = null;
        }

        pokemonsStats(`Hp: ${dataPokemon.stats[0].base_stat}`, 2, "hp");
        pokemonsStats(`Atq: ${dataPokemon.stats[1].base_stat}`, 2, "atq");
        pokemonsStats(`S.Atq: ${dataPokemon.stats[2].base_stat}`, 2, "sAtq");
        pokemonsStats(`Def: ${dataPokemon.stats[3].base_stat}`, 2, "def");
        pokemonsStats(`S.Def: ${dataPokemon.stats[4].base_stat}`, 2, "sDef");
        pokemonsStats(`Spd: ${dataPokemon.stats[5].base_stat}`, 2, "spd");

        changeBackground(type1);
        changeBackground(type2);
    }

    name2 = pokemonName;

    while (root.firstChild) {
        root.removeChild(root.firstChild);
    }
}) */