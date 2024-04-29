import '@/styles/globals.scss';

import Script from 'next/script';
import { type PropsWithChildren } from 'react';

import { Main } from '@/components/atoms/main';
import { Footer } from '@/components/molecules/footer';
import { Header } from '@/components/molecules/header';
import { Providers } from '@/providers';
import { Inter, Manrope } from '@/styles/fonts';
import cx from '@/utils/cx';
import { createMetadata } from '@/utils/metadata';

import { Meta } from './meta';

export const metadata = {
  ...createMetadata({
    title: 'Prakash Ravichandran – Embedded Systems Engineer ',
    description:
      // eslint-disable-next-line max-len
      "I'm a passionate and creative Embedded Systems Engineer from India. Visit my website to learn more about me and my projects",
    keywords: [
      'Prakash Ravichandran',
      'prakash',
      'prakash eee',
      'prakashravichandran',
      'open-source',
      'full-stack',
      'embedded engineer',
      'india',
      'electrical',
      'electronics',
      'control and instrumentation',
      'iot',
      'bio',
      'developer',
      'portfolio',
      'development',
      'android',
      'web',
    ],
  }),
};

const { UMAMI_WEBSITE_ID: umamiWebsiteId = '', IS_TEMPLATE = 'true' } =
  process.env;
export default function RootLayout(props: PropsWithChildren) {
  return (
    <html
      id={'page'}
      lang={'en'}
      className={cx(
        Inter.variable,
        Manrope.variable,
        IS_TEMPLATE === 'true' ? 'template' : '',
      )}
      suppressHydrationWarning
    >
      <head>
        <Meta />
        <Script
          src={'https://umami.jahir.dev/script.js'}
          data-website-id={umamiWebsiteId}
          data-domains={'prakashravichandran.com'}
          strategy={'lazyOnload'}
        />
      </head>
      <body>
        <Providers>
          <Header />
          <Main>{props.children}</Main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
