<script>
  import Head from "../../components/Head.svelte";
  import image_hero from "/src/static/images/image_page.png";
  import phone from "/src/static/icons/phone.png";
  import email from "/src/static/icons/email.png";
</script>

<svelte:head>
  <title>Tracycle - Layanan</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<Head
  title="Kami Siap Mendengar Anda"
  caption="Hubungi Kami, Konsultasikan Ide Anda, dan Berikan Feedback yang Berharga. "
  {image_hero}
/>
<div class="maincontent" id="maincontent">
  <div class="layanan_container">
    <div class="layanan_title">
      <h1>Berikan Feedback untuk Kami</h1>
      <hr />
    </div>
    <div class="konsul_container">
      <div class="deskripsi_konsul">
        <h1>Ayo konsultasikan dengan kami</h1>
        <ul>
          <p class="con">Ajukan pertanyaan apa pun atau hanya sapa saja</p>
          <p class="con">
            <img
              class="logo-konsul"
              src={phone}
              alt="Logo HandPhone"
            />0812-2345-4567
          </p>
          <p>
            <img
              class="logo-konsul"
              src={email}
              alt="Logo HandPhone"
            />tracycleforearth@gmail.com
          </p>
        </ul>
      </div>
      <div class="formulir-konsul" id="formulir-konsul">
        <form>
          <div class="input-konsul">
            <div class="form-group">
              <label class="label_form" for="nama">Nama:</label>
              <input type="text" id="nama" name="nama" required />
            </div>
            <div class="form-group">
              <label class="label_form" for="email">Email:</label>
              <input type="text" id="email" name="Email" required />
            </div>
          </div>
          <div class="form-group">
            <label class="label_form" for="Message">Message:</label>
            <input type="text" id="Message" name="Message" required />
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
