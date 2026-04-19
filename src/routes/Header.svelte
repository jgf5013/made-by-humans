<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import logo from '$lib/images/fingerprint.svg?raw';
  import Icon from '../components/Icon.svelte';
	const paths = [
		'/about',
		'/services'
	];
	let isHeaderInHoverState = false;
</script>

<header>
	<nav>
		<a class={page.url.pathname === '/' ? 'logo-heading' : 'logo-heading nav-item'} href="/" role="menuitem" tabindex="0"
			on:mouseenter="{() => isHeaderInHoverState = true}"
			on:mouseleave="{() => isHeaderInHoverState = false}">
			 <Icon isActive={page.url.pathname === '/'} isInHoverState={isHeaderInHoverState} />
			<h1 class="h1 primary">Made By Humans</h1>
		</a>
		{#each paths as path}
			<a
				aria-current={page.url.pathname === path}
				class={page.url.pathname === path ? 'nav-item active' : 'nav-item'} href={path}>{path.slice(1).charAt(0).toUpperCase() + path.slice(2)}</a>
		{/each}
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	nav {
		display: flex;
		
		align-items: center;
		width: 100%;
		gap: 2rem;
		
		a:first-of-type {
			display: flex;
			align-items: center;
			width: 60%;
		}
	}

	.nav-item:hover {
		color: var(--color-foreground-accent);
	}
	.nav-item.active {
		border-bottom: 2px solid var(--color-foreground-accent);
	}
</style>
