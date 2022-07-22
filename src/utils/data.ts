export type Item = { id: string; imgUrl: string; tags: Tag[] };

export enum Tag {
	Starter = 'Starter',
	Grass = 'Grass',
	Fire = 'Fire',
	Water = 'Water'
}
export const TagsAsArray = Object.values(Tag);

export const ITEMS: Item[] = Array.from({ length: 9 })
	.fill(null)
	.map((_, i) => {
		const id = (i + 1).toString().padStart(3, '0');
		const tags: Tag[] = [];
		if (['001', '004', '007'].includes(id)) tags.push(Tag.Starter);
		if (['001', '002', '003'].includes(id)) tags.push(Tag.Grass);
		if (['004', '005', '006'].includes(id)) tags.push(Tag.Fire);
		if (['007', '008', '009'].includes(id)) tags.push(Tag.Water);

		return {
			id,
			imgUrl: `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${id}.png`,
			tags
		};
	});
