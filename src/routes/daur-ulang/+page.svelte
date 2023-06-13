<script>
  import Hero from "../../components/Hero.svelte";
  import image_hero from "/src/static/images/daur_ulang.png";
</script>

<svelte:head>
  <title>Tracycle - Daur Ulang</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<Hero
  title="Cari Tau Cara Daur Ulang Sampah"
  caption="Ayo ikut berkontribusi bersama Tracycle dalam usaha menjaga kelestarian bumi dengan mengelola sampah. Bergabunglah dengan kami untuk menciptakan lingkungan yang bersih dan bebas dari sampah. Kami siap memberikan dukungan dalam pengelolaan sampah di sekitarmu!"
  {image_hero}
  link="/bank-sampah"
/>

<div class="maincontent" id="maincontent">
  <div class="layanan_container">
    <div class="layanan_title">
      <h1>Cara Daur Ulang Sampah</h1>
      <hr />
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
            <img class="icon" src="/src/static/icons/plastik.png" alt="botol" />
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
            diolah menjadi produk baru seperti kemasan, serat tekstil, atau
            bahan konstruksi.
          </p>
        </div>
      </div>
    </div>

    <div class="card_daur_ulang">
      <div class="half_container">
        <div class="top">
          <div class="daur-ulang_icon">
            <img
              class="icon"
              src="/src/static/icons/kertas_white.png"
              alt="botol"
            />
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
            Daur ulang kertas dimulai dengan pemilahan dan pencucian kertas
            bekas. Setelah itu, kertas dipecahkan menjadi serat-serat halus,
            dicampur dengan bahan tambahan, dan kemudian dibentuk menjadi
            lembaran baru. Kertas daur ulang digunakan untuk membuat kertas
            kemasan, kertas tulis, dan produk kertas lainnya.
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
            Dalam daur ulang botol kaca, botol bekas dikumpulkan, dipisahkan
            berdasarkan warna, kemudian dicuci. Setelah itu, botol kaca tersebut
            dilelehkan dan dibentuk menjadi botol baru atau digunakan dalam
            produksi kaca lainnya, seperti bahan bangunan atau hiasan.
          </p>
        </div>
      </div>
    </div>

    <div class="card_daur_ulang">
      <div class="half_container">
        <div class="top">
          <div class="daur-ulang_icon">
            <img class="icon" src="/src/static/icons/besi.png" alt="besi" />
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
            Daur ulang besi adalah proses mengubah limbah besi menjadi bahan
            baru yang dapat digunakan kembali. Untuk mendaur ulang besi,
            langkah-langkah umum meliputi pengumpulan dan pemisahan besi dari
            limbah lainnya, pembersihan dan penghapusan kontaminan, peleburan
            besi untuk membentuk blok atau batangan baru, dan pengolahan lebih
            lanjut seperti pemotongan atau pengecoran.
          </p>
        </div>
      </div>
    </div>

    <div class="card_daur_ulang">
      <div class="half_container">
        <div class="top">
          <div class="daur-ulang_icon">
            <img
              class="icon"
              src="/src/static/icons/kaleng_white.png"
              alt="botol"
            />
          </div>
        </div>
        <div class="bottom">
          <div class="nama-item_daur-ulang">
            <p>Kaleng</p>
          </div>
        </div>
      </div>
      <div class="daur-ulang_deskripsi">
        <div class="desc_title">
          <h1>Kaleng</h1>
        </div>
        <div class="desc">
          <p>
            Kaleng bekas dikumpulkan dan dibersihkan. Kemudian, kaleng
            dipadatkan dan dihancurkan menjadi serpihan kecil. Serpihan logam
            dipisahkan dan dikirim ke pabrik pemrosesan logam untuk dilebur
            menjadi bahan baru.
          </p>
        </div>
      </div>
    </div>

    <div class="card_daur_ulang">
      <div class="half_container">
        <div class="top">
          <div class="daur-ulang_icon">
            <img
              class="icon"
              src="/src/static/icons/kardus_white.png"
              alt="kayu"
            />
          </div>
        </div>
        <div class="bottom">
          <div class="nama-item_daur-ulang">
            <p>Kardus</p>
          </div>
        </div>
      </div>
      <div class="daur-ulang_deskripsi">
        <div class="desc_title">
          <h1>Kardus</h1>
        </div>
        <div class="desc">
          <p>
            Daur ulang kardus melibatkan mengumpulkan kardus bekas,
            membersihkannya, menghancurkannya, dan mengubahnya menjadi lembaran
            kertas baru yang dapat digunakan kembali. Hal ini membantu
            mengurangi penggunaan sumber daya alam dan limbah.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
