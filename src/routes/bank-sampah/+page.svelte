<script>
  import Hero from "../../components/Hero.svelte";
  import image_hero from "/src/static/images/daur_ulang.png";

</script>

<svelte:head>
  <title>Tracycle - Bank Sampah</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<Hero
  title="Tukarkan Sampahmu di Tracycle"
  caption="Mari bergabunglah bersama kami dalam upaya mengelola sampah. Jadikan lingkunganmu nyaman dan bebas dari sampah. Kami siap memberikan dukungan dalam pengelolaan sampah di sekitarmu!"
  {image_hero}
/>

<div class="maincontent" id="maincontent">
  <div class="layanan_container">
    <div class="layanan_title">
      <h1>Jenis Sampah</h1>
      <hr />
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
      <hr />
    </div>
    <div class="sub_layanan">
      <div class="layanan">
        <p class="tukar">1</p>
        <div class="sub_layanan_title">
          <h1>Kategorikan sampah</h1>
        </div>
        <div class="deskripsi_layanan">
          <p>
            Kategorikan sampah sesuai dengan jenisnya dan bedakan tempat tiap
            kategori sampah
          </p>
        </div>
      </div>
      <div class="layanan">
        <p class="tukar">2</p>
        <div class="sub_layanan_title">
          <h1>Hitung Berat Sampah</h1>
        </div>
        <div class="deskripsi_layanan">
          <p>
            Hitung berat sampah yang akan ditukarkan atau kamu bisa
            memperkirakan berat sampah yang akan ditukar
          </p>
        </div>
      </div>
      <div class="layanan">
        <p class="tukar">3</p>
        <div class="sub_layanan_title">
          <h1>Isi Form Tukar Sampah</h1>
        </div>
        <div class="deskripsi_layanan">
          <p>
            Kamu dapat mengisi form yang sudah kami siapkan. Kamu harus mengisi
            alamat penjemputan dan data sampah.
          </p>
        </div>
      </div>
      <div class="layanan">
        <p class="tukar">4</p>
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
        <p class="tukar">5</p>
        <div class="sub_layanan_title">
          <h1>Tunggu Penjemputan</h1>
        </div>
        <div class="deskripsi_layanan">
          <p>
            Kamu dapat mengecek keseuaian timbangan sampah yang akan dilakukan
            tim kami. Pengecekan ini bertujuan untuk memberikan transparasi
            pengukuran.
          </p>
        </div>
      </div>
      <div class="layanan">
        <p class="tukar">6</p>
        <div class="sub_layanan_title">
          <h1>Tunggu Penjemputan</h1>
        </div>
        <div class="deskripsi_layanan">
          <p>
            Setelah penjemputan dan pengukuran selesai, kamu dapat menunggu
            pembayaran yang otomatis masuk ke rekning kamu.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="formulir">
    <form class="formulir">
      <h2>Biodata</h2>
      <div class="form-group">
        <label for="nama">Nama:</label>
        <input type="text" id="nama" name="nama" required />
      </div>
      <div class="form-group">
        <label for="alamat">Alamat:</label>
        <input type="text" id="alamat" name="alamat" required />
      </div>
      <div class="form-group">
        <label for="telepon">Nomor Telepon:</label>
        <input type="tel" id="telepon" name="telepon" required />
      </div>

      <h2>Jenis Sampah</h2>
      <div class="form-group">
        <label for="jenis">Jenis Sampah:</label>
        <select id="jenis" name="jenis" required>
          <option value="">Pilih Jenis Sampah</option>
          <option value="plastik">Plastik</option>
          <option value="kertas">Kertas/Karton</option>
          <option value="logam">Logam</option>
          <option value="kaca">Kaca</option>
          <option value="kaleng">Kaleng</option>
          <option value="kardus">Kardus</option>
        </select>
      </div>
      <div class="form-group">
        <label for="berat">Berat (Kg):</label>
        <input type="number" id="berat" name="berat" required />
      </div>
      <div class="form-group">
        <label for="hargaTotal">Harga Total:</label>
        <input type="text" id="hargaTotal" name="hargaTotal" readonly />
      </div>

      <input type="submit" value="Submit" />
    </form>
  </div>
</div>
