<script>
// @ts-nocheck

  import Hero from "../../components/Hero.svelte";
  import image_hero from "/src/static/images/daur_ulang.png";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let beratSampah = 0;
  let jenisSampah = "";
  let hargaTotal = 0;
  let hargaPerKilo = 0;
  const SAMPAH = {
    'plastik': 1000,
    'kertas': 1500,
    'logam': 2000,
    'kaca': 2500,
    'kaleng': 3000,
    'kardus': 3500,
  }

  $: {
    hargaPerKilo = SAMPAH[jenisSampah] ?? 0;
    hargaTotal = beratSampah * hargaPerKilo;
  }

  function submitForm() {
    dispatch("submit", {
      berat: beratSampah,
      jenis: jenisSampah,
      harga: hargaTotal,
    });
  }
</script>

<svelte:head>
  <title>Tracycle - Bank Sampah</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<Hero
  title="Tukarkan Sampahmu di Tracycle"
  caption="Mari bergabunglah bersama kami dalam upaya mengelola sampah. Jadikan lingkunganmu nyaman dan bebas dari sampah. Kami siap memberikan dukungan dalam pengelolaan sampah di sekitarmu!"
  {image_hero}
  link="#formulir"
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

  <div class="formulir" id="formulir">
    <form on:submit={submitForm}  class="formulir">
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
      <div class="form-group">
        <label for="email">Alamat Email:</label>
        <input type="email" id="email" name="email" required />
      </div>

      <h2>Jenis Sampah</h2>
      <div class="form-group">
        <label for="jenis">Jenis Sampah:</label>
        <select id="jenis" bind:value={jenisSampah} required>
          <option value="" disabled selected color="#grey"
            >Pilih Jenis Sampah :</option
          >
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
        <input
          type="number"
          min="1"
          max="100"
          step=".1"
          id="berat"
          bind:value={beratSampah}
          required
        />
      </div>

      <div class="form-group">
        <label for="hargaPerKilo">Harga Per Kilo:</label>
        <input
          type="text"
          id="hargaPerKilo"
          value="Rp.{hargaPerKilo}"
          readonly
        />
      </div>

      <div class="form-group">
        <label for="hargaTotal">Harga Total:</label>
        <input type="text" id="hargaTotal" value="Rp.{new Intl.NumberFormat(["ban", "id"]).format(hargaTotal)}" readonly />
      </div>

      <div class="btn">
        <button type="submit" class="submit"
          >Submit</button
        >
      </div>
    </form>
  </div>
</div>
