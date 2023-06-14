<script>
  import { page } from "$app/stores";
  import image_hero from "../static/images/amico.png";
  import daurUlang from "../static/images/daur_ulang.png";
  import Hero from "../components/Hero.svelte";
  import bank from "../static/images/Bank.png";
  import pick from "../static/images/Pick.png";
  import Konsultasi from "../static/images/Konsultasi.png";
  import { onMount } from "svelte";
</script>

<svelte:head>
  <title>Tracycle - Home</title>
  <meta name="description" content="Bantu jaga bumi bersama Tracycle" />
</svelte:head>

<Hero
  title="Bantu Pulihkan Bumi dengan Mengelola Sampah bersama Tracycle"
  caption="Mari bergabunglah bersama kami dalam upaya mengelola sampah. Jadikan lingkunganmu nyaman dan bebas dari sampah. Kami siap memberikan dukungan dalam pengelolaan sampah di sekitarmu!"
  {image_hero}
  link="/bank-sampah"
/>

<div class="maincontent" id="maincontent">
  <div class="deskripsi_container">
    <div class="nama">
      <h1>Tracycle</h1>
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

  <div class="layanan_container">
    <div class="layanan_title">
      <h1>Layanan Yang Kami Sediakan</h1>
      <hr />
    </div>
    <div class="sub_layanan">
      <div class="layanan">
        <img class="image_layanan" src={bank} alt="Bank sampah" />
        <div class="layanan_title">
          <h1>Bank Sampah</h1>
        </div>
        <div class="deskripsi_layanan">
          <p>
            Di Tracycle, Anda dapat meraih manfaat luar biasa dengan "menabung"
            sampah! Tukarkan sampah Anda dan dapatkan beragam keuntungan yang
            kami tawarkan.
          </p>
        </div>
      </div>
      <div class="=layanan">
        <img class="image_layanan" src={pick} alt="Layanan 2" />
        <div class="layanan_title">
          <h1>Pick Up Sampah</h1>
        </div>
        <div class="deskripsi_layanan">
          <p>
            Tinggal beritahu kami dimana saja, dan sampahmu akan segera
            dijemput! Tim kami siap menjemputnya di tempatmu dengan senang hati.
          </p>
        </div>
      </div>
      <div class="=layanan">
        <img class="image_layanan" src={Konsultasi} alt="Layanan 3" />
        <div class="layanan_title">
          <h1>Konsultasi Sampah</h1>
        </div>
        <div class="deskripsi_layanan">
          <p>
            Mari konsultasikan tentang pengelolaan sampahmu! Kami siap membantu
            kamu mengatasi segala masalah terkait sampah dengan cepat dan
            praktis.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="layanan_container">
    <div class="layanan_title">
      <h1>Mengapa Kami</h1>
      <hr />
    </div>
    <div class="sub_layanan">
      <div class="layanan">
        <i class="icon_center fa fa-get-pocket fa-5x" />
        <div class="layanan_title">
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
        <i class="icon_center fa fa-truck fa-5x" />
        <div class="layanan_title">
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
        <i class="icon_center fa fa-leaf fa-5x" />
        <div class="layanan_title">
          <h1>Lingkungan Bersih</h1>
        </div>
        <div class="deskripsi_layanan">
          <p>
            Masyarakat dapat lebih mudah dan terorganisir dalam membuang sampah
            dengan benar, serta mendukung upaya daur ulang dan pengelolaan
            sampah yang berkelanjutan.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="tukar_container container">
    <div class="hero_title">
      <h1>Cara Mendaur Ulang Sampah</h1>
    </div>
    <div class="hero_subtitle">
      Kami menyediakan informasi tentang pengolahan sampah berdasarkan jenisnya,
      memberikan panduan yang dapat menginspirasi Anda untuk mengubah sampah
      menjadi produk yang lebih bermanfaat melalui proses daur ulang.
    </div>
    <a
      class="exchange_button {$page.url.pathname === '/daur-ulang'
        ? 'active'
        : ''}"
      aria-current={$page.url.pathname === "/daur-ulang" ? "page" : undefined}
      href="/daur-ulang"
    >
      Cara Daur Ulang
    </a>
    <img class="image_hero" src={daurUlang} alt="Hero" />
  </div>
</div>
