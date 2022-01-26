// Pokemon 1
/* let button = document.getElementById("btn1");

button.addEventListener("click", () => {
    let xhttp = new XMLHttpRequest();
    let pokemonName = document.getElementById("caja1").value;
    let p = document.getElementById("show-pokemon-name-1");
    let img = document.getElementById("img-1");
    let type1 = document.getElementById("type-pokemon-1-1");
    let type2 = document.getElementById("type-pokemon-1-2");
    let root = document.getElementById("stats-1");

    xhttp.open("GET", `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}/`);
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
} */

// Pokemon 2
let button2 = document.getElementById("btn2");

button2.addEventListener("click", () => {
    let xhttp = new XMLHttpRequest();
    let pokemonName = document.getElementById("caja2").value;
    let p = document.getElementById("show-pokemon-name-2");
    let img = document.getElementById("img-2");
    let type1 = document.getElementById("type-pokemon-2-1");
    let type2 = document.getElementById("type-pokemon-2-2");
    let root = document.getElementById("stats-2");

    xhttp.open("GET", `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}/`);
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