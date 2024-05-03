<template>
  <NuxtImg
    :src="src"
    class="w-full h-full rounded-lg"
    :placeholder="
      img('/images/image-placeholder.gif', {
        h: 50,
        f: 'giv',
        blur: 2,
        q: 50,
      })
    "
    :alt="alt"
  />
</template>

<script setup lang="ts">
type GifImagePropsType = {
  src: string;
  alt: string;
};

defineProps<GifImagePropsType>();

const img = useImage();
</script>
