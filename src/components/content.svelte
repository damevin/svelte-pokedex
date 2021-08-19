<script>
	import { v4 as uuidv4 } from "uuid";
	import Searchbar from "./searchbar.svelte";
	import Card from "./card.svelte";

	let results = [];
	let finalResults = [];

	const fetchApi = () => {
		fetch("https://pokeapi.co/api/v2/pokemon/?limit=150")
			.then((response) => response.json())
			.then(function (allResults) {
				allResults.results.forEach(function (pokemon) {
					fetchItemInformation(pokemon);
				});
			});
	};

	fetchApi();

	function fetchItemInformation(pokemon) {
		let objPokemon = {};
		let url = pokemon.url;
		let name = pokemon.name;

		fetch(url)
			.then((reponse) => reponse.json())
			.then(function (pokeData) {
				objPokemon.url = pokeData.sprites.back_default;
				fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}/`)
					.then((response) => response.json())
					.then(function (pokeData) {
						console.log(pokeData);
						objPokemon.name = pokeData.names[4].name;
						results.push(objPokemon);
					})
					.then(() => {
						finalResults = results.slice(0, 20);
					});
			});
	}

	function goSearch(event) {
		let queryContent = event.detail.txt;
		finalResults = results.filter((el) => el.name.toLowerCase().includes(queryContent.toLowerCase()));
		console.log(finalResults);
	}
</script>

<Searchbar on:pokemon-search={goSearch} />
<div class="content">
	{#each finalResults as pokemon (uuidv4())}
		<Card name={pokemon.name} url={pokemon.url} />
	{/each}
</div>

<style>
	.content {
		margin: 2.5rem;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1rem;
	}
</style>
