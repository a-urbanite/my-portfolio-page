import Header from '../components/Header/Header'
import Projects from '../components/Projects/Projects'
import contentfulClient from "../contentfulClient";
import Career from '../components/Career/Career';
import Skills from '../components/Skills/Skills';
import Contact from '../components/Contact/Contact';
import HamburgerMenu from '../components/HamburgerMenu/HamburgerMenu';
import { useState, useEffect } from 'react';

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

  return (
    <div >
      <HamburgerMenu/>
      <Header fileAssets={fileAssets}></Header>
      <Projects projects={projects}/>
      <Career/>
      <Skills/>
      <Contact/>
    </div>
  )
}
