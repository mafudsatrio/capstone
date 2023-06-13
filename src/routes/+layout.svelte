<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import logo_white from "../static/logo/logo_white.png";
  import "/src/styles/main.css";
  import "/src/styles/responsive.css";
</script>

<svelte:head>
  <link rel="icon" href={logo_white} type="image/icon type" />
</svelte:head>
<div class="app">
  <Header />

  <main>
    <slot />
  </main>

  <Footer />
</div>
