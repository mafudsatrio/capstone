<script>
  import { page } from "$app/stores";
  import logo from "../static/logo/logo.png";

  // function Function() {
  //   let x = document.getElementById("myTopnav");
  //   if (x.className === "topnav") {
  //     x.className += " responsive";
  //   } else {
  //     x.className = "topnav";
  //   }
  // }
</script>

  <header class="header">
    <a href="/"><img src={logo} alt="Tracycle" class="header__image" /></a>

    <input class="menu-btn" type="checkbox" id="menu-btn" />
  <label class="menu-icon" for="menu-btn"><span class="navicon" /></label>
    <ul class="menu">
        <li>
        <a
        class="nav__item {$page.url.pathname === '/' ? 'active' : ''}"
        aria-current={$page.url.pathname === "/" ? "page" : undefined}
        href="/"
        >
        Beranda
      </a>
    </li>
    <li>
      <a
          class="nav__item {$page.url.pathname === '/bank-sampah'
            ? 'active'
            : ''}"
          aria-current={$page.url.pathname === "/bank-sampah"
            ? "page"
            : undefined}
          href="/bank-sampah"
          >
          Bank Sampah</a
          >
        </li>
        <li>
          <a
          class="nav__item {$page.url.pathname === '/daur-ulang' ? 'active' : ''}"
          aria-current={$page.url.pathname === "/daur-ulang" ? "page" : undefined}
          href="/daur-ulang"
          >
          Daur Ulang</a
          >
        </li>
        <li>
          <a
          class="nav__item {$page.url.pathname === '/formulir-pengisian' ? 'active' : ''}"
          aria-current={$page.url.pathname === "/formulir-pengisian" ? "page" : undefined}
          href="/formulir-pengisian"
          >
          Formulir Pengisian</a
          >
        </li>
        <li>
          <a
          class="nav__item {$page.url.pathname === '/tentang' ? 'active' : ''}"
          aria-current={$page.url.pathname === "/tentang" ? "page" : undefined}
          href="/tentang"
          >
          Tentang</a
          >
        </li>

    </ul>
  </header>

  