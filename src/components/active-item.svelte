<script lang="ts">
	import {send, receive} from "$utils/selectedItemCrossfade";
	import {activeItem} from "$utils/stores.js";
	import {fadeSlide} from "$utils/fadeSlide";
</script>

{#if $activeItem !== null}
	{#await $activeItem then img}
		<div
			class="absolute bg-gray-200 bg-opacity-90 h-full flex justify-center items-center p-12"
			transition:fadeSlide={{duration: 250}}
		>
			<button
				class="absolute top-4 right-4 w-10 h-10 bg-gray-300 rounded-full text-3xl hover:shadow transition-shadow duration-150"
				on:click={() => $activeItem = null}
			>⤫
			</button>
			<img
				src={img.imgUrl}
				alt="Image of pokemon {img.imgUrl}"
				in:receive={{key: img.id, delay: 300}}
				out:send={{key: img.id}}
			/>
		</div>
	{/await}
{/if}
