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
    <h1>Jenis Sampah</h1>
    <p>Sampah yang dapat anda tukarkan di Tracycle</p>
  </div>
  <div class="grid-container">
    <div class="item1">
      <img
        src="/src/static/icons/plastic.png"
        alt="botol plastik"
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
        src="/src/static/icons/metal.png"
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
    <h1>Cara Tukar Sampah</h1>
  </div>
  <div class="sub_layanan">
    <div class="layanan">
      <i class="icon_center fa fa-get-pocket fa-align-center fa-5x" />
      <div class="sub_layanan_title">
        <h1>Kategorikan sampah</h1>
      </div>
      <div class="deskripsi_layanan">
        <p>
          Kategorikan sampah sesuai dengan jenisnya dan bedakan tempat tiap kategori sampah
        </p>
      </div>
    </div>
    <div class="layanan">
      <i class="icon_center fa fa-truck fa-align-center fa-5x" />
      <div class="sub_layanan_title">
        <h1>Hitung Berat Sampah</h1>
      </div>
      <div class="deskripsi_layanan">
        <p>
          Hitung berat sampah yang akan ditukarkan atau kamu bisa memperkirakan berat sampah yang akan ditukar
        </p>
      </div>
    </div>
    <div class="layanan">
      <i class="icon_center fa fa-leaf fa-align-center fa-5x" />
      <div class="sub_layanan_title">
        <h1>Isi Form Tukar Sampah</h1>
      </div>
      <div class="deskripsi_layanan">
        <p>
          Kamu dapat mengisi form yang sudah kami siapkan. Kamu harus mengisi alamat penjemputan dan data sampah.
        </p>
      </div>
    </div>
    <div class="layanan">
      <i class="icon_center fa fa-truck fa-align-center fa-5x" />
      <div class="sub_layanan_title">
        <h1>Tunggu Penjemputan</h1>
      </div>
      <div class="deskripsi_layanan">
        <p>
          Tunggu tim kami penjemputan sampah yang akan dilakukan tim kami.
        </p>
      </div>
    </div>
    <div class="layanan">
      <i class="icon_center fa fa-truck fa-align-center fa-5x" />
      <div class="sub_layanan_title">
        <h1>Tunggu Penjemputan</h1>
      </div>
      <div class="deskripsi_layanan">
        <p>
          Kamu dapat mengecek keseuaian timbangan sampah yang akan dilakukan tim kami. Pengecekan ini bertujuan untuk memberikan transparasi pengukuran.
        </p>
      </div>
    </div>
    <div class="layanan">
      <i class="icon_center fa fa-truck fa-align-center fa-5x" />
      <div class="sub_layanan_title">
        <h1>Tunggu Penjemputan</h1>
      </div>
      <div class="deskripsi_layanan">
        <p>
          Setelah penjemputan dan pengukuran selesai, kamu dapat menunggu pembayaran yang otomatis masuk ke rekning kamu.
        </p>
      </div>
    </div>
  </div>
</div>
