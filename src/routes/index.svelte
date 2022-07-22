<script lang="ts">
  import Filters from '$components/filters.svelte';
  import ItemGrid from '$components/item-grid.svelte';
  import ActiveItem from '$components/active-item.svelte';
</script>

<div
  class="bg-gray-500 w-full h-screen overflow-hidden flex justify-center sm:items-center sm:py-12"
>
  <div
    class="w-full sm:max-w-xl bg-gray-300 sm:rounded sm:shadow-2xl overflow-hidden flex flex-col relative"
  >
    <Filters />
    <ItemGrid />
    <ActiveItem />
  </div>
</div>
