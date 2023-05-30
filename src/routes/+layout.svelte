<script>
	import Header from './Header.svelte';
	import '/src/styles/main.css';
	import '/src/styles/responsive.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>
</div>