<script>
  import Hero from "../../components/Hero.svelte";
  import image_hero from "/src/static/images/image_page.png";
  import phone from "/src/static/icons/Phone.png";
  import emailico from "/src/static/icons/Email.png";
  import { createEventDispatcher } from "svelte";
  import { postFeedback } from "../../utils/api.js";
  import Swal from "sweetalert2";

  const dispatch = createEventDispatcher();

  let nama = "";
  let email = "";
  let message = "";
  let isLoading = false;

  async function submitForm() {
    try {
      isLoading = true;
      const response = await postFeedback({ nama, email, message });
      console.log(response.data.payload.data._id);
      Swal.fire({
        icon: "success",
        title: "Sukses",
        text: "Berhasil mengirim feedback",
        confirmButtonColor: "#4c7031",
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Gagal mengirim feedback",
        confirmButtonColor: "#4c7031",
      });
    } finally {
      isLoading = false;
    }
  }
</script>

<svelte:head>
  <title>Tracycle - Layanan</title>
  <meta name="description" content="" />
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
              src={emailico}
              alt="Logo HandPhone"
            />tracycleforearth@gmail.com
          </p>
        </ul>
      </div>

      {#if isLoading}
        <div class="loader" />
      {:else}
        <div class="formulir-konsul" id="formulir-konsul">
          <form on:submit|preventDefault={submitForm}>
            <div class="input-konsul">
              <div class="form-group">
                <label class="label_form" for="nama">Nama:</label>
                <input
                  class="input_feedback"
                  type="text"
                  id="nama"
                  bind:value={nama}
                  placeholder="Masukkan Nama Anda..."
                  required
                />
              </div>
              <div class="form-group">
                <label class="label_form" for="email">Email:</label>
                <input
                  class="input_feedback"
                  type="email"
                  id="email"
                  bind:value={email}
                  placeholder="Masukkan Email Anda..."
                  required
                />
              </div>
            </div>
            <div class="form-group">
              <label class="label_form" for="message">Message:</label>
              <textarea
                class="input_feedback"
                id="message"
                bind:value={message}
                placeholder="Masukkan Pesan Anda..."
                required
              />
            </div>
            <button type="submit" class="send">Send</button>
          </form>
        </div>
      {/if}
    </div>
  </div>
</div>
