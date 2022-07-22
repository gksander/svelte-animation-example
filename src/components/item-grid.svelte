<script lang="ts">
	import {availableItems} from "$utils/stores";
	import { flip } from "svelte/animate";
	import { fade, slide } from "svelte/transition"
	import {send, receive} from "$utils/selectedItemCrossfade";
	import {activeItem} from "$utils/stores.js";
</script>

<div class="flex-1 overflow-y-auto">
	<div class="grid grid-cols-3 gap-2 p-2 aspect-square">
		{#each $availableItems as item (item.id)}
			<div
				class="p-6 bg-gray-100 rounded cursor-pointer aspect-square hover:shadow-lg transition-shadow duration-300"
				animate:flip={{duration:d => 30 * Math.sqrt(d)}}
				on:click={() => $activeItem = item}
				out:fade
			>
				{#if $activeItem?.id !== item.id}
					<img
						src={item.imgUrl}
						alt="Pokemon {item.id}"
						class="w-full h-full"
						in:receive={{key: item.id}}
						out:send={{key: item.id, delay: 300}}
					/>
				{/if}
			</div>
		{/each}
	</div>
</div>
