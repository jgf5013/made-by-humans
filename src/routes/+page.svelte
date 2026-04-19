<script lang="ts">
	import painterImage from '$lib/images/painter.jpg';
</script>

<svelte:head>
	<title>Made By Humans</title>
	<meta name="description" content="Provides verification and labeling services for artists and creators" />
</svelte:head>

<main class="app">	
	<section class="heading">
		<div>
			
			<p>To ensure consumers of physical and digital media are aware of whether or not Generative AI was used in the production of some product. The organization will provide a certification service and resulting trademarked label for this purpose. The organization intends for this label to be used internationally for things like brochures, websites, designs on t-shirts and hats, books, movies, etc.</p>
		</div>
		<div>
			<img class="header-image" src={painterImage} alt="Painter" />
		</div>
	</section>

	<section>
	</section>
</main>

<style>

  .app {
		text-align: center;
		height: 100%;
  }
	.heading {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		gap: 2rem;
		padding: 2rem 0;
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
