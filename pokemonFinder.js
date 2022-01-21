let button = document.getElementById("btn");
button.addEventListener("click", () => {
    let xhttp = new XMLHttpRequest();
    let pokemonName = document.getElementById("caja").value;
    let p = document.getElementById("show-pokemon-name");
    let img = document.getElementById("img");

    xhttp.open("GET", `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}/`);
    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let dataPokemon = JSON.parse(this.responseText);
            img.setAttribute("src", dataPokemon.sprites.front_default);
            p.textContent = dataPokemon.name;
        }
    }
})