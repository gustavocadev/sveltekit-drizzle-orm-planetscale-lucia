<script lang="ts">
	import '../app.postcss';
	import Navbar from '../lib/components/Navbar.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

{#if data.user}
	<Navbar />
{/if}
<main class="px-12">
	<slot />
</main>
