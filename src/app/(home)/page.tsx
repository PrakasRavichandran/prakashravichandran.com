import { Intro } from '@/components/ui/home';
import { ProjectsList } from '@/components/ui/projects';

import { FeaturedBlogPosts } from './featured-posts';

const jsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  image: 'https://prakashravichandran.com/media/prakash/prakash-hd.jpg',
  url: 'https://prakashravichandran.com',
  sameAs: ['https://prakashravichandran.com/about'],
  logo: 'https://prakashravichandran.com/media/brand/logo-full.png',
  name: 'Prakash Ravichandran',
  description:
    'Passionate and creative embedded systems engineer from India 🇨🇴',
  email: 'prakashravichandran253@gmail.com',
  foundingDate: new Date('1997-01-28T18:30:00-05:00').toISOString(),
});

export default function HomePage() {
  return (
    <>
      <Intro />
      <FeaturedBlogPosts />
      <ProjectsList title={'Featured projects'} featuredOnly />
      <script type={'application/ld+json'} suppressHydrationWarning>
        {jsonLd}
      </script>
    </>
  );
}
