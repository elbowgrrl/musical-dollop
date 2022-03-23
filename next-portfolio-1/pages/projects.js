import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from "pages/components/card.js"
import Link from 'next/link'
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
  console.log(projectData)
  
  return (
    <div>
    <h1>Projects</h1>
    {/* Need to map this instead */}
    <Card
    id={projectData.id}
    title={projectData.title}
    desc={projectData.desc}
    img={projectData.img}
    date={projectData.date}/>
    <Link href="/"><a>Home</a></Link>
    </div>
  );
  

};
