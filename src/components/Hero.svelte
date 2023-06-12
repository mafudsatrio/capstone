<script>
    import { page } from "$app/stores";
    export let image_hero = "";
    export let title = "";
    export let caption = "";
</script>

<div class="container">
    <div class="hero_title">
        <h1>{title}</h1>
    </div>
    <div class="hero_subtitle">
        {caption}
    </div>
    <a
    class="exchange_button {$page.url.pathname === '/bank-sampah'? 'active': ''}"
    aria-current={$page.url.pathname === "/bank-sampah"? "page": undefined}
    href="/bank-sampah">
    Tukarkan sampah
    </a>
    <img class="image_hero" src="{image_hero}" alt="Hero" />
</div>