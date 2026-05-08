<script lang="ts" module>
	import { page } from '$app/state';
  import Icon from '$components/Icon.svelte';
	import NavBarItem from '$components/NavBarItem.svelte';
	export type Path =
		| {
			id: string;
			heading: string;
			pathname: string;
		}
		| {
			id: string;
			heading: string;
			subPaths: {
				id: string;
				heading: string;
				pathname: string;
			}[];
		};
	export const paths: Path[] = [
		{
			id: 'about',
			heading: 'About',
			pathname: '/about'
		},
		{
			id: 'services',
			heading: 'Services',
			pathname: '/services'
		},
	];
</script>
<script lang="ts">
	let isHeaderInHoverState: boolean = $state(false);
</script>

<header>
	<nav>
		<a class={page.url.pathname === '/' ? 'logo-heading' : 'logo-heading nav-item'} href="/" role="menuitem" tabindex="0"
			onmouseenter={() => isHeaderInHoverState = true}
			onmouseleave={() => isHeaderInHoverState = false}>
			 <Icon isActive={page.url.pathname === '/'} isInHoverState={isHeaderInHoverState} />
			<h1 class="h1 text-primary-700-300">Made By Humans</h1>
		</a>
		{#each paths as path}
			<NavBarItem path={path} />
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
		
		.logo-heading {
			display: flex;
			align-items: center;
			width: 80%;
		}
	}

	.nav-item:hover {
		color: var(--color-foreground-accent);
	}
</style>
