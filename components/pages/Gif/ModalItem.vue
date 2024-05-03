<template>
  <Modal :is-open="isOpen" @on-close="$emit('onClose')">
    <div class="w-full flex justify-center">
      <div class="flex flex-col justify-center gap-3 min-w-96">
        <div>
          <GifImage :src="item?.images.fixed_height.url" />
        </div>
        <GifUserInfo
          :avatar-src="item?.user?.avatar_url"
          :username="item?.user?.username"
        />
      </div>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import type { Source } from "~/types/source";

type GifModalPropsType = {
  item: Source;
  isOpen: boolean;
};

defineProps<GifModalPropsType>();

defineEmits<{
  (event: "onClose", isOpen?: boolean): void;
}>();
</script>
