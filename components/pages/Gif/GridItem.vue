<template>
  <div :key="item.id" class="relative group cursor-pointer">
    <GifImage
      :src="item.images.fixed_height_small.url"
      :alt="`${item?.title} giv`"
    />

    <!-- overlay -->
    <div
      class="absolute inset-0 bg-transparent opacity-0 group-hover:opacity-100 group-hover:bg-opacity-50 group-hover:bg-black transition-opacity rounded-lg"
      data-testid="overlay-item"
    >
      <div class="flex flex-col items-start justify-between h-full p-3">
        <IconForward class="text-white self-end" />
        <GifUserInfo
          :avatar-src="item.user?.avatar_url"
          :username="item.user?.username"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Source } from "~/types/source";

type GridItemPropsType = {
  item: Source;
};

defineProps<GridItemPropsType>();
</script>
