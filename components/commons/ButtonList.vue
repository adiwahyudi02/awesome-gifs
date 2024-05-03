<template>
  <div class="flex flex-wrap items-center gap-2">
    <button
      v-for="(button, index) in buttons"
      :key="index"
      class="hover:bg-blue-600 hover:text-white font-bold py-2 px-4 rounded text-nowrap"
      :class="[
        selected === button.value
          ? 'bg-blue-700 text-white'
          : 'bg-white border border-blue-700 text-blue-700',
      ]"
      @click="
        $emit('onSelected', button.value === selected ? '' : button.value)
      "
      :id="selected === button.value ? 'isActive' : ''"
    >
      {{ button.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
interface IButton {
  label: string;
  value: any;
}

interface IButtonListProps {
  selected?: any;
  buttons: IButton[];
}

withDefaults(defineProps<IButtonListProps>(), {
  selected: false,
});

defineEmits<{
  (e: "onSelected", selected: any): void;
}>();
</script>
