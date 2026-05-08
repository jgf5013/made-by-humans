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
<div>
  <img class="marketing-image" src={image.src} alt={image.alt} />
</div>

<style>
  .marketing-image {
    width: 100%;
    height: auto;
    aspect-ratio: 1;
    border-radius: 50%;
  }
</style>