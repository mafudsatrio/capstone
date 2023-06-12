<script>
  import { page } from "$app/stores";
  export let image_hero = "";
  export let title = "";
  export let caption = "";
  export let link = "";
</script>

<div class="container">
  <div class="hero_title">
    <h1>{title}</h1>
  </div>
  <div class="hero_subtitle">
    {caption}
  </div>
  <a
    class="exchange_button {$page.url.pathname === `${link}` ? 'active' : ''}"
    aria-current={$page.url.pathname === `${link}` ? "page" : undefined}
    href={link}
  >
    Tukarkan sampah
  </a>
  <img class="image_hero" src={image_hero} alt="Hero" />
</div>
