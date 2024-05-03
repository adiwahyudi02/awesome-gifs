interface IUseInfiniteScroll {
  fetchNextPage: () => Promise<any>;
  isShouldFetch: boolean;
}

export function useInfiniteScroll({
  fetchNextPage,
  isShouldFetch,
}: IUseInfiniteScroll) {
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight - 150 && isShouldFetch) {
      fetchNextPage();
    }
  };

  // Add event listener when component mounted
  const enableInfiniteScroll = () => {
    window.addEventListener("scroll", handleScroll, false);
    window.dispatchEvent(new Event("scroll"));
  };

  // Remove event listener when component unmounted
  const disableInfiniteScroll = () => {
    window.removeEventListener("scroll", handleScroll);
  };

  onMounted(() => {
    enableInfiniteScroll();
  });

  onUnmounted(() => {
    disableInfiniteScroll();
  });

  return {
    enableInfiniteScroll,
    disableInfiniteScroll,
  };
}
