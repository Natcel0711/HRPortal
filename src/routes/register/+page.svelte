<script lang="ts">
	import { enhance } from "$app/forms";
	import type { SubmitFunction } from "@sveltejs/kit";
	import type { ActionData } from "./$types";
    import toast from "svelte-french-toast";
    let email:string
	let username:string
    export let form:ActionData;
    export let data;

    const OnSubmitLogin: SubmitFunction = ({  }) => {
		return async ({ result, update }) => {
			switch (result.type) {
				case 'failure':
					toast.error(result?.data?.error);
					email = ''
					username = ''
					break;
				case 'redirect':
					toast.success("account created! 🎆");
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
        <h1>Register</h1>
    </div>
    <form action="?/register" method="post" use:enhance={OnSubmitLogin}>
        <div class="m-2">
            <label for="">
                Email 
                <input name="email" bind:value={email} type="email" class="border rounded-sm" required/>
            </label>
        </div>
        <div class="m-2">
            <label for="">
                Username 
                <input name="username" bind:value={username} class="border rounded-sm" required/>
            </label>
        </div>
        <div class="m-2">
            <label for="">
                Password 
                <input name="password" type="password" class="border rounded-sm" required />
            </label>
        </div>
        <button type="submit" class="rounded-md bg-slate-500 p-2 text-white">Register</button>
    </form>
</div>