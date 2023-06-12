<script>
  import Head from "../../components/Head.svelte";
  import image_hero from "/src/static/images/image_page.png";
  import phone from "/src/static/icons/phone.png";
  import email from "/src/static/icons/email.png";
</script>

<svelte:head>
  <title>Tracycle - Tentang</title>
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
      <h1>Formulir Pengisian Biodata Tracycle</h1>
      <hr />
    </div>
  </div>
  <div class="konsul_container">
    <div class="deskripsi_paragraf">
      <div class="deskripsi_konsul">
        <h1>Ayo konsultasikan dengan kami</h1>
        <ul>
            <p class="con">   Ajukan pertanyaan apa pun atau hanya sapa saja</p>
            <p class="con"><img class="logo-konsul" src={phone} alt="Logo HandPhone" />0812-2345-4567</p>
            <p><img class="logo-konsul" src={email} alt="Logo HandPhone" />tracycleforearth@gmail.com</p>
        </ul>
      </div>
    </div>
  </div>
</div>
