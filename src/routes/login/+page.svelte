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

<div class="bg-slate-50 text-center border border-stone-200 m-4 p-4 rounded-lg">
	<div>
		<h1>Log in</h1>
	</div>
	<form action="?/login" method="post" use:enhance={OnSubmitLogin}>
		<div class="m-2">
			<label for="">
				Email Or Username
				<input
					value={form?.email ?? ''}
					name="email"
					type="email"
					class="border rounded-sm"
                    placeholder="Email Address or Username"
					required
				/>
			</label>
		</div>
		<div class="m-2">
			<label for="">
				Password
				<input value={pass} placeholder="Password" name="password" type="password" class="border rounded-sm" required />
			</label>
		</div>
		<button type="submit" class="rounded-md bg-slate-500 p-2 text-white">Log in</button>
	</form>
</div>
