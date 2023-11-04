<script lang="ts">
	import type { PageData } from "./$types";

	import Star from "./star.svelte";

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.user ? data.user.name : 'User not found'}</title>
</svelte:head>

{#if data.user}
	<h1>{data.user.name}</h1>

	<Star user={data.user} />
{/if}
