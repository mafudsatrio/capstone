<script>
  import PdfViewer from 'svelte-pdf';

  const base64 = localStorage.getItem('pdfbase64');
  console.log(base64);
</script>

<PdfViewer data={atob(base64)} />