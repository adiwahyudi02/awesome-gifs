import { defineStore } from "pinia";
import { STORE_KEY } from "~/constants/store";
import type {
  CategoriesList,
  CategoriesParams,
  CategoriesResponse,
} from "~/types/categories";

export const useCategoriesStore = defineStore(STORE_KEY.CATEGORIES, () => {
  const {
    public: { apiBaseUrl, apiBaseUrlKey },
  } = useRuntimeConfig();

  const initialParamsCategories = {
    api_key: apiBaseUrlKey,
  };

  const categories = ref<CategoriesList>([]);
  const params = ref<CategoriesParams>(initialParamsCategories);
  const error = ref("");
  const isLoading = ref(false);

  // fetcher to get categories
  const fetchCategories = async () => {
    try {
      isLoading.value = true;
      const res: CategoriesResponse = await $fetch(
        `${apiBaseUrl}/gifs/categories`,
        {
          method: "GET",
          params: params.value,
        },
      );

      categories.value = res.data;
    } catch (err) {
      const errorMessage = getErrorMessage(err);
      error.value = errorMessage;
      alert(errorMessage);
    } finally {
      isLoading.value = false;
    }
  };

  const isError = computed(() => !!error.value);

  return {
    categories,
    isLoading,
    isError,
    error,
    fetchCategories,
  };
});
