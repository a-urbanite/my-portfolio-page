import Intro from '../components/Intro/Intro'
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

  const skillSetFetch = contentfulClient.getEntries({
    content_type: "skillSet",
  });

  

  const [projects, fileAssets, timelineEntries, skillSets] =
    await Promise.all([
      projectsFetch,
      fileAssetFetch,
      timelineEntryFetch,
      skillSetFetch
    ]);

  return {
    props: {
      projects: projects.items,
      fileAssets: fileAssets.items,
      timelineEntries: timelineEntries.items,
      skillSets: skillSets.items
    },
  };
}

export default function Home({projects, fileAssets, timelineEntries, skillSets}) {

  return (
    <div >
      <HamburgerMenu/>
      <Intro fileAssets={fileAssets}/>
      <Projects projects={projects}/>
      <Career timelineEntries={timelineEntries}/>
      <Skills skillSets={skillSets}/>
      <Contact/>
    </div>
  )
}
