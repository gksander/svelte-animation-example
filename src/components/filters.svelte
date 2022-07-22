<script lang="ts">
  import { crossfade } from 'svelte/transition';
  import { flip } from 'svelte/animate';
  import { slide } from 'svelte/transition';
  import { activeTags, inactiveTags } from '$utils/stores';
  import { fadeSlide } from '$utils/fadeSlide';

  const [send, receive] = crossfade({
    duration: 300,
    fallback: slide,
  });
</script>

<div class="p-3">
  <div class="text-gray-800 text-lg">Available Filters</div>
  {#if $inactiveTags.length}
    <div class="flex gap-2" transition:fadeSlide={{ duration: 300 }}>
      {#each $inactiveTags as tag (tag)}
        <button
          in:receive={{ key: tag }}
          out:send={{ key: tag }}
          on:click={() => activeTags.addTag(tag)}
          animate:flip={{ duration: 300 }}
          class="px-5 w-24 py-1 bg-white rounded-full text-xs">{tag}</button
        >
      {/each}
    </div>
  {/if}

  <div class="mt-2">Active Filters</div>
  {#if $activeTags.length}
    <div class="flex gap-2" transition:fadeSlide={{ duration: 300 }}>
      {#each $activeTags as tag (tag)}
        <button
          in:receive={{ key: tag }}
          out:send={{ key: tag }}
          on:click={() => activeTags.removeTag(tag)}
          animate:flip={{ duration: 300 }}
          class="px-5 w-24 py-1 bg-white rounded-full text-xs">{tag} ⤫</button
        >
      {/each}
      <button
        class="text-xs rounded-full px-5 py-1 w-18 border border-transparent hover:border-orange-500 hover:text-orange-500 transition-colors duration-300"
        on:click={() => activeTags.clear()}>⤫ Clear</button
      >
    </div>
  {/if}
</div>
