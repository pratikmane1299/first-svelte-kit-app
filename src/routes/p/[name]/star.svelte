<script lang="ts">
	import { enhance } from "$app/forms";

	export let user: any;

	let starred = user?.starred;	
</script>

<form method="POST" action="?/star" use:enhance={() => {
	starred = !user?.starred;

	return async ({ update }) => {
		await update();
	}
}}>
	<input type="hidden" id="starred" name="starred" value={starred ? 'false': 'true'} />
	<button 
	>
		{starred ? 'Starred' : 'Star' }
	</button>
</form>
