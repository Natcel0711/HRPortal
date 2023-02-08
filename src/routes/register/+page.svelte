<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { ActionData } from './$types';
	import toast from 'svelte-french-toast';
	let email: string ;
	export let form: ActionData;
	export let data;

	const OnSubmitRegister: SubmitFunction = ({}) => {
		return async ({ result, update }) => {
			switch (result.type) {
				case 'failure':
					toast.error(result?.data?.error);
					email = '';
					break;
				case 'redirect':
					toast.success('account created! 🎆');
					break;
				default:
					break;
			}
			update();
		};
	};
</script>

<div class="mt-2">
	<form action="?/register" method="post" use:enhance={OnSubmitRegister}>
		<div class="card variant-ringed-surface w-2/4 m-auto text-center">
			<header class="card-header"><h1>Register</h1></header>
			<div class="p-4">
				<div>
					<h3 class="mb-2">Email</h3>
					<input bind:value={email} type="email" class="input variant-form-material w-2/3" placeholder="Email" required />
				</div>
				<br />
				<div>
					<h3 class="mb-2">Password</h3>
					<input type="password" class="input variant-form-material w-2/3" placeholder="Password" required />
				</div>
			</div>
			<footer class="card-footer mt-2">
				<button type="submit" class="btn variant-glass-surface">Register</button>
			</footer>
		</div>
	</form>
</div>
