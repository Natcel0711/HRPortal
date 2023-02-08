<script lang="ts">
	import type { PageData } from "./$types";
  export let data:PageData
</script>
{#if data?.user}
  <div>
    <div class="card p-4">{data.user.username}</div>
  </div>
  {:else}
  <div class="text-center">
    <div class="card m-auto w-2/4 card-hover p-4 ">
      <div class="m-2">
        <a href="/login" class="btn bg-slate-800 rounded-md text-white">Login</a>
      </div>
      <div class="m-2">
        <a href="/register" class="btn bg-slate-800 rounded-md text-white">Register</a>
      </div>
    </div>
  </div>
{/if}
