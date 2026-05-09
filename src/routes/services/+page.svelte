<script>
  import MarketingBlock from "$components/MarketingBlock.svelte";
  import painterImage from "$lib/images/painter.jpg";
  import authorImage from "$lib/images/author.jpg";
</script>
<section>
		<MarketingBlock text="Art is beautiful in part because of the wonder it leaves within us. A big chunk of that wonder comes from feeling connected to the person who created it. If you're an artist and want those buying or viewing your art to know that it was created with passion and care, our certification service can help. We're happy to provide our verified logo for artists that can prove their work is authentically human." image={{ src: painterImage, alt: "Painter" }} />
		<MarketingBlock text="You wrote a beautiful novel and you're wondering if readers will believe you detailed out every letter and character? We understand. If you can prove your writing was produced without the help of AI, we'd love for you to use our verified logo!" image={{ src: authorImage, alt: "Author signing a book" }} />
</section>
<!--
	- Human production verification
    - Writing
      - Short stories and novels
      - Movie scripts and plays
    - Art
      - paintings, drawings, 
    - Digital designs
      - For print on t-shirts, hats, brouchers, etc.
    - Music
  - Workshops (currently in the Netherlands)
    - Want to organize a workshop on the dangers and ramifications of AI? We'll help you! 
    - Local artist workshops
-->  
<style>
  
	section {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		gap: 2rem;
		padding: 2rem 0;
	}
</style>