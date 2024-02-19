<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<form
	class="bg-base-200 flex justify-center items-center flex-col max-w-sm mx-auto mt-20 py-6 rounded-lg"
	use:enhance
	action="?/register"
	method="post"
>
	<div class="form-control w-full max-w-xs">
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label class="label">
			<span class="label-text">Nombres</span>
		</label>
		<input
			type="text"
			autocomplete="off"
			placeholder="Name"
			class="input input-bordered w-full max-w-xs"
			name="firstName"
			required
		/>

		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label class="label">
			<span class="label-text">Last Names</span>
		</label>
		<input
			type="text"
			autocomplete="off"
			placeholder="Name"
			class="input input-bordered w-full max-w-xs"
			name="lastName"
			required
		/>
	</div>
	<div class="form-control w-full max-w-xs">
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label class="label">
			<span class="label-text">Nombre de usuario</span>
		</label>
		<input
			type="text"
			autocomplete="off"
			placeholder="Username"
			class="input input-bordered w-full max-w-xs"
			name="username"
			required
		/>
	</div>

	<div class="form-control w-full max-w-xs">
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label class="label">
			<span class="label-text">Contraseña</span>
		</label>
		<input
			type="text"
			autocomplete="off"
			placeholder="Password"
			class="input input-bordered w-full max-w-xs"
			name="password"
			required
		/>
	</div>

	<button class="btn mt-4 max-w-xs btn-primary" type="submit">Crear cuenta</button>
</form>
