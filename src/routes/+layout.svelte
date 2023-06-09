<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import "/src/styles/main.css";
  import "/src/styles/responsive.css";
</script>

<div class="app">
  <Header />

  <main>
    <slot />
  </main>

  <Footer />
</div>
