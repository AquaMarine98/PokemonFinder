// Funciona para Pokemon 1 y 2
let numero = 0;
function pokemonStats(id, stat) {
    let statUl = document.getElementById(`stats-${id}`);
    let allList = statUl.querySelectorAll("li");
    let stats = ['Hp: ', 'Atq: ', 'sAtq: ', 'Def: ', 'sDef: ', 'Vel: '];

    for (let i = 0; i < allList.length; i++) {
        allList[i].textContent = stats[i] + stat[i].base_stat;
    }
}
function buscarPokemon(pokemonName, myFunction, otherFunction = null) {

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
        .then((data) => {
            if (otherFunction != null) {
                otherFunction();
            }
            myFunction(data)
        });
}
function compare() {
    let stats1 = document.getElementById("stats-1");
    let imgStats1 = stats1.querySelectorAll('img');

    let stats2 = document.getElementById("stats-2");
    let imgStats2 = stats2.querySelectorAll('img')

    if (pokemon1Json.hp != 0 && pokemon2Json.hp != 0) {
        if (pokemon1Json.hp > pokemon2Json.hp) {
            console.log(name1 + " " + pokemon1Json.hp + " is bigger");
            imgStats1[0].src = './Imagenes/FlechaArriba.png';
            imgStats2[0].src = './Imagenes/FlechaAbajo.png';
        } else if (pokemon1Json.hp < pokemon2Json.hp) {
            console.log(name2 + " " + pokemon2Json.hp + " is bigger");
            imgStats1[0].src = './Imagenes/FlechaAbajo.png';
            imgStats2[0].src = './Imagenes/FlechaArriba.png';
        } else {
            console.log("Son iguales");
            imgStats1[0].src = './Imagenes/FlechaIgual.png';
            imgStats2[0].src = './Imagenes/FlechaIgual.png';
        }
    }
    if (pokemon1Json.atq != 0 && pokemon2Json.atq != 0) {
        if (pokemon1Json.atq > pokemon2Json.atq) {
            console.log(name1 + " " + pokemon1Json.atq + " is bigger");
            imgStats1[1].src = './Imagenes/FlechaArriba.png';
            imgStats2[1].src = './Imagenes/FlechaAbajo.png';
        } else if (pokemon1Json.atq < pokemon2Json.atq) {
            console.log(name2 + " " + pokemon2Json.atq + " is bigger");
            imgStats1[1].src = './Imagenes/FlechaAbajo.png';
            imgStats2[1].src = './Imagenes/FlechaArriba.png';
        } else {
            console.log("Son iguales");
            imgStats1[1].src = './Imagenes/FlechaIgual.png';
            imgStats2[1].src = './Imagenes/FlechaIgual.png';
        }
    }
    if (pokemon1Json.sAtq != 0 && pokemon2Json.sAtq != 0) {
        if (pokemon1Json.sAtq > pokemon2Json.sAtq) {
            console.log(name1 + " " + pokemon1Json.sAtq + " is bigger");
            imgStats1[2].src = './Imagenes/FlechaArriba.png';
            imgStats2[2].src = './Imagenes/FlechaAbajo.png';
        } else if (pokemon1Json.sAtq < pokemon2Json.sAtq) {
            console.log(name2 + " " + pokemon2Json.sAtq + " is bigger");
            imgStats1[2].src = './Imagenes/FlechaAbajo.png';
            imgStats2[2].src = './Imagenes/FlechaArriba.png';
        } else {
            console.log("Son iguales");
            imgStats1[2].src = './Imagenes/FlechaIgual.png';
            imgStats2[2].src = './Imagenes/FlechaIgual.png';
        }
    }
    if (pokemon1Json.def != 0 && pokemon2Json.def != 0) {
        if (pokemon1Json.def > pokemon2Json.def) {
            console.log(name1 + " " + pokemon1Json.def + " is bigger");
            imgStats1[3].src = './Imagenes/FlechaArriba.png';
            imgStats2[3].src = './Imagenes/FlechaAbajo.png';
        } else if (pokemon1Json.def < pokemon2Json.def) {
            console.log(name2 + " " + pokemon2Json.def + " is bigger");
            imgStats1[3].src = './Imagenes/FlechaAbajo.png';
            imgStats2[3].src = './Imagenes/FlechaArriba.png';
        } else {
            console.log("Son iguales");
            imgStats1[3].src = './Imagenes/FlechaIgual.png';
            imgStats2[3].src = './Imagenes/FlechaIgual.png';
        }
    }
    if (pokemon1Json.sDef != 0 && pokemon2Json.sDef != 0) {
        if (pokemon1Json.sDef > pokemon2Json.sDef) {
            console.log(name1 + " " + pokemon1Json.sDef + " is bigger");
            imgStats1[4].src = './Imagenes/FlechaArriba.png';
            imgStats2[4].src = './Imagenes/FlechaAbajo.png';
        } else if (pokemon1Json.sDef < pokemon2Json.sDef) {
            console.log(name2 + " " + pokemon2Json.sDef + " is bigger");
            imgStats1[4].src = './Imagenes/FlechaAbajo.png';
            imgStats2[4].src = './Imagenes/FlechaArriba.png';
        } else {
            console.log("Son iguales");
            imgStats1[4].src = './Imagenes/FlechaIgual.png';
            imgStats2[4].src = './Imagenes/FlechaIgual.png';
        }
    }
    if (pokemon1Json.vel != 0 && pokemon2Json.vel != 0) {
        if (pokemon1Json.vel > pokemon2Json.vel) {
            console.log(name1 + " " + pokemon1Json.vel + " is bigger");
            imgStats1[5].src = './Imagenes/FlechaArriba.png';
            imgStats2[5].src = './Imagenes/FlechaAbajo.png';
        } else if (pokemon1Json.vel < pokemon2Json.vel) {
            console.log(name2 + " " + pokemon2Json.vel + " is bigger");
            imgStats1[5].src = './Imagenes/FlechaAbajo.png';
            imgStats2[5].src = './Imagenes/FlechaArriba.png';
        } else {
            console.log("Son iguales");
            imgStats1[5].src = './Imagenes/FlechaIgual.png';
            imgStats2[5].src = './Imagenes/FlechaIgual.png';
        }
    }
}
$(document).click(function () {
    var isHovered = $('#caja1').filter(function () {
        return $(this).is(":hover");
    });
    var isHovered2 = $('#caja2').filter(function () {
        return $(this).is(":hover");
    });
    var isHovered3 = $('#searcher').filter(function () {
        return $(this).is(":hover");
    });
    let allList = suggBox.querySelectorAll("li");
    let allList2 = suggBox2.querySelectorAll("li");
    let allList3 = pokeFiller.querySelectorAll("li");

    if (isHovered.length > 0 && allList.length >= 1) {
        searchWrapper.classList.add('active');
        numero = 0;
    } else {
        searchWrapper.classList.remove('active');
    }
    if (isHovered2.length > 0 && allList2.length >= 1) {
        searchWrapper2.classList.add('active');
        numero = 0;
    } else {
        searchWrapper2.classList.remove('active');
    }
    if (isHovered3.length > 0 && allList3.length >= 1) {
        navBar.classList.add('active');
        numero = 0;
    } else {
        navBar.classList.remove('active');
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
// Search with arrows
searchWrapper.onkeyup = (e) => {
    let allList = suggBox.querySelectorAll("li");
    let max = allList.length;

    e = e || window.event;

    switch (e.key) {
        case 'Enter':
            console.log(`El numero es: ${numero}`);
            select(allList[numero - 1]);
            numero = 0;
            break;
        case 'ArrowUp':
            if (numero <= 1) {
                numero = max;
                allList[numero - 1].classList.add("is-active");
            }
            else if (numero > 0) {
                numero--;
                allList[numero - 1].classList.add("is-active");
            }
            break;
        case 'ArrowDown':
            if (numero < max) {
                numero++;
                allList[numero - 1].classList.add("is-active");
            }
            else if (numero = max) {
                numero = 1;
                allList[numero - 1].classList.add("is-active");
            }
            break;
        default:
            console.log('No se encuentra');
    }
}
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
            /* while (suggBox.firstChild) {
                suggBox.removeChild(suggBox.firstChild);
            } */
        }
    }
    if (caja1.value == '') {
        searchWrapper.classList.remove('active');
        /* while (suggBox.firstChild) {
            suggBox.removeChild(suggBox.firstChild);
        } */
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

        pokemonStats(1, dataPokemon.stats);

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

    /* while (suggBox.firstChild) {
        suggBox.removeChild(suggBox.firstChild);
    } */
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
// Search with arrows
searchWrapper2.onkeyup = (e) => {
    let allList = suggBox2.querySelectorAll("li");
    let max = allList.length;

    e = e || window.event;

    switch (e.key) {
        case 'Enter':
            console.log(`El numero es: ${numero}`);
            select2(allList[numero - 1]);
            numero = 0;
            break;
        case 'ArrowUp':
            if (numero <= 1) {
                numero = max;
                allList[numero - 1].classList.add("is-active");
            }
            else if (numero > 0) {
                numero--;
                allList[numero - 1].classList.add("is-active");
            }
            break;
        case 'ArrowDown':
            if (numero < max) {
                numero++;
                allList[numero - 1].classList.add("is-active");
            }
            else if (numero = max) {
                numero = 1;
                allList[numero - 1].classList.add("is-active");
            }
            break;
        default:
            console.log('No se encuentra');
    }
}
// Sugestion box
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

        pokemonStats(2, dataPokemon.stats);

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

// Inicio de pagina
// Elegir los dos primeros pokemons
let navBar = document.getElementById("nav-bar");
let pokeFiller = document.getElementById("pokemons-filler");
let searcher = document.getElementById("searcher");
let initialPokemons = document.getElementById('search-pokemon');
let img_default = document.getElementById("pokemon-img-1");
let pokemonName1 = document.getElementById('pokemon-name-1');
let img_default0 = document.getElementById("pokemon-img-2");
let pokemonName0 = document.getElementById('pokemon-name-2');
let cardG = document.getElementById('card');
let faceCardFront = document.getElementById('face-card-front');
let faceCardBack = document.getElementById('face-card-back');

searcher.onkeyup = (e) => {
    let userData = e.target.value;
    let emptyArray = [];

    if (userData) {
        emptyArray = pokemons.filter((data) => {
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        })

        emptyArray = emptyArray.map((data) => {
            return data = '<li>' + data + '</li>';
        })

        showSuggestions3(emptyArray);

        let allList = pokeFiller.querySelectorAll("li");

        for (let i = 0; i < allList.length; i++) {
            allList[i].setAttribute("onclick", "select3(this)");
        }

        navBar.classList.add('active');

        if (emptyArray.length <= 0) {
            navBar.classList.remove('active');
            while (pokeFiller.firstChild) {
                pokeFiller.removeChild(pokeFiller.firstChild);
            }
        }
    }

    if (searcher.value == '') {
        navBar.classList.remove('active');
        while (pokeFiller.firstChild) {
            pokeFiller.removeChild(pokeFiller.firstChild);
        }
    }
}
function select3(element) {
    let selectUserData = element.textContent;
    searcher.value = selectUserData;

    buscarPokemon(selectUserData, pokemon, load);
    console.log(load)
    function pokemon(dataPokemon) {

        if (faceCardBack.classList.contains('is-active')) {
            img_default0.setAttribute("src", dataPokemon.sprites.front_default);
            pokemonName0.textContent = dataPokemon.name;
            // Animation
            cardG.classList.remove('flipped');
            faceCardBack.classList.remove('is-active');
            faceCardFront.classList.add('posicionating');
            faceCardBack.classList.add('posicionating');
            initialPokemons.classList.add('all-done');
        }
        if (faceCardFront.classList.contains('is-active')) {
            img_default.setAttribute("src", dataPokemon.sprites.front_default);
            pokemonName1.textContent = dataPokemon.name;

            faceCardFront.classList.remove('is-active');

            faceCardBack.classList.add('is-active');
        }
    }
    function load() {
        if (faceCardFront.classList.contains('is-active')) {
            window.setTimeout(() => {
                cardG.classList.add('flipped');
                searcher.value = '';
            }, 500);

            console.log('working');
        } else {
            window.setTimeout(() => {
                searcher.value = '';
            }, 500);
    
            console.log('not working');
        }
    }

    while (pokeFiller.firstChild) {
        pokeFiller.removeChild(pokeFiller.firstChild);
    }
}
function showSuggestions3(list) {
    let listData;
    if (!list.length) {
        userValue = searcher.value;
        listData = '<li>' + userValue + '<li>';
    } else {
        listData = list.join('');
    }
    pokeFiller.innerHTML = listData;
}
