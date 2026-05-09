<script lang="ts" module>
	import { page } from '$app/state';
  import Icon from '$components/Icon.svelte';
	import NavBarItem from '$components/NavBarItem.svelte';
	import { Menu as MenuIcon } from '@lucide/svelte';
	
	import { Menu, Portal } from '@skeletonlabs/skeleton-svelte';
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

<header class="bg-surface-50-950/70 backdrop-blur-sm">
	<nav>
		<a class={page.url.pathname === '/' ? 'logo-heading' : 'logo-heading nav-item'} href="/" role="menuitem" tabindex="0"
			onmouseenter={() => isHeaderInHoverState = true}
			onmouseleave={() => isHeaderInHoverState = false}>
			 <Icon isActive={page.url.pathname === '/'} isInHoverState={isHeaderInHoverState} />
			<h1 class="h1 text-primary-700-300">Made By Humans</h1>
		</a>
		<div class="md:hidden">
			<Menu>
				<Menu.Trigger class="btn-icon btn-icon-lg hover:preset-tonal"><MenuIcon /></Menu.Trigger>
				<Portal>
					<Menu.Positioner>
						<Menu.Content>
							<Menu.Item value="about">
								<Menu.ItemText>About</Menu.ItemText>
							</Menu.Item>
							<Menu.Item value="services">
								<Menu.ItemText>Services</Menu.ItemText>
							</Menu.Item>
						</Menu.Content>
					</Menu.Positioner>
				</Portal>
			</Menu>
		</div>
		<div class="hidden nav-bar-items md:flex">
			{#each paths as path}
				<NavBarItem path={path} />
			{/each}
		</div>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		position: sticky;
		top: 0;
	}

	nav {
		display: flex;
		
		align-items: center;
		width: 100%;

		.logo-heading {
			display: flex;
			align-items: center;
			width: 80%;
		}
		.nav-bar-items {
			
			gap: 2rem;
		}
	}

	.nav-item:hover {
		color: var(--color-foreground-accent);
	}
</style>
