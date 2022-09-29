import Header from '../components/Header/Header'
import Projects from '../components/Projects/Projects'
import contentfulClient from "../contentfulClient";

export async function getStaticProps() {
  const projectsFetch = contentfulClient.getEntries({
    content_type: "portfolioProject",
  });

  const profilePicFetch = contentfulClient.getEntries({
    content_type: "profilePic",
  });

  const [projects, profilePic] =
    await Promise.all([
      projectsFetch,
      profilePicFetch
    ]);

  return {
    props: {
      projects: projects.items,
      profilePic: profilePic.items
    },
  };
}

export default function Home({projects, profilePic}) {

  // console.log(projects)

  return (
    <div >
      <Header profilePic={profilePic[0]}></Header>
      <Projects projects={projects}></Projects>
    </div>
  )
}
