<script>
	import { page } from '$app/stores';
	import logo from '../public/logo/logo.png';
</script>

<header>
	<button id="menu" aria-label="button to open side menu" class="hamburger">☰</button>
  </header>
  <nav id="drawer" class="nav">
	<ul class="nav__list">
	  <li>
		<a href="/"><img src={logo} alt="Tracycle Image" class="header__image" /></a>
	  </li>
	  <li class="nav__item"><a class="nav-link {$page.url.pathname === '/' ? 'active' : ''}" 
		aria-current={$page.url.pathname === '/' ? 'page' : undefined} 
		href="/">
		Beranda</a></li>
	  <li class="nav__item"><a class="nav-link {$page.url.pathname === '/bank-sampah' ? 'active' : ''}" 
		aria-current={$page.url.pathname === '/bank-sampah' ? 'page' : undefined} 
		href="/bank-sampah">
		Bank Sampah</a></li>
	  <li class="nav__item"><a class="nav-link {$page.url.pathname === '/daur-ulang' ? 'active' : ''}" 
		aria-current={$page.url.pathname === '/daur-ulang' ? 'page' : undefined} 
		href="/daur-ulang">
		Daur Ulang</a></li>
	  <li class="nav__item"><a class="nav-link {$page.url.pathname === '/tentang' ? 'active' : ''}" 
		aria-current={$page.url.pathname === '/tentang' ? 'page' : undefined} 
		href="/tentang">
		Tentang</a></li>
	</ul>
  </nav>
