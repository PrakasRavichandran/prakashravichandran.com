import { unstable_cache as cache } from 'next/cache';

const imagesAlts: Array<string> = [
  '* Current images will replace soon',
  '* Current images will replace soon',
  '* Current images will replace soon',
  '* Current images will replace soon',
  '* Current images will replace soon',
];

export const getAboutImage = cache(
  async () => {
    const index = Math.floor(Math.random() * imagesAlts.length);
    const src = await import(`../../assets/images/about/${index}.jpeg`);
    return {
      src: JSON.parse(JSON.stringify(src)),
      alt: imagesAlts[index],
    };
  },
  ['about-image'],
  { revalidate: 86400 },
);
