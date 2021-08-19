<script>
	export let name;
	export let url;
</script>

<div class="card">
	<img class="card-img-top" src={url} alt="Card image cap" />
	<div class="card-body">
		<p class="card-text">{name}</p>
	</div>
</div>
