// Pokemon 1
let button = document.getElementById("btn1");

button.addEventListener("click", () => {
    let xhttp = new XMLHttpRequest();
    let pokemonName = document.getElementById("caja1").value;
    let p = document.getElementById("show-pokemon-name-1");
    let img = document.getElementById("img-1");
    let type1 = document.getElementById("type-pokemon-1-1");
    let type2 = document.getElementById("type-pokemon-1-2");

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
        }
    }
})