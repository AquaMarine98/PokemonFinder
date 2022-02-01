let pokemons = [];

window.onload = () => {
	fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898')
		.then((response) => response.json())
		.then((data) => {
			console.log(data.results.length);
			for (let i = 0; i < data.results.length; i++) {
				if (data.results[i].name == "nidoran-f") {
					pokemons.push("nidoran♀");
				} else if (data.results[i].name == "nidoran-m") {
					pokemons.push("nidoran♂");
				} else if (data.results[i].name == "mr-mime") {
					pokemons.push("mr. mime");
				} else if (data.results[i].name == "mr-rime") {
					pokemons.push("mr. rime");
				} else {
					pokemons.push(data.results[i].name);
				}
			}
		})

	console.log(pokemons);
}