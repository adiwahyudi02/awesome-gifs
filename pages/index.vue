<template>
  <div>
    <SearchInput placeholder="Search Gifs" @on-search="handleSearch" />
    <ButtonList
      :buttons="categoriesButtons"
      :selected="params.search"
      class="flex-nowrap overflow-auto my-3 pb-4"
      @on-selected="handleSearch"
    />
    <GifGrid
      :list="gifs"
      :is-loading="isLoadingGifs"
      @on-selected="onSelectedGif"
    />
    <GifModalItem
      :is-open="isModalOpen"
      :item="selectedGif"
      @on-close="onModalToogle"
    />
  </div>
</template>

<script setup lang="ts">
import type { Source } from "~/types/source";

const {
  public: { baseUrl },
} = useRuntimeConfig();

const title = "Awesome Gifs";
const description =
  "Explore a world of endless entertainment with our collection of awesome GIFs! From hilarious reactions to heartwarming moments, our curated selection has something for everyone. Whether you're looking to express yourself, add some flair to your messages, or simply enjoy a good laugh, our diverse range of GIFs guarantees to spark joy and keep you entertained for hours. Discover and share the perfect GIF for any occasion, and let the fun begin!";
useServerSeoMeta({
  ogTitle: () => title,
  title: () => title,
  description: () => description,
  ogDescription: () => description,
  ogUrl: () => baseUrl,
  ogLocale: () => "en_US",
  ogType: () => "website",
});

const gifsStore = useGifsStore();
const { fetchNextPageGifs, handleSearch } = gifsStore;
const {
  gifs,
  hasMore,
  isLoading: isLoadingGifs,
  params,
} = storeToRefs(gifsStore);

const categoriesStore = useCategoriesStore();
const { fetchCategories } = categoriesStore;
const { categories } = storeToRefs(categoriesStore);

const isModalOpen = ref(false);
const selectedGif = ref<Source>();

const onModalToogle = () => {
  isModalOpen.value = !isModalOpen.value;
};

const onSelectedGif = (gif: Source) => {
  selectedGif.value = gif;
  onModalToogle();
};

const categoriesButtons = computed(() => {
  return categories.value.map((item) => ({
    label: item.name,
    value: item.name_encoded,
  }));
});

useInfiniteScroll({
  fetchNextPage: fetchNextPageGifs,
  isShouldFetch: hasMore.value && !isLoadingGifs.value,
});

onMounted(() => {
  fetchCategories();
});
</script>
