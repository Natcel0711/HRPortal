<script lang="ts">
	import type { ActionData, PageData } from './$types';
	import toast from 'svelte-french-toast';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { Greeting } from '$lib/helpers/Home';
	import { enhance } from '$app/forms';
	export let data: PageData;
	export let form: ActionData;
	let pass: string;
	const OnSubmitLogin: SubmitFunction = ({}) => {
		return async ({ result, update }) => {
			switch (result.type) {
				case 'failure':
					toast.error('wrong credentials!');
					pass = '';
					break;
				case 'redirect':
					toast.success(Greeting());
					break;
				default:
					break;
			}
			update();
		};
	};
</script>

<div class="mt-2">
<div class="card variant-ringed-surface p-4 m-auto w-2/4">
	<header class="card-header"><h1 class="text-center">Log in</h1></header>
	<div class="p-4 text-center">
		<form action="?/login" method="post" use:enhance={OnSubmitLogin}>
			<div class="m-2">
				<h3>Email/Username</h3>
				<input
					value={form?.email ?? ''}
					name="email"
					type="email"
					class="input"
					placeholder="Email/Username"
					required
				/>
			</div>
			<div class="m-2">
				<h3>Password</h3>
				<input
					value={pass}
					placeholder="Password"
					name="password"
					type="password"
					class="input"
					required
				/>
			</div>
			<button type="submit" class="btn bg-slate-800 text-white">Log in</button>
		</form>
	</div>
</div>
</div>