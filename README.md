# Svelte Animation Example

This repo contains a small animation sample using [Svelte](https://svelte.dev/) (on top of [SvelteKit](https://kit.svelte.dev/)). All of the significant transitions/animations are built with built-in Svelte tools and run _smooth as hell_.

<p align="center">
  <img src="./docs/svelte-animations.gif" alt="Example of svelte animation using pokemon grid">
</p>

## Animation Details

### Filter Animations

First up, animation for the filter "pills".

<p align="center">
  <img src="./docs/filter-animation.gif" />
</p>

Check out [the `filters.svelte` component](./src/components/filters.svelte) for implementation.

#### Crossfading

The transition of pills from "available" to "active" effectively boils down to creating a crossfade send/receive pair (provided by Svelte!):

```sveltehtml
<script lang="ts">
  import {crossfade} from "svelte/transition";
  import {slide} from 'svelte/transition';

  const [send, receive] = crossfade({
    duration: 300,
    fallback: slide
  });
</script>
```

and then applying these crossfade animations to the entering/exiting elements, sort of like:

```sveltehtml
{#if $inactiveTags.length}
  <div class="flex gap-2" transition:fadeSlide={{ duration: 300 }}>
    {#each $inactiveTags as tag (tag)}
      <button
        in:receive={{key: tag}}
        out:send={{key: tag}}
        on:click={() => activeTags.addTag(tag)}
        animate:flip={{duration: 300}}
        class="px-5 w-24 py-1 bg-white rounded-full text-xs"
      >{tag}</button>
    {/each}
  </div>
{/if}
```

The crossfade animations are applied via the `in:receive` and `out:send` directives! Ezpz, just need to specify a `key` for each element so Svelte knows where to crossfade elements to/from.

#### Collapsing the sections

The "active" and "available" filter sections will smoothly collapse/expand based on whether or not they have elements in them. That is handled via the `transition:fadeSlide={{ duration: 300 }}` bit above, where `fadeSlide` comes from a [custom `fadeSlide` transition](./src/utils/fadeSlide.ts). This just animates section's height/opacity to provide a collapsing/expanding effect.

### Item Grid Ordering

<p align="center">
	<img src="./docs/grid-reorder.gif" alt="Grid items reordering" />
</p>

TODO:

### Item Selection/Expansion

<p align="center">
	<img src="./docs/item-selection.gif" alt="Grid items reordering" />
</p>

TODO:
