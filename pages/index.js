import Header from '../components/Header/Header'
import Projects from '../components/Projects/Projects'
import contentfulClient from "../contentfulClient";
import Career from '../components/Career/Career';
import Skills from '../components/Skills/Skills';
import Contact from '../components/Contact/Contact';
import HamburgerMenu from '../components/HamburgerMenu/HamburgerMenu';

export async function getStaticProps() {
  const projectsFetch = contentfulClient.getEntries({
    content_type: "portfolioProject",
  });

  const fileAssetFetch = contentfulClient.getEntries({
    content_type: "fileAsset",
  });

  const timelineEntryFetch = contentfulClient.getEntries({
    content_type: "timelineEntry",
  });

  const [projects, fileAssets, timelineEntries] =
    await Promise.all([
      projectsFetch,
      fileAssetFetch,
      timelineEntryFetch
    ]);

  return {
    props: {
      projects: projects.items,
      fileAssets: fileAssets.items,
      timelineEntries: timelineEntries.items
    },
  };
}

export default function Home({projects, fileAssets, timelineEntries}) {

  return (
    <div >
      <HamburgerMenu/>
      <Header fileAssets={fileAssets}/>
      <Projects projects={projects}/>
      <Career timelineEntries={timelineEntries}/>
      <Skills/>
      <Contact/>
    </div>
  )
}
