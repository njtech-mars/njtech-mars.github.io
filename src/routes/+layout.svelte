<script lang="ts">
  import '../app.css';
  import Navbar from '$components/Navbar/Navbar.svelte';
  import Footer from '$components/Footer/Footer.svelte';
</script>

<svelte:head>
  <title>南工向导</title>
</svelte:head>

<Navbar />
<slot />
<Footer />
