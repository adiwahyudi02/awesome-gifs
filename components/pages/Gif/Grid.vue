<template>
  <div>
    <MasonryWall :items="list" :ssr-columns="0" :column-width="200" :gap="8">
      <template #default="{ item }">
        <GifGridItem
          :item="item"
          :ssr-columns="15"
          @click="$emit('onSelected', item)"
        />
      </template>
    </MasonryWall>
    <Loader v-if="isLoading" />
  </div>
</template>

<script setup lang="ts">
import type { Source, SourceList } from "~/types/source";

type GridPropsType = {
  list: SourceList;
  isLoading?: boolean;
};

withDefaults(defineProps<GridPropsType>(), {
  isLoading: false,
});

defineEmits<{
  (event: "onSelected", payload: Source): void;
}>();
</script>
