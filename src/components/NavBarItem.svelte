<script lang="ts" module>
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import logo from '$lib/images/fingerprint.svg?raw';
  import { paths, type Path } from '$components/Header.svelte';
  import { removeItemFromArray } from '$utils/array';
  import { log } from 'console';

  const isSubPathInHoverState = (pathsInHoverState: string[], path: Path) => {
    return pathsInHoverState.some((p) => {
      if(paths.some((mainPath) => path.id === mainPath.id)) { return true; }
      if(paths.some((mainPath) => 'subPaths' in mainPath && mainPath.subPaths.some((sub) => path.id === sub.id))) { return true; }
      return false;
    });
  };
</script>

<script lang="ts">
  type Props = {
    path: typeof paths[number];
  };
  let { path }: Props = $props();
  let pathsInHoverState: string[] = $state([]);
</script>


{#if 'subPaths' in path}
  <div class="nav-item" onmouseenter={() => pathsInHoverState.push(path.id)} onmouseleave={() => pathsInHoverState = removeItemFromArray(pathsInHoverState, path.id)}
    role="navigation">
    <span>{path.heading}</span>
    {#if pathsInHoverState.includes(path.id)}
      <div class="sub-menu">
        {#each (path.subPaths) as subPath}
          <a class={page.url.pathname === subPath.pathname ? 'nav-item active' : 'nav-item'}
          href={subPath.pathname}
          onmouseenter={() => pathsInHoverState.push(subPath.id)} onmouseleave={() => pathsInHoverState = removeItemFromArray(pathsInHoverState, subPath.id)}
          >{subPath.heading}</a>
        {/each}
      </div>
    {/if}
  </div>
{:else if 'pathname' in path}
  <a aria-current={isSubPathInHoverState(pathsInHoverState, path)}
    onmouseenter={() => pathsInHoverState.push(path.id)}
    onmouseleave={() => pathsInHoverState = removeItemFromArray(pathsInHoverState, path.id)}
    class={isSubPathInHoverState(pathsInHoverState, path) ? 'nav-item active' : 'nav-item'} href={path.pathname}>{path.heading}
  </a>
{/if}

<style>
	.nav-item {
    cursor: pointer;
    .active {
      border-bottom: 2px solid var(--color-foreground-accent);
    }
  }
	.sub-menu {
		position: absolute;
		margin: 10px 0px;
		a {
			width: max-content;
		}
	}
</style>