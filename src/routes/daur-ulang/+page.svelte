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

<div class="layanan_container">
  <div class="layanan_title">
    <h1>Cara Daur Ulang Sampah</h1>
  </div>
  <div class="deskripsi_layanan">
    <p>
      Berikut merupakan cara yang dapat memudahkan anda mendaur ulang sampah
    </p>
  </div>
</div>

<div class="container_daur-ulang">
  <div class="card_daur_ulang">
    <div class="half_container">
      <div class="top">
        <div class="daur-ulang_icon">
          <img class="icon" src="/src/static/icons/plastic.png" alt="botol" />
        </div>
      </div>
      <div class="bottom">
        <div class="nama-item_daur-ulang">
          <p>Plastik</p>
        </div>
      </div>
    </div>
    <div class="daur-ulang_deskripsi">
      <div class="desc_title">
        <h1>Plastik</h1>
      </div>
      <div class="desc">
        <p>
          Plastik dapat didaur ulang melalui proses seperti pemilahan,
          pencucian, pelelehan, dan pembentukan menjadi bahan baru. Dalam daur
          ulang plastik, bahan plastik bekas diubah menjadi biji plastik atau
          diolah menjadi produk baru seperti kemasan, serat tekstil, atau bahan
          konstruksi.
        </p>
      </div>
    </div>
  </div>

  <div class="card_daur_ulang">
    <div class="half_container">
      <div class="top">
        <div class="daur-ulang_icon">
          <img class="icon" src="/src/static/icons/kertas_white.png" alt="botol" />
        </div>
      </div>
      <div class="bottom">
        <div class="nama-item_daur-ulang">
          <p>Kertas</p>
        </div>
      </div>
    </div>
    <div class="daur-ulang_deskripsi">
      <div class="desc_title">
        <h1>Kertas</h1>
      </div>
      <div class="desc">
        <p>
          Daur ulang kertas dimulai dengan pemilahan dan pencucian kertas bekas. Setelah itu, kertas dipecahkan menjadi 
          serat-serat halus, dicampur dengan bahan tambahan, dan kemudian dibentuk menjadi lembaran baru. Kertas daur ulang 
          digunakan untuk membuat kertas kemasan, kertas tulis, dan produk kertas lainnya.
        </p>
      </div>
    </div>
  </div>

  <div class="card_daur_ulang">
    <div class="half_container">
      <div class="top">
        <div class="daur-ulang_icon">
          <img class="icon" src="/src/static/icons/Cola.png" alt="botol" />
        </div>
      </div>
      <div class="bottom">
        <div class="nama-item_daur-ulang">
          <p>Botol Kaca</p>
        </div>
      </div>
    </div>
    <div class="daur-ulang_deskripsi">
      <div class="desc_title">
        <h1>Botol Kaca</h1>
      </div>
      <div class="desc">
        <p>
          Dalam daur ulang botol kaca, botol bekas dikumpulkan, dipisahkan berdasarkan warna, kemudian dicuci. 
          Setelah itu, botol kaca tersebut dilelehkan dan dibentuk menjadi botol baru atau digunakan dalam 
          produksi kaca lainnya, seperti bahan bangunan atau hiasan.
        </p>
      </div>
    </div>
  </div>

  <div class="card_daur_ulang">
    <div class="half_container">
      <div class="top">
        <div class="daur-ulang_icon">
          <img class="icon" src="/src/static/icons/metal.png" alt="botol" />
        </div>
      </div>
      <div class="bottom">
        <div class="nama-item_daur-ulang">
          <p>Besi</p>
        </div>
      </div>
    </div>
    <div class="daur-ulang_deskripsi">
      <div class="desc_title">
        <h1>Besi</h1>
      </div>
      <div class="desc">
        <p>
          Daur ulang besi adalah proses mengubah limbah besi menjadi bahan baru yang dapat digunakan kembali. 
          Untuk mendaur ulang besi, langkah-langkah umum meliputi pengumpulan dan pemisahan besi dari limbah 
          lainnya, pembersihan dan penghapusan kontaminan, peleburan besi untuk membentuk blok atau batangan baru, 
          dan pengolahan lebih lanjut seperti pemotongan atau pengecoran.
        </p>
      </div>
    </div>
  </div>

  <div class="card_daur_ulang">
    <div class="half_container">
      <div class="top">
        <div class="daur-ulang_icon">
          <img class="icon" src="/src/static/icons/kaca.png" alt="botol" />
        </div>
      </div>
      <div class="bottom">
        <div class="nama-item_daur-ulang">
          <p>Gelas/Piring</p>
        </div>
      </div>
    </div>
    <div class="daur-ulang_deskripsi">
      <div class="desc_title">
        <h1>Gelas/Piring</h1>
      </div>
      <div class="desc">
        <p>
          Daur ulang gelas atau piring dapat dilakukan dengan cara memisahkan bahan kaca atau porselen dari bagian non-recyclable, 
          seperti label atau tutup plastik, lalu menghancurkan dan melelehkan bahan tersebut untuk membentuk bahan baru.
        </p>
      </div>
    </div>
  </div>

  <div class="card_daur_ulang">
    <div class="half_container">
      <div class="top">
        <div class="daur-ulang_icon">
          <img class="icon" src="/src/static/icons/Wood.png" alt="kayu" />
        </div>
      </div>
      <div class="bottom">
        <div class="nama-item_daur-ulang">
          <p>Kayu</p>
        </div>
      </div>
    </div>
    <div class="daur-ulang_deskripsi">
      <div class="desc_title">
        <h1>Kayu</h1>
      </div>
      <div class="desc">
        <p>
          Dalam daur ulang kayu, kayu bekas seperti palet atau limbah konstruksi diolah menjadi serat kayu atau bubur kayu. 
          Kemudian, serat kayu ini dapat digunakan untuk membuat papan partikel, papan serat, atau bahan bakar biomassa.
        </p>
      </div>
    </div>
  </div>
</div>
