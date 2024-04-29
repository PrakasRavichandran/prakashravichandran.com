import { Link } from '@/components/atoms/link';
import { Section } from '@/components/atoms/section';
import { SocialLinks } from '@/components/molecules/social-links';
import { Activity } from '@/components/ui/about/activity';
import { Experience } from '@/components/ui/about/experience';
import { Skills } from '@/components/ui/about/skills';
import { getColoredTextClasses } from '@/utils/colored-text';
import { createMetadata } from '@/utils/metadata';

import Photo from './photo';

const jsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  dateCreated: new Date('1997-01-28T18:30:00-05:00').toISOString(),
  dateModified: new Date().toISOString(),
  mainEntity: {
    '@id': '#main-author',
    '@type': 'Person',
    name: 'Prakash Ravichandran',
    alternateName: ['prakashravichandran', 'Prakash Ravichandran'],
    description:
      'Passionate and creative embedded systems engineer from India IN',
    image: 'https:///prakashravichandran.com/media/prakash/prakash-hd.jpg',
    sameAs: [
      'https://github.com/PrakasRavichanran',
      'https://linkedin.com/in/prakashravichandran10',
      'https://twitter.com/Prakash_r10',
      'https://instagram.com/prakashravichandrann',
    ],
  },
});

export default function AboutPage() {
  return (
    <>
      <Section id={'about'}>
        <h1 className={getColoredTextClasses('green')}>About</h1>
        <p className={'max-w-nice'}>
          <span role={'img'} aria-label={'waving hand'}>
            👋
          </span>{' '}
          Hey there! I&apos;m Prakash Ravichandran, an embedded systems engineer
          from{' '}
          <Link
            title={'India'}
            href={'https://www.google.com/maps/place/India/'}
            data-umami-event={'Link to India map'}
          >
            India{' '}
            <span role={'img'} aria-label={'India flag'}>
              🇮🇳
            </span>
          </Link>{' '}
          with over two (2) years of professional experience..
        </p>
        <p className={'max-w-nice'}>
          I focus on details and I&apos;m passionate about crafting software and
          hardware products that look great and are both accessible and easy to
          maintain.
        </p>
        <Photo />
        <p className={'max-w-nice'}>
          I&apos;m a advocate for open source and collaborating with the
          community. You can find my stash of websites, libraries, and apps on{' '}
          <Link title={'GitHub'} href={'https://github.com/PrakasRavichandran'}>
            GitHub
          </Link>{' '}
          .
        </p>
        <p className={'max-w-nice'}>
          I&apos;m all about diving into challenges improving and expanding my
          skillset and I thrive in globally-remote teams that value people and
          embrace trust, kindness, and inclusion.
        </p>
        <p className={'max-w-nice'}>
          If you&apos;re curious about the hardware and software tools I use
          every day, feel free to check out the{' '}
          <Link title={'Uses page'} href={'/uses'}>
            uses
          </Link>{' '}
          page.
        </p>
      </Section>
      <Section id={'contact'} className={'-mt-5 gap-2.5'}>
        <h2 className={'mb-1'} style={{ fontSize: '1rem' }}>
          Let&apos;s connect!
        </h2>
        <p>
          Feel free to reach out to me at{' '}
          <Link
            title={'Email'}
            href={
              'mailto:prakashravichandran253@gmail.com?subject=Hi%20Prakash!'
            }
          >
            prakashravichandran253@gmail.com
          </Link>
          , or find me on social media:
        </p>
        <SocialLinks />
      </Section>
      <Skills />
      <Experience />
      <Activity />
      <script type={'application/ld+json'} suppressHydrationWarning>
        {jsonLd}
      </script>
    </>
  );
}

export const metadata = createMetadata({
  title: 'About – Prakash Ravichandran',
  description: 'Learn more about me (Prakash Ravichandran), my career and more',
  exactUrl: 'https://prakashravichandran.com/about',
  keywords: ['bio', 'biography', 'information', 'about', 'career'],
});
