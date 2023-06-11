<script>
  export let button;
  export let drawer;
  export let overlay;

  function toggleDrawer(event) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  }

  function closeDrawer(event) {
    event.stopPropagation();
    drawer.classList.remove('open');
  }

  // Menggunakan lifecycle hook onMount untuk menghubungkan event listener
  import { onMount } from 'svelte';

  onMount(() => {
    button.addEventListener('click', toggleDrawer);
    overlay.addEventListener('click', closeDrawer);

    const drawerItems = drawer.querySelectorAll('.nav__item');
    drawerItems.forEach((item) => {
      item.addEventListener('click', closeDrawer);
    });

    // Membersihkan event listener pada onDestroy
    return () => {
      button.removeEventListener('click', toggleDrawer);
      overlay.removeEventListener('click', closeDrawer);

      drawerItems.forEach((item) => {
        item.removeEventListener('click', closeDrawer);
      });
    };
  });
</script>