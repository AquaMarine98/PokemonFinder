// Funciona para Pokemon 1 y 2
function pokemonsStats(tipoDeStat, statId, stat) {
    var ul = document.getElementById(`stats-${statId}`);
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(tipoDeStat));
    li.setAttribute("id", `stat${statId}-${stat}`);
    ul.appendChild(li);
}
function buscarPokemon(pokemonName, myFunction) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.replace(/[\s.]+/g, '-').toLowerCase()}/`)
        .then((response) => response.json())
        .then((data) => { myFunction(data) });
}
// Pokemon 1
const searchWrapper = document.getElementById("search-input");
const caja1 = document.getElementById("caja1");
const suggBox = document.getElementById("autocom-box");

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
        searchWrapper.classList.add('active');
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            allList[i].setAttribute("onclick", "select(this)");
        }
    } else {
        searchWrapper.classList.remove('active');
    }
}

function select(element) {
    let selectUserData = element.textContent;
    caja1.value = selectUserData;

    searchWrapper.classList.remove('active');
}

function showSuggestions(list) {
    let listData;
    if (!list.length) {
        userValue = caja1.value;
        listData = '<li>' + userValue + '<li>';
    } else {
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}

let button = document.getElementById("icon");
let img1 = document.getElementById("img-1");
let name1;
let img1_default, img1_shiny;
// Cambiar entre sprite default y shiny
img1.addEventListener("click", () => {

    if (img1.src == img1_default) {
        img1.setAttribute("src", img1_shiny);
    } else {
        img1.setAttribute("src", img1_default);
    }
})
// Modificar la caja de los pokemons con datos
button.addEventListener("click", () => {
    let pokemonName = document.getElementById("caja1").value;
    let type1 = document.getElementById("type-pokemon-1-1");
    let type2 = document.getElementById("type-pokemon-1-2");
    let root = document.getElementById("stats-1");

    buscarPokemon(pokemonName, pokemon);
    function pokemon(dataPokemon) {
        img1.setAttribute("src", dataPokemon.sprites.front_default);

        img1_default = dataPokemon.sprites.front_default;
        img1_shiny = dataPokemon.sprites.front_shiny;

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
})

// --------------------------------------------------------------

// Pokemon 2
const searchWrapper2 = document.getElementById("search-input-2");
const caja2 = document.getElementById("caja2");
const suggBox2 = document.getElementById("autocom-box-2");

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
        searchWrapper2.classList.add('active');
        showSuggestions2(emptyArray);
        let allList = suggBox2.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            allList[i].setAttribute("onclick", "select2(this)");
        }
    } else {
        searchWrapper2.classList.remove('active');
    }
}

function select2(element) {
    let selectUserData = element.textContent;
    caja2.value = selectUserData;

    searchWrapper2.classList.remove('active');
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

let button2 = document.getElementById("icon2");
let img2 = document.getElementById("img-2");
let img2_default, img2_shiny;
let name2;
// Cambiar entre sprite default y shiny
img2.addEventListener("click", () => {

    if (img2.src == img2_default) {
        img2.setAttribute("src", img2_shiny);
    } else {
        img2.setAttribute("src", img2_default);
    }

})
// Modificar la caja de los pokemons con datos
button2.addEventListener("click", () => {
    let pokemonName = document.getElementById("caja2").value;
    let type1 = document.getElementById("type-pokemon-2-1");
    let type2 = document.getElementById("type-pokemon-2-2");
    let root = document.getElementById("stats-2");
    // Usar la primera funcion del script para rellenar los datos del pokemon
    buscarPokemon(pokemonName, pokemon);
    function pokemon(dataPokemon) {
        img2.setAttribute("src", dataPokemon.sprites.front_default);

        img2_default = dataPokemon.sprites.front_default;
        img2_shiny = dataPokemon.sprites.front_shiny;

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
})