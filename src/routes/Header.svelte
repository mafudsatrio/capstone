<script>
	import { page } from '$app/stores';
	import logo from '/src/images/logo.png';
</script>

<header>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<div class="container-fluid">
			<img src={logo} alt="Tracycle" class="header__image" />
		  	<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
		  	</button>
		  	<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav">
			  		<li class="nav-item">
						<a 
							class="nav-link {$page.url.pathname === '/' ? 'active' : ''}" 
							aria-current={$page.url.pathname === '/' ? 'page' : undefined} 
							href="/">
							Home
						</a>
			  		</li>
			  		<li class="nav-item">
						<a 
							class="nav-link {$page.url.pathname === '/about' ? 'active' : ''}" 
							aria-current={$page.url.pathname === '/about' ? 'page' : undefined} 
							href="/about">
							About
						</a>
			  		</li>
					  <li class="nav-item">
						<a 
							class="nav-link {$page.url.pathname === '/about' ? 'active' : ''}" 
							aria-current={$page.url.pathname === '/about' ? 'page' : undefined} 
							href="/about">
							Bank Sampah
						</a>
			  		</li>
			  		<li class="nav-item">
						<a 
							class="nav-link {$page.url.pathname === '/ggwps' ? 'active' : ''}" 
							aria-current={$page.url.pathname === '/ggwps' ? 'page' : undefined} 
							href="/ggwps">
							GGWP
						</a>
			  		</li>
				</ul>
		  	</div>
		</div>
	</nav>
</header>

<style>
	.nav-link {
		font-size: 30px;
	}
	.header__image{
		width: 100px;
		height: 50p;
	}
</style>