<script>
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
  <img class="image_hero" src={image_hero} alt="Hero" />
</div>
