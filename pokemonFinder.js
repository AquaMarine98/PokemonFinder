// Pokemon 1
const searchWrapper = document.getElementById("search-input");
const caja1 = document.getElementById("caja1");
const suggBox = document.getElementById("autocom-box");
// -----------------------------------------------------------
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

function select (element) {
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

button.addEventListener("click", () => {
    let xhttp = new XMLHttpRequest();
    let pokemonName = document.getElementById("caja1").value;
    let p = document.getElementById("show-pokemon-name-1");
    let img = document.getElementById("img-1");
    let type1 = document.getElementById("type-pokemon-1-1");
    let type2 = document.getElementById("type-pokemon-1-2");
    let root = document.getElementById("stats-1");

    xhttp.open("GET", `https://pokeapi.co/api/v2/pokemon/${pokemonName.replace(/[\s.]+/g, '-').toLowerCase()}/`);
    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.responseText))
            let dataPokemon = JSON.parse(this.responseText);
            img.setAttribute("src", dataPokemon.sprites.front_default);
            p.textContent = dataPokemon.name;

            if (dataPokemon.types.length == 2) {
                type1.textContent = dataPokemon.types[0].type.name;
                type2.textContent = dataPokemon.types[1].type.name;
            } else {
                type1.textContent = dataPokemon.types[0].type.name;
                type2.textContent = null;
            }

            changeBackground(type1);
            changeBackground(type2);
            console.log(type2);

            while (root.firstChild) {
                root.removeChild(root.firstChild);
            }

            function1(`Hp: ${dataPokemon.stats[0].base_stat}`, "stat1-hp");
            function1(`Atq: ${dataPokemon.stats[1].base_stat}`, "stat1-atq");
            function1(`S.Atq: ${dataPokemon.stats[2].base_stat}`, "stat1-sAtq");
            function1(`Def: ${dataPokemon.stats[3].base_stat}`, "stat1-def");
            function1(`S.Def: ${dataPokemon.stats[4].base_stat}`, "stat1-sDef");
            function1(`Spd: ${dataPokemon.stats[5].base_stat}`, "stat1-spd");
        }
    }
})

function function1(tipoDeStat, statId) {
    var ul = document.getElementById("stats-1");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(tipoDeStat));
    li.setAttribute("id", statId);
    ul.appendChild(li);
}

// Pokemon 2
const searchWrapper2 = document.getElementById("search-input-2");
const caja2 = document.getElementById("caja2");
const suggBox2 = document.getElementById("autocom-box-2");
// -----------------------------------------------------------
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

function select2 (element) {
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

button2.addEventListener("click", () => {
    let xhttp = new XMLHttpRequest();
    let pokemonName = document.getElementById("caja2").value;
    let p = document.getElementById("show-pokemon-name-2");
    let img = document.getElementById("img-2");
    let type1 = document.getElementById("type-pokemon-2-1");
    let type2 = document.getElementById("type-pokemon-2-2");
    let root = document.getElementById("stats-2");

    xhttp.open("GET", `https://pokeapi.co/api/v2/pokemon/${pokemonName.replace(/[\s.]+/g, '-').toLowerCase()}/`);
    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let dataPokemon = JSON.parse(this.responseText);
            img.setAttribute("src", dataPokemon.sprites.front_default);
            p.textContent = dataPokemon.name;

            if (dataPokemon.types.length == 2) {
                type1.textContent = dataPokemon.types[0].type.name;
                type2.textContent = dataPokemon.types[1].type.name;
            } else {
                type1.textContent = dataPokemon.types[0].type.name;
                type2.textContent = null;
            }

            changeBackground(type1);
            changeBackground(type2);

            while (root.firstChild) {
                root.removeChild(root.firstChild);
            }

            function2(`Hp: ${dataPokemon.stats[0].base_stat}`, "stat2-hp");
            function2(`Atq: ${dataPokemon.stats[1].base_stat}`, "stat2-atq");
            function2(`S.Atq: ${dataPokemon.stats[2].base_stat}`, "stat2-sAtq");
            function2(`Def: ${dataPokemon.stats[3].base_stat}`, "stat2-def");
            function2(`S.Def: ${dataPokemon.stats[4].base_stat}`, "stat2-sDef");
            function2(`Spd: ${dataPokemon.stats[5].base_stat}`, "stat2-spd");
        }
    }
})

function function2(tipoDeStat, statId) {
    var ul = document.getElementById("stats-2");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(tipoDeStat));
    li.setAttribute("id", statId);
    ul.appendChild(li);
}