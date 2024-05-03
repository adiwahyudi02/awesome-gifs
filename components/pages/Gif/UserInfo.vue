<template>
  <div class="flex items-center gap-2">
    <NuxtImg
      v-if="avatarSrc"
      :src="avatarSrc"
      :alt="`${username} avatar`"
      class="w-10 h-10 rounded-md"
    />
    <p class="text-white font-bold text-sm">
      {{ username }}
    </p>
  </div>
</template>

<script setup lang="ts">
type GifUserPropsType = {
  avatarSrc?: string;
  username?: string;
};

withDefaults(defineProps<GifUserPropsType>(), {
  avatarSrc: "",
  username: "",
});
</script>
