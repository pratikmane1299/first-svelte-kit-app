<!-- this doesn't work  -->
<script lang="ts">
	import { slugify } from "$lib";
	import type { PageServerData } from "./$types";

	export let data: PageServerData;
</script>

<svelte:head>
	<title>Home Page </title>
</svelte:head>

<h1>
	Test Page, Vamooossss
</h1>

<form>
	<input type="text" name="query" placeholder="search users" />
</form>

{#if data.users.length > 0}
	{#each data.users as user}
		<div>
			<h4>{user?.name}</h4>
			<a href={`/p/${slugify(user?.name)}`}>View Profile</a>
		</div>
	{/each}
{:else}
	<span>No users found...</span>
{/if}
