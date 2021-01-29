<script lang="ts">
	import { onMount } from 'svelte';
	import { createScene } from "./3d/scene";

	let el;

	onMount(() => {

		// mode = "build" for build the 3d desain
		// mode = "play" for play with first person perspective
		createScene(el, "play") 
	});
</script>

<canvas bind:this={el}></canvas>

<style>
	canvas {
		width: 100vw;
		height: 100vh;
		display: block;
	}
</style>
