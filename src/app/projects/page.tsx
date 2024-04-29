import { ProjectsList } from '@/components/ui/projects';
import { createMetadata } from '@/utils/metadata';

export const metadata = createMetadata({
  title: 'Projects – Prakash Ravichandran',
  description:
    // eslint-disable-next-line max-len
    "Projects by Prakash Ravichandran. Get to know the projects I'm most proud of. Many of them are open-source.",
  exactUrl: 'https://prakashravichandran.com/projects',
  keywords: [
    'tech',
    'software',
    'development',
    'project',
    'portfolio',
    'app',
    'programming',
    'open-source',
  ],
});

export default function ProjectsPage() {
  return <ProjectsList title={'Projects'} />;
}
