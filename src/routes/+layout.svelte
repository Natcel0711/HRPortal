<script lang="ts">
    import "../app.css";
    import { Toaster } from 'svelte-french-toast';
	import Nav from "$lib/components/Nav.svelte";
	import type { PageData } from "./$types";
  export let data:PageData
  </script>
  <Nav user={data.user} />
  <Toaster />
  <div class="container mx-auto">
    <slot />
  </div>