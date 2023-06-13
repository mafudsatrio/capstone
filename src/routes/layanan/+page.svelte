<script>
  import Hero from "../../components/Hero.svelte";
  import image_hero from "/src/static/images/image_page.png";
  import phone from "/src/static/icons/Phone.png";
  import email from "/src/static/icons/Email.png";
</script>

<svelte:head>
  <title>Tracycle - Layanan</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<Hero
  title="Kami Siap Mendengar Anda"
  caption="Kami senang mendengar dari Anda! Jika Anda memiliki ide yang ingin Anda diskusikan, 
  pertanyaan yang perlu dijawab, atau feedback berharga yang ingin Anda berikan, silakan hubungi 
  kami. Kami siap mendengarkan dan memberikan saran yang sesuai. Kami sangat menghargai kontribusi 
  Anda dalam membantu kami meningkatkan pelayanan kami. Terima kasih telah memilih untuk berkomunikasi dengan kami! "
  {image_hero}
  link="/bank-sampah"
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
              <input
                class="input_feedback"
                type="text"
                id="nama"
                name="nama"
                placeholder="Masukan Nama Anda..."
                required
              />
            </div>
            <div class="form-group">
              <label class="label_form" for="email">Email:</label>
              <input
                class="input_feedback"
                type="text"
                id="email"
                name="Email"
                placeholder="Masukan Email Anda..."
                required
              />
            </div>
          </div>
          <div class="form-group">
            <label class="label_form" for="Message">Message:</label>
            <input
              class="input_feedback"
              type="text"
              id="Message"
              name="Message"
              placeholder="Masukan Pesan Anda..."
              required
            />
          </div>
          <button class="send">Kirim</button>
        </form>
      </div>
    </div>
  </div>
</div>
