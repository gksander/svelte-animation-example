import { slide } from 'svelte/transition';

export function fadeSlide(...args: Parameters<typeof slide>) {
  const slideTrans = slide(...args);

  return {
    ...slideTrans,
    css: (t: number, u: number) => `
				${slideTrans.css!(t, u)}
				opacity: ${t}
			`,
  };
}
