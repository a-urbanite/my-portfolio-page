import Header from '../components/Header/Header'
import Projects from '../components/Projects/Projects'
import contentfulClient from "../contentfulClient";

export async function getStaticProps() {
  const projectsFetch = contentfulClient.getEntries({
    content_type: "portfolioProject",
  });

  const [projects] =
    await Promise.all([
      projectsFetch
    ]);

  return {
    props: {
      projects: projects.items,
    },
  };
}

export default function Home({projects}) {

  // console.log(projects)

  return (
    <div >
      <Header></Header>
      <Projects projects={projects}></Projects>
    </div>
  )
}
