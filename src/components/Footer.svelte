<script>
    import { page } from '$app/stores';
    import logo from '../public/logo/logo_white.png';
</script>

<footer>
    <div class="container_footer">
      <div class="footer-content">
        <div class="identitas_footer">
          <img class="logo_footer" src={logo} alt="Logo Tracycle" />
          <div class="deskripsi_footer">
            <p>
              TRACYCLE adalah platform inovatif yang memfasilitasi pengelolaan sampah secara praktis dan efisien melalui
              transaksi digital.
            </p>
          </div>
        </div>
        <div class="footer-links">
          <ul>
            <li><a href="#">Beranda</a></li>
            <li><a href="#">Bank Sampah</a></li>
            <li><a href="#">Daur Ulang</a></li>
            <li><a href="#">Tentang</a></li>
          </ul>
        </div>
      </div>
      <div class="social-media">
        <a href="#" class="social-icon"><i class="fa fa-facebook"></i></a>
        <a href="#" class="social-icon"><i class="fa fa-twitter"></i></a>
        <a href="#" class="social-icon"><i class="fa fa-instagram"></i></a>
      </div>
      <p class="copyright">Hak Cipta &copy; 2023 Tracycle</p>
    </div>
  </footer>
