import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
//not sure if this path is correct
import data from ".//library/projectsdata.json"

export async function getStaticProps() {
  
  const allData = await data;

  return {
    props: {
      allData,
    },
  };
}

export default function Projects({ allData }) {
  const projectData = allData.projectData
  
  return (
    <div>
    <h1>Projects</h1>
    {/* Checking to see if props are coming through */}
    <span>{projectData[0].title}</span>
    <Link href="/"><a>Home</a></Link>
    </div>
  );
  

};
