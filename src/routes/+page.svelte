<script lang="ts">
  import ContactForm from '$components/ContactForm.svelte';
  import MarketingBlock from '$components/MarketingBlock.svelte';
	import painterImage from '$lib/images/painter.jpg';
</script>

<svelte:head>
	<title>Made By Humans</title>
	<meta name="description" content="Provides verification and labeling services for artists and creators" />
</svelte:head>

<main class="app">
	<section class="heading">
		<MarketingBlock text="To ensure consumers of physical and digital media are aware of whether or not Generative AI was used in the production of some product. We provide a certification service and resulting trademarked label for this purpose. Operating internationally, the label can be for things like brochures, websites, designs on t-shirts and hats, books, movies, etc." image={{ src: painterImage, alt: "Painter" }} />
	</section>

	<section id="contact-form">
		<ContactForm />
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
