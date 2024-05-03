<template>
  <form @submit.prevent="$emit('onSearch', search)">
    <div class="relative">
      <div
        class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
      >
        <IconSearch class="text-gray-500" />
      </div>
      <input
        v-model="search"
        type="search"
        :placeholder="placeholder"
        class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100"
      />
      <button
        type="submit"
        class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 font-medium rounded-lg text-sm px-4 py-2 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300"
      >
        {{ buttonText }}
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
type SearchPropsType = {
  placeholder?: string;
  buttonText?: string;
  defaultValue?: string;
};

const props = withDefaults(defineProps<SearchPropsType>(), {
  placeholder: "Search",
  buttonText: "Search",
  defaultValue: "",
});

defineEmits<{
  (event: "onSearch", search: string): void;
}>();

const search = ref("");

watchEffect(() => {
  if (props.defaultValue) search.value = props.defaultValue;
});
</script>
