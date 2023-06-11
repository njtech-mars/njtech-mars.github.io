<script lang="ts">
  import "../app.css";

  import Navbar from "$components/Navbar/Navbar.svelte";
  import Footer from "$components/Footer/Footer.svelte";
  import ScrollToTop from "$components/ScrollToTop/ScrollToTop.svelte";
</script>

<Navbar />
<slot />
<Footer />
<ScrollToTop />
