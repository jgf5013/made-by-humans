<script lang="ts">
  type Props = {
    image: {
      src: string;
      alt: string;
    };
    text: string;
  };
  let { image, text }: Props = $props();
</script>

<div>
  <p>{text}</p>
</div>
<div class="marketing-image-container">
  <img class="marketing-image" src={image.src} alt={image.alt} />
</div>

<style>
  .marketing-image-container {
    display: flex;
    /* max-height: 600px; */
  }
  .marketing-image {
    width: 100%;
    min-height: 100px;
    min-width: 200px;
    height: auto;
    aspect-ratio: 1;
    border-radius: 50%;
    align-self: center;
  }
</style>