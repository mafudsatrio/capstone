<script>
  import Hero from "../../components/Hero.svelte";
  import image_hero from "/src/static/images/daur_ulang.png";
  let title = "Tukarkan Sampahmu di Tracycle";
  let caption =
    "Mari bergabunglah bersama kami dalam upaya mengelola sampah. Jadikan lingkunganmu nyaman dan bebas dari sampah. Kami siap memberikan dukungan dalam pengelolaan sampah di sekitarmu!";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<Hero {title} {caption} {image_hero} />

<div class="deskripsi_container">
  <div class="nama">
    <h1>Tentang Kami</h1>
  </div>
  <div class="deskripsi_paragraf">
    <p>
      Tracycle adalah aplikasi berbasis web inovatif yang memfasilitasi
      masyarakat dalam mengelola sampah menjadi uang dengan cara yang praktis
      dan efisien. Melalui aplikasi Tracycle, pengguna dapat dengan mudah
      menukar sampah dengan uang, sambil juga mendapatkan informasi tentang cara
      pengolahan sampah yang benar, edukasi mengenai jenis sampah, dan informasi
      berguna terkait pengelolaan sampah. Kami berkomitmen untuk menciptakan
      lingkungan yang bersih dan sekaligus memberikan manfaat finansial kepada
      masyarakat melalui pengelolaan sampah yang efisien. Dengan Tracycle, Anda
      dapat berkontribusi dalam menjaga kebersihan lingkungan sekaligus
      mendapatkan manfaat ekonomi dari sampah yang Anda kelola. Bergabunglah
      dengan Tracycle sekarang untuk menciptakan masa depan yang lebih baik.
    </p>
  </div>
</div>

<div class="team">
  <h1>Our Team</h1>
</div>
<div class="team_container">
  <div class="team_card">
    <div class="team_avatar">
      <div class="team_image">
        <img
          class="icon_team"
          src="/src/static/icons/plastic.png"
          alt="Team Icon"
        />
      </div>
      <div class="icon_medsos-avtr">
        <a href="#" class="medsos"><i class="fa fa-instagram" /></a>
        <a href="#" class="medsos"><i class="fa fa-linkedin" /></a>
      </div>
    </div>
    <div class="nama_team">
      <h2>Dena Indiarto Permadi</h2>
    </div>
    <div class="nama_univ">
      <h2>Universitas Mataram</h2>
    </div>
  </div>

  <div class="team_card">
    <div class="team_avatar">
      <div class="team_image">
        <img
          class="icon_team"
          src="/src/static/icons/plastic.png"
          alt="Team Icon"
        />
      </div>
    </div>
    <div class="nama_team">
      <h2>Lalu Alfitra Ratila</h2>
    </div>
    <div class="nama_univ">
      <h2>Universitas Mataram</h2>
    </div>
  </div>

  <div class="team_card">
    <div class="team_avatar">
      <div class="team_image">
        <img
          class="icon_team"
          src="/src/static/icons/plastic.png"
          alt="Team Icon"
        />
      </div>
    </div>
    <div class="nama_team">
      <h2>Mafud Satrio Setiono</h2>
    </div>
    <div class="nama_univ">
      <h2>Universitas Komputer Indonesia</h2>
    </div>
  </div>

  <div class="team_card">
    <div class="team_avatar">
      <div class="team_image">
        <img
          class="icon_team"
          src="/src/static/icons/plastic.png"
          alt="Team Icon"
        />
      </div>
    </div>
    <div class="nama_team">
      <h2>Agnes Glory Siahaan</h2>
    </div>
    <div class="nama_univ">
      <h2>Universitas Sulawasi Utara</h2>
    </div>
  </div>
</div>
