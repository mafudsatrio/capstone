<script>
  import Hero from "../../components/Hero.svelte";
  import image_hero from "/src/static/images/image_page.png";
</script>

<svelte:head>
  <title>Tracycle - Tentang</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<Hero
  title="Yuk Kenalan dengan Tracycle"
  caption="Selamat datang di laman kami! Di sini, kami ingin berbagi dengan Anda mengenai 
  visi misi kami, tentang kami sebagai tim, serta memberikan informasi tentang aplikasi 
  yang kami hasilkan. Kami percaya bahwa dengan memahami lebih dalam mengenai nilai-nilai 
  kami dan tujuan kami dalam menciptakan solusi yang bermanfaat, Anda akan semakin yakin 
  dengan apa yang kami tawarkan."
  {image_hero}
/>

<div class="maincontent" id="maincontent">
  <div class="deskripsi_container">
    <div class="nama">
      <h1>Tentang Kami</h1>
    </div>
    <div class="deskripsi_paragraf">
      <p>
        Tracycle adalah aplikasi berbasis web inovatif yang memfasilitasi
        masyarakat dalam mengelola sampah menjadi uang dengan cara yang praktis
        dan efisien. Melalui aplikasi Tracycle, pengguna dapat dengan mudah
        menukar sampah dengan uang, sambil juga mendapatkan informasi tentang
        cara pengolahan sampah yang benar, edukasi mengenai jenis sampah, dan
        informasi berguna terkait pengelolaan sampah. Kami berkomitmen untuk
        menciptakan lingkungan yang bersih dan sekaligus memberikan manfaat
        finansial kepada masyarakat melalui pengelolaan sampah yang efisien.
        Dengan Tracycle, Anda dapat berkontribusi dalam menjaga kebersihan
        lingkungan sekaligus mendapatkan manfaat ekonomi dari sampah yang Anda
        kelola. Bergabunglah dengan Tracycle sekarang untuk menciptakan masa
        depan yang lebih baik.
      </p>
    </div>
  </div>

  <div class="team">
    <h1>Our Team</h1>
    <hr style="background-color: black;" />
  </div>
  <div class="team_container">
    <div class="team_card">
      <div class="team_avatar">
        <div class="team_image">
          <img
            class="icon_team"
            src="/src/static/icons/avatar_1.png"
            alt="Team Icon"
          />
        </div>
        <div class="icon_medsos-avtr">
          <a href="https://www.instagram.com/dnaprmdi/" class="medsos"><i class="fa fa-instagram" /></a>
          <a href="https://www.linkedin.com/in/dena-indiarto-permadi-74436126a/" class="medsos"><i class="fa fa-linkedin" /></a>
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
            src="/src/static/icons/avatar_2.png"
            alt="Team Icon"
          />
        </div>
        <div class="icon_medsos-avtr">
          <a href="https://www.instagram.com/lalufitho" class="medsos"
            ><i class="fa fa-instagram" /></a
          >
          <a
            href="https://www.linkedin.com/in/lalu-alfitra-ratila-a2b499272/"
            class="medsos"><i class="fa fa-linkedin" /></a
          >
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
            src="/src/static/icons/avatar_3.png"
            alt="Team Icon"
          />
        </div>
        <div class="icon_medsos-avtr">
          <a href="https://www.instagram.com/mafudsetiono/" class="medsos"><i class="fa fa-instagram" /></a>
          <a href="https://www.linkedin.com/in/mafud-satrio-5950a7266/" class="medsos"><i class="fa fa-linkedin" /></a>
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
            src="/src/static/icons/avatar_4.png"
            alt="Team Icon"
          />
        </div>
        <div class="icon_medsos-avtr">
          <a href="https://www.instagram.com/agnessia23/" class="medsos"><i class="fa fa-instagram" /></a>
          <a href="https://www.linkedin.com/in/agnes-glory-siahaan-57b654260" class="medsos"><i class="fa fa-linkedin" /></a>
        </div>
      </div>
      <div class="nama_team">
        <h2>Agnes Glory Siahaan</h2>
      </div>
      <div class="nama_univ">
        <h2>Universitas Sulawesi Utara</h2>
      </div>
    </div>
  </div>
</div>
