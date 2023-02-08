<script lang="ts">
	import '../app.css';
	import { Toaster } from 'svelte-french-toast';
	import Nav from '$lib/components/Nav.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
</script>

<Nav user={data.user} />
<Toaster />
<div class="container mx-auto">
	<slot />
</div>
