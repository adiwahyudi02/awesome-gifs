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
    :atr="atr"
  />
</template>

<script setup lang="ts">
type GifImagePropsType = {
  src: string;
  atr: string;
};

defineProps<GifImagePropsType>();

const img = useImage();
</script>
