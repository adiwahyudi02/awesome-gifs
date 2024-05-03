import { defineStore } from "pinia";
import { STORE_KEY } from "~/constants/store";
import type {
  SourceList,
  SourcesParams,
  SourcesResponse,
} from "~/types/source";

export const useGifsStore = defineStore(STORE_KEY.GIFS, () => {
  const {
    public: { apiBaseUrl, apiBaseUrlKey },
  } = useRuntimeConfig();

  const initialParamsGifs = {
    api_key: apiBaseUrlKey,
    limit: 15,
    offset: -15,
    search: "",
  };

  const gifs = ref<SourceList>([]);
  const params = ref<SourcesParams>(initialParamsGifs);
  const hasMore = ref(true);
  const error = ref("");
  const isLoading = ref(false);

  // fetcher to get gifs
  const fetchGifs = async ({
    limit,
    offset,
    search,
  }: Partial<SourcesParams>) => {
    try {
      isLoading.value = true;
      const res: SourcesResponse = await $fetch(
        !search ? `${apiBaseUrl}/gifs/trending` : `${apiBaseUrl}/gifs/search`,
        {
          method: "GET",
          params: {
            ...params.value,
            limit,
            offset,
            ...(!!search && { q: search }),
          },
        },
      );
      return res.data;
    } catch (err) {
      const errorMessage = getErrorMessage(err);
      error.value = errorMessage;
      alert(errorMessage);
      return [];
    } finally {
      isLoading.value = false;
    }
  };

  // handle get next page for inifinte scroll
  const fetchNextPageGifs = async () => {
    if (isLoading.value || !hasMore.value) return;

    const nextOffset = params.value.offset + initialParamsGifs.limit;
    const data = await fetchGifs({
      ...params.value,
      offset: nextOffset,
    });

    // extend existing gifs with new data
    gifs.value = [...gifs.value, ...data];

    // set hasMore to prevent fetching for not existing data
    hasMore.value = !data.length ? false : true;

    // update the params for next fetch
    params.value = {
      ...params.value,
      offset: nextOffset,
    };
  };

  const handleSearch = async (search: string) => {
    gifs.value = [];
    params.value = {
      ...params.value,
      offset: 0,
      search,
    };

    await fetchNextPageGifs();
  };

  const isError = computed(() => !!error.value);

  return {
    gifs,
    hasMore,
    isLoading,
    isError,
    error,
    params,
    fetchGifs,
    fetchNextPageGifs,
    handleSearch,
  };
});
