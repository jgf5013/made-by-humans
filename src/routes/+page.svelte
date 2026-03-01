<script lang="ts">
	import Counter from './Counter.svelte';
	import layoutCssUrl from './layout.css?url';
</script>

<svelte:head>
	<title>Made By Humans</title>
	<meta name="description" content="Provides verification and labeling services for artists and creators" />
	<link rel="stylesheet" href={layoutCssUrl} />
</svelte:head>

<main class="app">
	<h1 class="h1">Made By Humans</h1>

	<section>
		<h2 class="h2">
			Our Mission
		</h2>
		<p>To ensure consumers of physical and digital media are aware of whether or not Generative AI was used in the production of some product. The organization will provide a certification service and resulting trademarked label for this purpose. The organization intends for this label to be used internationally for things like brochures, websites, designs on t-shirts and hats, books, movies, etc.</p>
	</section>

	<section>
		<h2 class="h2">
			Our Vision
		</h2>
		<p>We believe in a world where creators are recognized and rewarded for their originality, and where consumers can make informed choices about the products use. Our vision is to establish a trusted standard for identifying and labeling content created with Generative AI, fostering transparency and accountability in the creative industry.</p>
	</section>
</main>

<style>

  .app {
		text-align: center;
		height: 100%;
  }

  .app-header {
		height: 10%;
  }

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
