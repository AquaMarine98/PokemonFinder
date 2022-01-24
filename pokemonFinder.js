// Pokemon 1
let button = document.getElementById("btn1");

button.addEventListener("click", () => {
    let xhttp = new XMLHttpRequest();
    let pokemonName = document.getElementById("caja1").value;
    let p = document.getElementById("show-pokemon-name-1");
    let img = document.getElementById("img-1");
    let type1 = document.getElementById("type-pokemon-1-1");
    let type2 = document.getElementById("type-pokemon-1-2");
    
    let hp1 = document.getElementById("stat1-hp")
    let atq1 = document.getElementById("stat1-atq")
    let sAtq1 = document.getElementById("stat1-sAtq")
    let def1 = document.getElementById("stat1-def")
    let sDef1 = document.getElementById("stat1-sDef")
    let spd = document.getElementById("stat1-spd")

    xhttp.open("GET", `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}/`);
    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.responseText))
            let dataPokemon = JSON.parse(this.responseText);
            img.setAttribute("src", dataPokemon.sprites.front_default);
            p.textContent = dataPokemon.name;

            if(dataPokemon.types.length == 2)
            {
                type1.textContent = dataPokemon.types[0].type.name;
                type2.textContent = dataPokemon.types[1].type.name;
            } else {
                type1.textContent = dataPokemon.types[0].type.name;
                type2.textContent = null;
            }

            hp1.textContent = `Hp: ${dataPokemon.stats[0].base_stat}`;
            atq1.textContent = `Atq: ${dataPokemon.stats[1].base_stat}`;
            sAtq1.textContent = `S.Atq: ${dataPokemon.stats[2].base_stat}`;
            def1.textContent = `Def: ${dataPokemon.stats[3].base_stat}`;
            sDef1.textContent = `S.Def: ${dataPokemon.stats[4].base_stat}`;
            spd.textContent = `Spd: ${dataPokemon.stats[5].base_stat}`;
        }
    }
})

// Pokemon 2
let button2 = document.getElementById("btn2");

button2.addEventListener("click", () => {
    let xhttp = new XMLHttpRequest();
    let pokemonName = document.getElementById("caja2").value;
    let p = document.getElementById("show-pokemon-name-2");
    let img = document.getElementById("img-2");
    let type1 = document.getElementById("type-pokemon-2-1");
    let type2 = document.getElementById("type-pokemon-2-2");

    let hp1 = document.getElementById("stat2-hp")
    let atq1 = document.getElementById("stat2-atq")
    let sAtq1 = document.getElementById("stat2-sAtq")
    let def1 = document.getElementById("stat2-def")
    let sDef1 = document.getElementById("stat2-sDef")
    let spd = document.getElementById("stat2-spd")

    xhttp.open("GET", `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}/`);
    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.responseText))
            let dataPokemon = JSON.parse(this.responseText);
            img.setAttribute("src", dataPokemon.sprites.front_default);
            p.textContent = dataPokemon.name;

            if(dataPokemon.types.length == 2)
            {
                type1.textContent = dataPokemon.types[0].type.name;
                type2.textContent = dataPokemon.types[1].type.name;
            } else {
                type1.textContent = dataPokemon.types[0].type.name;
                type2.textContent = null;
            }

            hp1.textContent = `Hp: ${dataPokemon.stats[0].base_stat}`;
            atq1.textContent = `Atq: ${dataPokemon.stats[1].base_stat}`;
            sAtq1.textContent = `S.Atq: ${dataPokemon.stats[2].base_stat}`;
            def1.textContent = `Def: ${dataPokemon.stats[3].base_stat}`;
            sDef1.textContent = `S.Def: ${dataPokemon.stats[4].base_stat}`;
            spd.textContent = `Spd: ${dataPokemon.stats[5].base_stat}`;
        }
    }
})