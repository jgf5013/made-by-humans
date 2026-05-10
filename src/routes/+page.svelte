<script lang="ts">
  import ContactForm from '$components/ContactForm.svelte';
  import HeadingBlock from '$components/HeadingBlock.svelte';
  import HeadingBlockBlur from '$components/HeadingBlockBlur.svelte';
	import authorWritingImage from '$lib/images/author-writing-cropped-reduced.jpg';
</script>

<svelte:head>
	<title>Made By Humans</title>
	<meta name="description" content="Provides verification and labeling services for artists and creators" />
</svelte:head>

<!-- <HeadingBlockBlur image={{ src: authorWritingImage, alt: "Person Writing" }} /> -->

<HeadingBlock image={{ src: authorWritingImage, alt: "Person Writing" }} />
<section id="contact-form">
	<ContactForm />
</section>

<style>

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
