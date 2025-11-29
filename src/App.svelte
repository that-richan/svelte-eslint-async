<script lang="ts">
	/*
	* Cannot use `await` in deriveds and template expressions, or at the top level of a component, unless the `experimental.async` compiler option is `true`
https://svelte.dev/e/experimental_async(experimental_async) (eslint svelte/valid-compile)
	*/
	await new Promise(() => {});
</script>
