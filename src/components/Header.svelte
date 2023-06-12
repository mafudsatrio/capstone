<script>
  import { page } from "$app/stores";
  import logo from "../static/logo/logo.png";
  
</script>

<header class="app-bar">
  <div class="app-bar__menu">
    <button id="hamburgerButton">☰</button>
  </div>
  <nav id="navigationDrawer" class="app-bar__navigation">
    <a href="/"><img src={logo} alt="Tracycle" class="header__image" /></a>
    <ul class="nav__list">
      <li>
        <a
        class="nav__item {$page.url.pathname === '/' ? 'active' : ''}"
        aria-current={$page.url.pathname === "/" ? "page" : undefined}
        href="/">
        Beranda
      </a>
    </li>
    <li>
      <a
      class="nav__item {$page.url.pathname === '/bank-sampah'? 'active': ''}"
      aria-current={$page.url.pathname === "/bank-sampah"? "page": undefined}
      href="/bank-sampah">
      Bank Sampah</a>
    </li>
    <li>
      <a
      class="nav__item {$page.url.pathname === '/daur-ulang' ? 'active' : ''}"
      aria-current={$page.url.pathname === "/daur-ulang" ? "page" : undefined}
      href="/daur-ulang">
      Daur Ulang</a>
    </li>
    <li>
      <a
      class="nav__item {$page.url.pathname === '/tentang' ? 'active' : ''}"
      aria-current={$page.url.pathname === "/tentang" ? "page" : undefined}
      href="/tentang">
      Tentang</a>
    </li>
  </ul>
</nav>
</header>
