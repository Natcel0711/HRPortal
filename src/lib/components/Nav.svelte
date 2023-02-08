<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import { AppBar } from '@skeletonlabs/skeleton';
	export let user;
	let loading = false;
	let btnPlaceholder = 'Logout';
	const OnSubmitLogout: SubmitFunction = ({}) => {
		btnPlaceholder = 'Please wait...';
		loading = true;
		return async ({ update }) => {
			btnPlaceholder = 'Logout';
			loading = false;
			update();
		};
	};
</script>

<AppBar>
	<svelte:fragment slot="lead"><a href="/">(ICON)</a></svelte:fragment>
	{#if !user}
    {:else}
  <p><strong>{user.username}</strong></p>
  {/if}
	<svelte:fragment slot="trail">
    {#if !user}
    <a href="/login">Login</a>
    <a href="/register">Register</a>
    {:else}
    <form action="/logout" method="post" use:enhance={OnSubmitLogout}>
			<button aria-busy={loading} class="secondary" type="submit">{btnPlaceholder}</button>
		</form>
  {/if}
  </svelte:fragment>
</AppBar>
