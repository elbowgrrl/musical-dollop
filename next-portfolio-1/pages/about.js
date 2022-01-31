import Link from "next/link";

function About() {
  return (
    <main>
      <h1>Hi. I’m Megan. </h1>
      <p>
        I come from a background in Fashion and Theatre Design. As a lifelong
        Creative, it has always been my passion to engage and delight people.
        Since deciding to make the switch to the Tech industry in 2020 I have
        graduated from a Web Development Diploma program, completed an
        internship in UX design and am currently enrolled in the Google UX
        Design Professional Certificate.{" "}
      </p>
      <p>
        I love to learn and collaborating with a team comes naturally to me.
        When I was working in theatre from 2015 - 2020, I worked as project
        manager and team member to bring the creative vision to life. Before
        that, working in the fashion industry, I balanced beauty and
        functionality to create designs that were as useful as they were
        aesthetically pleasing.{" "}
      </p>
      <p>
        Throughout my career, it has been important for me to find solutions
        that create order from complexity and to realize these designs with
        technical expertise and I am excited to bring these skills to my next
        opportunity! I have always been interested in technology and it excites
        me to be part of an industry that has such a profound impact on all of
        our lives.{" "}
      </p>
      <Link href="/">
        <a>Home</a>
      </Link>
    </main>
  );
}

export default About;
