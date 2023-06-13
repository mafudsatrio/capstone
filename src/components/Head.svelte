<script>
    export let image_hero = "";
    export let title = "";
    export let caption = "";
    export let iconSrc = "/src/static/logo/Tracycle_logo.png";
  </script>
  
  <div class="container">
    <img class="app-icon" src={iconSrc} alt="Icon Aplikasi" />
    <div class="hero_title">
      <h1>{title}</h1>
    </div>
    <div class="hero_subtitle">
      {caption}
    </div>
    <img class="image_hero" src={image_hero} alt="Hero" />
  </div>