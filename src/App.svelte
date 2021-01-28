<script lang="ts">
	import { onMount } from 'svelte';
	import { createScene } from "./components/3d/scene";

	let el;

	onMount(() => {
		createScene(el)
	});
</script>

<canvas bind:this={el}></canvas>
