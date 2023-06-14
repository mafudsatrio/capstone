<script>
  // @ts-nocheck

  import Hero from "../../components/Hero.svelte";
  import image_hero from "/src/static/images/daur_ulang.png";
  import { createEventDispatcher } from "svelte";
  import { postTransaksi, createPDF } from "../../utils/api.js";
  import image_plastik from "/src/static/icons/plastic.png";
  import image_kertas from "/src/static/icons/kertas.png";
  import image_kardus from "/src/static/icons/kardus.png";
  import image_logam from "/src/static/icons/metal.png";
  import image_kaca from "/src/static/icons/botolkaca.png";
  import image_kaleng from "/src/static/icons/kaleng.png";

  let beratSampah = 0;
  let jenisSampah = "";
  let hargaTotal = 0;
  let hargaPerKilo = 0;
  const SAMPAH = {
    plastik: 1000,
    kertas: 1500,
    logam: 2000,
    kaca: 2500,
    kaleng: 3000,
    kardus: 3500,
  };

  $: {
    hargaPerKilo = SAMPAH[jenisSampah] ?? 0;
    hargaTotal = beratSampah * hargaPerKilo;
  }

  async function submitForm(event) {
    const formData = new FormData(event.target);
    const obj = Object.fromEntries(
      Array.from(formData.keys()).map((key) => [
        key,
        formData.getAll(key).length > 1
          ? formData.getAll(key)
          : formData.get(key),
      ])
    );

    await postTransaksi({
      nama: obj.nama,
      alamat: obj.alamat,
      nohp: obj.telepon,
      email: obj.email,
      jenisSampah: jenisSampah,
      beratSampah: beratSampah,
    })
      .then(async (res) => {
        console.log(res.data.payload.data._id);
        alert("Berhasil mengirim formulir");

        const pdf = await createPDF(res.data.payload.data._id);
        localStorage.setItem("pdfbase64", pdf.data.payload.data);

        window.open(window.location.origin + '/pdf' , "_blank").focus();
      })
      .catch((err) => {
        alert("Gagal mengirim formulir");
      });
  }
</script>

<svelte:head>
  <title>Tracycle - Bank Sampah</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<Hero
  title="Tukarkan Sampahmu di Tracycle"
  caption="Tracycle memungkinkan Anda menukarkan sampah dengan manfaat bernilai. Kumpulkan sampah, 
  tukarkan dengan poin, dan dapatkan diskon atau voucher belanja. Sambil berkontribusi pada kebersihan 
  lingkungan, Anda juga mendapatkan manfaat langsung. Bergabunglah dengan Tracycle dan dukung kelestarian 
  lingkungan melalui penukaran sampah yang bermanfaat."
  {image_hero}
  link="#formulir"
/>

<div class="maincontent" id="maincontent">
  <div class="layanan_container">
    <div class="layanan_title">
      <h1>Jenis Sampah</h1>
      <hr />
      <div class="jenis_sampah_desc">
        <p>Sampah yang dapat anda tukarkan di Tracycle</p>
      </div>
    </div>
    <div class="grid-container">
      <div class="item1">
        <img
          src={image_plastik}
          alt="botol plastik"
          width="100px"
          height="100px"
        />
        Plastik
      </div>
      <div class="item2">
        <img src={image_kertas} alt="kertas" width="100px" height="100px" />
        Kertas
      </div>
      <div class="item3">
        <img src={image_kaca} alt="Botol" width="100px" height="100px" />
        Botol Kaca
      </div>

      <div class="item4">
        <img src={image_logam} alt="Besi" width="100px" height="100px" />
        Besi
      </div>
      <div class="item5">
        <img src={image_kaleng} alt="botol kaca" width="100px" height="100px" />
        Kaleng
      </div>
      <div class="item6">
        <img src={image_kardus} alt="Kardus" width="100px" height="100px" />
        Kardus
      </div>
    </div>
  </div>

  <div class="layanan_container">
    <div class="sub_layanan_title">
      <h1>Cara Tukar Sampah</h1>
      <hr />
    </div>
    <div class="sub_layanan">
      <div class="layanan">
        <p class="tukar">1</p>
        <div class="sub_layanan_title">
          <h1>Pisahkan Sampah Anda</h1>
        </div>
        <div class="deskripsi_layanan">
          <p>
            Pisahkan sampah berdasarkan jenisnya dan tentukan lokasi yang
            berbeda untuk setiap kategori sampah tersebut.
          </p>
        </div>
      </div>
      <div class="layanan">
        <p class="tukar">2</p>
        <div class="sub_layanan_title">
          <h1>Timbang Berat Sampah</h1>
        </div>
        <div class="deskripsi_layanan">
          <p>
            Lakukan estimasi berat sampah yang akan ditukarkan atau hitung
            beratnya secara akurat.
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
            Isilah formulir dengan alamat penjemputan dan informasi sampah yang
            diminta.
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
            Mohon bersabar menunggu kedatangan tim kami untuk proses penjemputan
            sampah.
          </p>
        </div>
      </div>
      <div class="layanan">
        <p class="tukar">5</p>
        <div class="sub_layanan_title">
          <h1>Periksa Hasil Pengukuran</h1>
        </div>
        <div class="deskripsi_layanan">
          <p>
            Lakukan pengecekan timbangan kembali. Pengecekan dilakukan untuk
            menjaga transparansi dalam proses pengukuran.
          </p>
        </div>
      </div>
      <div class="layanan">
        <p class="tukar">6</p>
        <div class="sub_layanan_title">
          <h1>Proses Pembayaran Sampah</h1>
        </div>
        <div class="deskripsi_layanan">
          <p>
            Setelah penjemputan dan pengukuran selesai, kamu dapat menerima
            hasil pembayaran dari sampahmu secara langsung yang diberikan oleh
            tim Tracycle.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="formulir" id="formulir">
    <form on:submit|preventDefault={submitForm} class="formulir">
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
        <input
          type="text"
          id="hargaTotal"
          value="Rp.{new Intl.NumberFormat(['ban', 'id']).format(hargaTotal)}"
          readonly
        />
      </div>

      <div class="btn">
        <button type="submit" class="submit">Submit</button>
      </div>
    </form>
  </div>
</div>
