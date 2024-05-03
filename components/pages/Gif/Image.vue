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
  />
</template>

<script setup lang="ts">
type GifImagePropsType = {
  src: string;
};

defineProps<GifImagePropsType>();

const img = useImage();
</script>
