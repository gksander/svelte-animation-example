import { derived, writable } from 'svelte/store';
import type { Item, Tag } from './data';
import { ITEMS, TagsAsArray } from './data';

/**
 * Don't really need a store for this, but I wanted to check out custom stores.
 */
export const activeTags = (() => {
  const { subscribe, set, update } = writable([] as Tag[]);

  return {
    subscribe,
    addTag: (tag: Tag) => update((v) => [...v, tag]),
    removeTag: (tag: Tag) => update((v) => v.filter((t) => t !== tag)),
    clear: () => set([]),
  };
})();

export const inactiveTags = derived(activeTags, ($activeTags) =>
  TagsAsArray.filter((tag) => !$activeTags.includes(tag)),
);

export const availableItems = derived(activeTags, ($activeTags) =>
  ITEMS.filter(
    (item) => $activeTags.length === 0 || $activeTags.every((tag) => item.tags.includes(tag)),
  ),
);

export const activeItem = writable(null as null | Item);
