<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    @click="$emit('onClose')"
  >
    <div class="modal-container">
      <div class="modal-content p-6" @click.stop>
        <!-- Close button -->
        <button
          class="absolute top-0 right-0 m-4 text-white"
          @click="$emit('onClose')"
          data-testid="exit-button"
        >
          <IconClose />
        </button>
        <!-- Modal content -->
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type ModalPropsType = {
  isOpen: boolean;
};

defineProps<ModalPropsType>();

defineEmits<{
  (e: "onClose"): void;
}>();
</script>
