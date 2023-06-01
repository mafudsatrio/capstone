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
  <div class="grid-container">
    <div class="item1">
      <img
        src="/src/static/icons/botol.png"
        alt="botol"
        width="100px"
        height="100px"
      />
      PLASTIK
    </div>
    <div class="item2">
      <img
        src="/src/static/icons/kertas.png"
        alt="kertas"
        width="100px"
        height="100px"
      />
      KERTAS
    </div>
    <div class="item3">
      <img
        src="/src/static/icons/botolkaca.png"
        alt="botol kaca"
        width="100px"
        height="100px"
      />
      BOTOL KACA
    </div>
    <div class="item4">
      <img
        src="/src/static/icons/besi.png"
        alt="Besi"
        width="100px"
        height="100px"
      />
      BESI
    </div>
    <div class="item5">
      <img
        src="/src/static/icons/gelas.png"
        alt="Gelas"
        width="100px"
        height="100px"
      />
      GELAS
    </div>
    <div class="item6">
      <img
        src="/src/static/icons/kayu.png"
        alt="Kayu"
        width="100px"
        height="100px"
      />
      KAYU
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
