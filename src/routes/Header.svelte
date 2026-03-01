<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import logo from '$lib/images/fingerprint.svg';
</script>

<header>
	<div class="corner">
		<a href="https://svelte.dev/docs/kit">
			<img id="logo" src={logo} alt="Made By Humans Logo" />
		</a>
	</div>

	<nav>
	</nav>
</header>

<style>
	#logo {
		height: 5rem;
	}
	header {
		display: flex;
		justify-content: space-between;
	}


	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
