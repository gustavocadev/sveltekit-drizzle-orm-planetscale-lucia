<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<h1 class="text-5xl my-4 font-semibold">If you are seeing this means that you're authenticated!</h1>
<h2>Welcome to SvelteKit</h2>
<p>
	Visit <a href="https://kit.svelte.dev" class="link">kit.svelte.dev</a> to read the documentation
</p>

<form action="?/logout" method="post" use:enhance>
	<button class="btn btn-error" type="submit">Logout</button>
</form>
