# [jahir.dev](https://jahir.dev)

[![GitHub Sponsor](https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=ff69b4)](https://github.com/sponsors/jahirfiquitiva)

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./preview-dark.png">
  <source media="(prefers-color-scheme: light)" srcset="./preview.png">
  <img alt="Website preview" src="./preview.png">
</picture>

## Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content**: [MDX](https://github.com/mdx-js/mdx) and [velite](https://velite.js.org/)
- **Database**: [Neon](https://neon.tech/) and [Drizzle ORM](https://orm.drizzle.team/)
- **Analytics**: [Umami](https://jahir.dev/analytics)
- **Deployment**: [Vercel](https://vercel.com)

## Project Structure

```bash
.
|____config
|____content
|____public
|____scripts
|____src
| |____actions
| |____app
| |____assets
| |____components
| | |____core
| | |____molecules
| | |____og
| | |____views
| | |____icons.ts
| |____data
| |____hooks
| |____lib
| |____providers
| |____styles
| |____types
| |____utils
```

- **`config/*`** - Includes all the custom configuration for MDX, [velite](https://velite.js.org/) and [Next.js](https://nextjs.org/)
- **`content/*`** - MDX blog posts and the content for the `donate` pages
- **`public/*`** - Static assets including images, fonts, audios, files, etc.
- **`scripts/*`** - Utilities to setup the project
- **`src/app/*`** - Every page and API route in the website. Uses the new [App Router](https://beta.nextjs.org/docs/getting-started#introducing-the-app-router) from [Next.js](https://nextjs.org/) `13.+`
- **`src/assets/*`** - Fonts and static images used in different components
- **`src/components/core/*`** - The simplest components. Most of them are stateless
- **`src/components/molecules/*`** - The main blocks for the website: `toolbar`, `footer`, `main` layout, `back-to-top` button and `social links`
- **`src/components/og/*`** - The code that powers dynamic open-graph images generation
- **`src/components/views/*`** - More complex components to build the different pages of my website. _(They're here to keep `src/app/` as clean as possible)_
- **`src/components/icons.ts`** - SVG icon paths. Icons come from [Material Design Icons](https://pictogrammers.com/library/mdi/) and [Lucide](https://lucide.dev/)
- **`src/data/*`** - JSON files containing data for projects and the [`uses`](https://jahir.dev/uses) page
- **`src/hooks/*`** - A couple hooks used throughout the app
- **`src/lib/*`** - Short for "library", a collection of helpful utilities or code for external services
- **`src/providers/*`** - React Contexts for storing the current theme and blog post reactions
- **`src/styles/*`** - Global styles with `scss`. Mostly use tailwind classes
- **`src/types/*`** - Some types definitions
- **`src/utils/*`** - More utilities functions but less complex than the ones in `lib`

## Running Locally

This application requires Node.js v18.18+.

1. Clone the project, install dependencies and run initial setup

   ```bash
   git clone https://github.com/jahirfiquitiva/jahir.dev.git
   cd jahir.dev
   yarn
   yarn setup # You can skip this if you're contributing to this repository. It removes all of my personal content and files
   ```

2. Create a `.env` file similar to [`.env.example`](https://github.com/jahirfiquitiva/jahir.dev/blob/main/.env.example).

3. (Optional) This project uses a postgres database to store the views and reactions count.

   ```sql
   CREATE TABLE counters (
     slug VARCHAR(255) PRIMARY KEY NOT NULL,
     views INTEGER NOT NULL DEFAULT 0,
     likes INTEGER NOT NULL DEFAULT 0,
     loves INTEGER NOT NULL DEFAULT 0,
     awards INTEGER NOT NULL DEFAULT 0,
     bookmarks INTEGER NOT NULL DEFAULT 0
   );
   ```

4. Run the project locally:

   ```bash
   yarn dev
   ```

<details>

<summary><strong>Note</strong></summary>

Some things might be broken or not found because the `yarn setup` script will remove many files.
Please double check the code and implementations.

</details>

## Cloning / Forking

Please review the [license](https://github.com/jahirfiquitiva/jahir.dev/blob/main/LICENSE), do not copy it directly, remove all of my personal content and files (resume, blog posts, images, etc.) by running `yarn setup` and please change the styling and colors to match your personal brand. You are free to use this code as inspiration or learning reference but this is not really intended to be a template.

<details>

<summary><strong>Additional changes</strong></summary>

Make sure to set the `IS_TEMPLATE` environment variable to false.
Otherwise, the colors in the website might be inverted. (See `src/styles/globals.scss`)

</details>

## Previous versions

All the previous versions of this website can be found at [jahirfiquitiva/prev-websites](https://github.com/jahirfiquitiva/prev-websites)


<path d="M29,10.232a2.387,2.387,0,0,0-.318-1.244,2.451,2.451,0,0,0-.936-.879Q22.552,5.241,17.353,2.376A2.642,2.642,0,0,0,14.59,2.4c-1.378.779-8.275,4.565-10.331,5.706A2.287,2.287,0,0,0,3,10.231V21.77a2.4,2.4,0,0,0,.3,1.22,2.434,2.434,0,0,0,.954.9c2.056,1.141,8.954,4.927,10.332,5.706a2.642,2.642,0,0,0,2.763.026q5.19-2.871,10.386-5.733a2.444,2.444,0,0,0,.955-.9,2.4,2.4,0,0,0,.3-1.22V10.232" style="fill:#659ad2"/><path d="M28.549,23.171a2.126,2.126,0,0,0,.147-.182,2.4,2.4,0,0,0,.3-1.22V10.232a2.387,2.387,0,0,0-.318-1.244c-.036-.059-.089-.105-.13-.16L16,16Z" style="fill:#00599c"/><path d="M28.549,23.171,16,16,3.451,23.171a2.435,2.435,0,0,0,.809.72c2.056,1.141,8.954,4.927,10.332,5.706a2.642,2.642,0,0,0,2.763.026q5.19-2.871,10.386-5.733A2.43,2.43,0,0,0,28.549,23.171Z" style="fill:#004482"/><path d="M19.6,18.02a4.121,4.121,0,1,1-.027-4.087l3.615-2.073A8.309,8.309,0,0,0,7.7,16a8.216,8.216,0,0,0,1.1,4.117A8.319,8.319,0,0,0,23.211,20.1L19.6,18.02" style="fill:#fff"/><polygon points="24.076 15.538 23.15 15.538 23.15 14.617 22.225 14.617 22.225 15.538 21.299 15.538 21.299 16.461 22.225 16.461 22.225 17.381 23.15 17.381 23.15 16.461 24.076 16.461 24.076 15.538" style="fill:#fff"/><polygon points="27.549 15.538 26.623 15.538 26.623 14.617 25.697 14.617 25.697 15.538 24.771 15.538 24.771 16.461 25.697 16.461 25.697 17.381 26.623 17.381 26.623 16.461 27.549 16.461 27.549 15.538"# prakashravichandran.netlify.app
