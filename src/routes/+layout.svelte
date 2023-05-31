<script>
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte'
	import '/src/styles/main.css';
	import '/src/styles/responsive.css';
	import image_hero from '../public/images/amico.png'
	import contentImage from '../public/images/bank_sampah.jpeg'
</script>

<div class="app">
	<Header />

	<main id="maincontent">
		<slot />
	</main>

	<Footer />
</div>