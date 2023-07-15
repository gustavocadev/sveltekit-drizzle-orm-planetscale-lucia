<script>
	import { enhance } from '$app/forms';
</script>

<form
	class="bg-base-200 flex justify-center items-center flex-col max-w-sm mx-auto mt-20 py-6 rounded-lg"
	use:enhance
	action="?/login"
	method="post"
>
	<div class="form-control w-full max-w-xs">
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label class="label">
			<span class="label-text">Nombre de usuario</span>
		</label>
		<input
			type="text"
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
			placeholder="Password"
			class="input input-bordered w-full max-w-xs"
			name="password"
			required
		/>
	</div>

	<button class="btn mt-4 max-w-xs" type="submit"> Iniciar Sesion </button>
</form>
