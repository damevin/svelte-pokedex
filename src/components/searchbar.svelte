<script>
	import { createEventDispatcher } from "svelte";
	const dispatch = createEventDispatcher();

	let query = "";

	const searchFunc = () => {
		dispatch("pokemon-search", { txt: query });
		query = "";
	};
</script>

<form class="form-search" on:submit|preventDefault={searchFunc}>
	<div class="form-group">
		<label for="search">Search a pokemon</label>
		<input
			type="search"
			bind:value={query}
			id="search"
			class="form-control"
			placeholder="Type your request"
		/>
	</div>
	<button class="btn btn-secondary" type="submit">Search</button>
</form>

<style>
	.form-search {
		align-content: center;
		background: #f43b86;
		border-radius: 5px;
		color: white;
		display: flex;
		flex-direction: column;
		margin: 200px auto 50px auto;
		max-width: 1400px;
		padding: 1rem;
		width: 95%;
	}

	button {
		margin-top: 5px;
		margin-left: auto;
	}
</style>
