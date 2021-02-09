<script lang="ts">
	import { onMount } from 'svelte';
	import { createScene } from "./3d/scene";
	import Modal from './layouts/Modal.svelte';
	
	let el: HTMLCanvasElement;

	onMount(() => {
		// mode = "build" for build the 3d desain
		// mode = "play" for play with first person perspective
		createScene(el, "play") 
	});
</script>

<Modal/>

<canvas bind:this={el}></canvas>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
	@tailwind utilities;

	canvas {
		width: 100vw;
		height: 100vh;
		display: block;
	} 
</style>
