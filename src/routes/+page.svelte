<script lang="ts">
	import type { PageData } from "./$types";
  export let data:PageData
</script>
{#if data?.user}
  <div>
    <h1>Yellow {data?.user.username}</h1>
  </div>
  {:else}
  <div class="bg-white mt-4">
    <div class="text-center border border-gray-900">
      <h1 class="border">Welcome</h1>
      <div>
        <a href="/login">Log in</a>
      </div>
      <div>
        <a href="/register">Register</a>
      </div>
    </div>
  </div>
{/if}