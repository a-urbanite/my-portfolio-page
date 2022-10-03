import Header from '../components/Header/Header'
import Projects from '../components/Projects/Projects'
import contentfulClient from "../contentfulClient";
import TimeLine from '../components/TimeLine/TimeLine';

export async function getStaticProps() {
  const projectsFetch = contentfulClient.getEntries({
    content_type: "portfolioProject",
  });

  const fileAssetFetch = contentfulClient.getEntries({
    content_type: "fileAsset",
  });

  const [projects, fileAssets] =
    await Promise.all([
      projectsFetch,
      fileAssetFetch
    ]);

  return {
    props: {
      projects: projects.items,
      fileAssets: fileAssets.items
    },
  };
}

export default function Home({projects, fileAssets}) {

  
  const profilePic = fileAssets.find((asset) => asset.fields.id === "profilePic")
  const cv = fileAssets.find((asset) => asset.fields.id === "cv")
  // console.log(profilePic)

  return (
    <div >
      <Header profilePic={profilePic} cv={cv}></Header>
      <Projects projects={projects}></Projects>
      <TimeLine></TimeLine>
    </div>
  )
}
