<script lang="ts">
	import Header from './Header.svelte';
	import layoutCssUrl from './layout.css?url';

	let { children } = $props();
</script>
<svelte:head>
	<link rel="stylesheet" href={layoutCssUrl} />
</svelte:head>

<div class="app">
	<Header />
	<main>{@render children()}</main>

	<footer>
		<p>
			Est.: 2026 | Made By Humans
		</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
