<script>
  import image_hero from "../static/images/amico.png";
  import contentImage from "../static/images/bank_sampah.jpeg";
  import daurUlang from "../static/images/daur_ulang.png";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="container">
  <div class="hero_title">
    <h1>Bantu Pulihkan Bumi dengan Mengelola Sampah bersama Tracycle</h1>
    <div class="hero_subtitle">
      Mari bergabunglah bersama kami dalam upaya mengelola sampah. Jadikan
      lingkunganmu nyaman dan bebas dari sampah. Kami siap memberikan dukungan
      dalam pengelolaan sampah di sekitarmu!
    </div>
    <button class="exchange_button">Tukarkan Sampah</button>
  </div>
  <img class="image_hero" src={image_hero} alt="Hero" />
</div>

<div class="deskripsi_container">
  <div class="nama">
    <h1>Tracycle</h1>
  </div>
  <div class="deskripsi_paragraf">
    <p>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum."
    </p>
  </div>
</div>

<div class="layanan_container">
  <div class="layanan_title">
    <h1>Layanan Yang Kami Sediakan</h1>
  </div>
  <div class="sub_layanan">
    <div class="sub_layanan">
      <div class="layanan">
        <img class="image_layanan" src={contentImage} alt="Layanan 1" />
        <div class="layanan_title">
          <h1>Bank Sampah</h1>
        </div>
        <div class="deskripsi_layanan">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            voluptas at? Nulla quis consectetur eveniet architecto
          </p>
        </div>
      </div>
      <div class="=layanan">
        <img class="image_layanan" src={contentImage} alt="Layanan 2" />
        <div class="layanan_title">
          <h1>Bank Sampah</h1>
        </div>
        <div class="deskripsi_layanan">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            voluptas at? Nulla quis consectetur eveniet architecto
          </p>
        </div>
      </div>
      <div class="=layanan">
        <img class="image_layanan" src={contentImage} alt="Layanan 3" />
        <div class="layanan_title">
          <h1>Bank Sampah</h1>
        </div>
        <div class="deskripsi_layanan">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            voluptas at? Nulla quis consectetur eveniet architecto
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="layanan_container">
  <div class="layanan_title">
    <h1>Mengapa Kami</h1>
  </div>
  <div class="sub_layanan">
    <div class="layanan">
      <i class="icon_center fa fa-get-pocket fa-align-center fa-5x" />
      <div class="sub_layanan_title">
        <h1>Praktis</h1>
      </div>
      <div class="deskripsi_layanan">
        <p>
          Pengguna dapat dengan mudah menukar dan mengelola sampah mereka
          melalui transaksi digital, tanpa repot datang ke tempat pengolahan
          sampah secara mandiri.
        </p>
      </div>
    </div>
    <div class="layanan">
      <i class="icon_center fa fa-truck fa-align-center fa-5x" />
      <div class="sub_layanan_title">
        <h1>Efisien</h1>
      </div>
      <div class="deskripsi_layanan">
        <p>
          Layanan pick-up sampah yang disediakan memungkinkan pengguna untuk
          mendapatkan sampah mereka dijemput langsung oleh tim Tracycle,
          menghemat waktu dan tenaga.
        </p>
      </div>
    </div>
    <div class="layanan">
      <i class="icon_center fa fa-leaf fa-align-center fa-5x" />
      <div class="sub_layanan_title">
        <h1>Lingkungan Bersih</h1>
      </div>
      <div class="deskripsi_layanan">
        <p>
          Masyarakat dapat lebih mudah dan terorganisir dalam membuang sampah
          dengan benar, serta mendukung upaya daur ulang dan pengelolaan sampah
          yang berkelanjutan.
        </p>
      </div>
    </div>
  </div>
</div>

<div class="tukar_container">
  <img class="image_hero" src={daurUlang} alt="Hero" />
  <div class="hero_title">
    <h1>Cara Daur Ulang</h1>
    <div class="hero_subtitle">
      Kami menyediakan informasi tentang pengolahan sampah berdasarkan jenisnya,
      memberikan panduan yang dapat menginspirasi Anda untuk mengubah sampah
      menjadi produk yang lebih bermanfaat melalui proses daur ulang.
    </div>
    <button class="exchange_button">Cara Daur Ulang</button>
  </div>
</div>
