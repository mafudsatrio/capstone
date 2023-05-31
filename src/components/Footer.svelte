<script>
  import { page } from "$app/stores";
  import logo from "../static/logo/logo_white.png";
</script>

<footer>
  <div class="footer-container">
    <div class="identitas_footer">
      <img class="logo_footer" src={logo} alt="Logo Tracycle" />
      <div class="deskripsi_footer">
        <p>
          TRACYCLE adalah platform inovatif yang memfasilitasi pengelolaan
          sampah secara praktis dan efisien melalui transaksi digital.
        </p>
        <p class="copyright">Hak Cipta &copy; 2023 Tracycle</p>
      </div>
    </div>
    <div class="footer-links">
      <ul>
        <li>
          <a
            class={$page.url.pathname === "/" ? "active" : ""}
            aria-current={$page.url.pathname === "/" ? "page" : undefined}
            href="/">Beranda</a
          >
        </li>
        <li>
          <a
            class={$page.url.pathname === "/bank-sampah" ? "active" : ""}
            aria-current={$page.url.pathname === "/bank-sampah"
              ? "page"
              : undefined}
            href="/bank-sampah">Bank Sampah</a
          >
        </li>
        <li>
          <a
            class={$page.url.pathname === "/daur-ulang" ? "active" : ""}
            aria-current={$page.url.pathname === "/daur-ulang"
              ? "page"
              : undefined}
            href="/daur-ulang">Daur Ulang</a
          >
        </li>
        <li>
          <a
            class={$page.url.pathname === "/tentang" ? "active" : ""}
            aria-current={$page.url.pathname === "/tentang"
              ? "page"
              : undefined}
            href="/tentang">Tentang</a
          >
        </li>
      </ul>
    </div>
    <div class="social-media">
      <p>Kunjungi Media Sosial Kami</p>
      <a href="#" class="social-icon"><i class="fa fa-facebook" /></a>
      <a href="#" class="social-icon"><i class="fa fa-twitter" /></a>
      <a href="#" class="social-icon"><i class="fa fa-instagram" /></a>
    </div>
  </div>
</footer>
