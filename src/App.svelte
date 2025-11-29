<script lang="ts">
	let element: HTMLElement | null = null; // fine.
	let stateElement = $state<HTMLElement | null>(null); // Unexpected top-level browser global variable "HTMLElement". (eslint svelte/no-top-level-browser-globals)
</script>

<span bind:this={element}></span>
<span bind:this={stateElement}>Hello World!</span>
